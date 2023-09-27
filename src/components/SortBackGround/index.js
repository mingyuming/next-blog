import styles from './page.module.css';

const SortBackGround = ({title, about = '每一个不曾起舞的日子,都是对生命的辜负'}) => {
    return (
        <div className={styles.wrapper} style={{backgroundImage: 'url(/img/sort-bg.jpg)'}}>
            <div className={styles.title}>『 {title} 』</div>
            <div className={styles.desc}>{about}</div>
        </div>
    );
};

export default SortBackGround;
