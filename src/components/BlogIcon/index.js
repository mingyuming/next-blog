import {formatTime} from 'utils';
import Icon from '../Icon';
import styles from './page.module.css';

const BlogIcon = ({params}) => {
    const {hit, timer, leave} = params;
    const {GMT, Year, Moth, Day} = formatTime(timer);

    return (
        <div className={styles.icon}>
            <Icon type="icon-fabushijian" />
            {Year}-{Moth}-{Day} <Icon type="icon-dianji" />
            {hit} <Icon type="icon-liuyan" />
            {leave || 0}
        </div>
    );
};

export default BlogIcon;
