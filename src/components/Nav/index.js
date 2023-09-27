import styles from './nav.module.css';
import Link from 'next/link';

const HEDER_TITLE = [
    {
        title: '首页',
        url: '/',
    },
    {
        title: '分类',
        url: '/sort',
        son: [
            {
                title: '知识总结',
                url: '/sort/1',
            },
            {
                title: '代码分享',
                url: '/sort/2',
            },
            {
                title: '算法|模式',
                url: '/sort/3',
            },
            {
                title: '生活日记',
                url: '/sort/4',
            },
        ],
    },
    {
        title: '归档',
        url: '/article',
    },
    {
        title: '时间线',
        url: '/timeline',
    },
];

const Nav = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <span className={styles.title}>MingYu</span>
                <div className={styles.right}>
                    {HEDER_TITLE.map(({title, url, son}) => {
                        if (Array.isArray(son)) {
                            return (
                                <div key={url} className={styles.sort}>
                                    <span>{title}</span>
                                    <div className={styles.menu}>
                                        <ul key={url} className={styles.list}>
                                            {son.map(({url, title}) => {
                                                return (
                                                    <div key={url} className={styles.item}>
                                                        <Link key={url} href={url}>
                                                            {' '}
                                                            {title}
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <Link key={url} href={url}>
                                {title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export default Nav;
