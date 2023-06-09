import style from './header.module.less';
import GithubIcon from '@/assets/svg/github.svg';
import ArrowIcon from '@/assets/svg/arrow.svg';
import Lang from '@/components/lang/lang';
import Logo from '@/components/logo/logo';
import { HEADER_THEME } from '@/config/const';
import classNames from 'classnames';

const Header = ({theme}:{theme:HEADER_THEME}) => {
    return (
        <div className={classNames(style.header, theme===HEADER_THEME.WHITE && style.whiteTheme)}>
            <Logo />
            <div className={style.headerContent}></div>
            <Lang />
            <div className={style.headerGithub} onClick={(e) => window.open('https://www.baidu.com', '__blank')}>
                <img className={style.icon} src={GithubIcon} alt="" />
                <img className={style.arrow} src={ArrowIcon} alt="" />
            </div>
        </div>
    );
};

export default Header;
