import style from './App.module.less';
import Header from '@/components/header/header';
import GlobalProvider from '@/provider/global-provider';
import Intro from './pages/intro/intro';
import { useEffect, useState } from 'react';
import Feature from './pages/feature/feature';
import Model from './pages/model/model';

function App() {
    const [showFeature, setShowFeature] = useState<boolean>(false)

    const onscroll = (e:any) => {
        console.error(',e', e)
        const ele = document.getElementById('js__feature')
        console.error(ele?.scrollTop)
        console.error(document.body.scrollTop)
        console.error(document.documentElement.scrollTop)
        console.error(window.scrollY, window.pageYOffset)
        console.error('scroll')
        setShowFeature(true)
    }

    useEffect(() => {
        document.addEventListener('scroll', onscroll, true)
        return () => {
            document.removeEventListener('scroll', onscroll)
        }
    }, [])

    return (
        <GlobalProvider>
            <div className={style.app} id="app">
                <Header />
                <div className={style.content}>
                    <Intro/>
                    <Feature show={showFeature}/>
                    <Model/>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
