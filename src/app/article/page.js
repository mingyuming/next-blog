import SortBackGround from '@/components/SortBackGround';
import {setAllTime, sortByTime} from 'utils';
import styles from './page.module.css';
import Link from 'next/link';

const Article = async () => {
    const {data, info} = await fetch('http://39.101.169.247/api/home').then(res => res.json());
    const timeLineMap = sortByTime(setAllTime(data));

    const renderList = list => {
        if (!Array.isArray(list)) {
            return;
        }
        return list.map(item => {
            const {id, title, son} = item;
            return (
                <div key={title} className={styles.item}>
                    {!son ? <Link href={`/blog/${id}`}>{title}</Link> : title}
                    {renderList(son)}
                </div>
            );
        });
    };

    return (
        <div>
            <SortBackGround title="归档" />
            <div className={styles.content}>{renderList(timeLineMap)}</div>
        </div>
    );
};

export default Article;
