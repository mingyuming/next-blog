import BlogIcon from '@/components/BlogIcon';
import styles from './page.module.css';
import markdownToHtml from 'utils/markdown';
import 'github-markdown-css';
import 'prismjs/themes/prism.css';

const Blog = async ({params}) => {
    const {data} = await fetch(`http://39.101.169.247/api/detail?id=${params.id}`).then(res => res.json());
    const [value] = data;
    const {cation, title, md, timer, hit} = value;
    const __html = await markdownToHtml(md);

    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.icon}>
                <BlogIcon params={{timer, hit, cation}} />
            </div>
            <div className={styles.article}>
                <article className="markdown-body" dangerouslySetInnerHTML={{__html}}></article>
            </div>
        </div>
    );
};

export default Blog;
