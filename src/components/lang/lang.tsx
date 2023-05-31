import style from './lang.module.less';
import locale from '@/locale/index';
import { useContext } from 'react';
import { InfoContext } from '@/provider/global-provider';
import classNames from 'classnames';

const localeTitleMap: { [propName: string]: string } = {
    'zh-CN': '中',
    'en-US': 'EN',
};

const Lang = () => {
    const { lang, setLocale } = useContext(InfoContext);
    return (
        <div className={style.lang}>
            {Object.keys(locale).map((key) => (
                <div
                    className={classNames(style.langItem, lang === key && style.active)}
                    onClick={(e) => setLocale(key)}
                    key={key}
                >
                    {localeTitleMap[key]}
                </div>
            ))}
        </div>
    );
};

export default Lang;
