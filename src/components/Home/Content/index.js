import styles from './page.module.css';
import BlogIcon from '@/components/BlogIcon';
import Link from 'next/link';

export const HomeContent = ({data = [], info = []}) => {
    return (
        <div className={styles.wrapper}>
            {data.map((item, index) => {
                const {title, description, url, id, cation, hit, timer} = item;
                return (
                    <div className={styles.container} key={item.id}>
                        <div className={styles.bottom}>
                            <h4 className={styles.title}>{title}</h4>
                            <BlogIcon params={{...item, leave: info[index]?.['count(*)']}} />
                        </div>
                        <div className={styles.bg}>
                            <img src={url} alt="" className={styles.img} width={280} loading="lazy" />
                        </div>
                        <div className={styles['left-bgcover']}></div>
                        <div className={styles['right-bgcover']}></div>
                        <Link href={`/blog/${id}`}>
                            <div className={styles['bg-cover']}>
                                <p className={styles.desc}>{description}</p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
