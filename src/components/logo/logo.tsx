import { useContext } from 'react';
import style from './logo.module.less';
import LogoIcon from '@/assets/svg/logo.svg';
import { InfoContext } from '@/provider/global-provider';

const Logo = ({ color }: { color?: string }) => {
    const { locale } = useContext(InfoContext);
    return (
        <div className={style.logo} style={{ color: color || '#ffffff' }}>
            <span>{locale['logo.name.first']}</span>
            <img alt="" src={LogoIcon}></img>
            <span>{locale['logo.name.last']}</span>
        </div>
    );
};

export default Logo;
