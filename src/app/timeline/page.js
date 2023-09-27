import clsx from 'clsx';
import styles from './page.module.css';

const COLOR_TYPE = {
    0: '#52c41a',
    1: '#1890ff',
    2: '#f5222d',
};

const Timeline = async () => {
    const data = await fetch('http://39.101.169.247/api/line').then(res => res.json());
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>博客规划</div>
            <div className={styles.content}>
                {data.map(({text, timer, type}, index) => {
                    return (
                        <div key={text} className={clsx(styles.item, {[styles.last]: index === data.length - 1})}>
                            <div
                                className={styles.icon}
                                style={{
                                    borderColor: COLOR_TYPE[type],
                                }}></div>
                            <div className={clsx(styles.text)}>
                                {text}
                                {timer}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
