import style from './header.module.less';
import GithubIcon from '@/assets/svg/github.svg'
import ArrowIcon from '@/assets/svg/arrow.svg'
import Lang from '@/components/lang/lang';
import Logo from '@/components/logo/logo';

const Header = () => {
    return (
        <div className={style.header}>
            <Logo />
            <div className={style.headerContent}></div>
            <Lang />
            <div className={style.headerGithub} onClick={e => window.open('https://www.baidu.com', '__blank')}>
                <img className={style.icon} src={GithubIcon} alt=""/>
                <img className={style.arrow} src={ArrowIcon} alt=""/>
            </div>
        </div>
    );
};

export default Header;
