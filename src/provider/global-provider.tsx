import { createContext, ReactNode, useMemo, useEffect, useState } from 'react';

import Locale, { DEFAULT_LANG } from '@/locale/index';
import { LANG_STORE_KEY } from '@/config/storage';

export const InfoContext = createContext(
    {} as {
        lang: string;
        locale: any;
        setLocale: (lang: string) => void;
    }
);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<string>(DEFAULT_LANG);

    const initLang = () => {
        const langCache = localStorage.getItem(LANG_STORE_KEY);
        if (langCache && langCache != lang && Object.keys(Locale).indexOf(langCache) >= 0) {
            setLang(langCache);
        }
    };

    useEffect(() => {
        initLang();
    }, []);

    const context = useMemo(() => {
        return {
            lang,
            locale: Locale[lang],
            setLocale: (lang: string) => {
                const curLang = Object.keys(Locale).indexOf(lang) >= 0 ? lang : DEFAULT_LANG;
                setLang(curLang);
                localStorage.setItem(LANG_STORE_KEY, curLang);
            },
        };
    }, [lang]);

    return <InfoContext.Provider value={context}>{children}</InfoContext.Provider>;
};

export default GlobalProvider;
