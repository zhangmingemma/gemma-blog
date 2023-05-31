import style from './App.module.less';
import Header from '@/components/header/header';
import GlobalProvider from '@/provider/global-provider';
import Intro from './pages/intro/intro';
import { useEffect, useState } from 'react';
import Feature from './pages/feature/feature';
import Model from './pages/model/model';
import { HEADER_THEME } from './config/const';

function App() {
    const [showFeature, setShowFeature] = useState<boolean>(false);
    const [headerTheme, setHeaderTheme] = useState<HEADER_THEME>(HEADER_THEME.BLACK)

    const onscroll = (e: any) => {
        const root:HTMLElement|null = document.getElementById('root');
        const feature:HTMLElement|null = document.getElementById('js__feature');
        console.error('scrooll', root?.scrollTop)
        console.error('feature offset', feature?.getBoundingClientRect().top)
        if (root && root.scrollTop >= 50) {
            setShowFeature(true);
        }  
        if (feature) {
            const theme = feature.getBoundingClientRect()?.top <= 0 ? HEADER_THEME.WHITE : HEADER_THEME.BLACK
            setHeaderTheme(theme)
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', onscroll, true);
        return () => {
            document.removeEventListener('scroll', onscroll);
        };
    }, []);

    return (
        <GlobalProvider>
            <div className={style.app} id="app">
                <Header theme={headerTheme}/>
                <div className={style.content}>
                    <Intro />
                    <Feature show={showFeature} />
                    <Model />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
