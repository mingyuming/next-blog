import {DATA_MAP} from '@/constants/index';

export const formatTime = timestamp => {
    // 此处时间戳以毫秒为单位
    let date = new Date(parseInt(timestamp));
    let Year = date.getFullYear();
    let Moth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let Day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let Hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let Minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let Second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let GMT = Year + '-' + Moth + '-' + Day + '   ' + Hour + ':' + Minute + ':' + Second;

    return {
        Year,
        Moth,
        Day,
        Hour,
        Minute,
        Second,
        GMT,
    };
};

export const setAllTime = (list = []) => {
    return list.map(item => {
        const {timer} = item;
        const {Year, Moth, Day} = formatTime(timer);

        return {
            ...item,
            Year,
            Moth,
            Day,
        };
    });
};

export const sortByTime = (list = [], keyList = ['Year', 'Moth', 'Day']) => {
    const isLast = keyList.length === 1;
    const result = [];
    const key = keyList[0];
    const remainKey = keyList.slice(1);
    list.forEach(item => {
        const {[key]: time, id} = item;
        if (result.find(i => i[key] === time)) {
        } else {
            const remainList = list.filter(i => i[key] === time);
            result.push({
                id,
                [key]: time,
                title: `${time}${DATA_MAP[key]}`,
                son: isLast ? remainList : sortByTime(remainList, remainKey),
            });
        }
    });
    return result;
};
