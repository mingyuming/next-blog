import {HomeContent} from '@/components/Home/Content';
import styles from './page.module.css';

export default async function Home(props) {
    const {data, info} = await fetch('http://39.101.169.247/api/home?page=1').then(res => res.json());

    return (
        <div className={styles.container}>
            <HomeContent data={data} info={info} />
        </div>
    );
}
