import BlogIcon from '@/components/BlogIcon';
import styles from './page.module.css';
import markdownToHtml from 'utils/markdown';
import 'github-markdown-css';
import 'prismjs/themes/prism.css';
import {HomeContent} from '@/components/Home/Content';
import SortBackGround from '@/components/SortBackGround';

const map = {
    1: '学习笔记',
    2: '环境搭建',
    3: '知识总结',
    4: '日记',
};

const Blog = async ({params}) => {
    const {id} = params;
    const {data, info} = await fetch('http://39.101.169.247/api/home?page=1').then(res => res.json());
    const [value] = data;
    const cationList = data.filter(item => item.cation === map[id]);

    return (
        <div className={styles.container}>
            <SortBackGround title="分类" />
            <HomeContent data={cationList} info={info} />
        </div>
    );
};

export default Blog;
