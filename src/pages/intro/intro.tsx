import style from './intro.module.less'
import BgLeftImg from '@/assets/svg/bg-left.svg'
import BgCenterImg from '@/assets/svg/bg-center.svg'
import BgRightImg from '@/assets/svg/bg-right.svg'
import { useContext } from 'react'
import { InfoContext } from '@/provider/global-provider'

const Intro = () => {
    const {locale} = useContext(InfoContext)
    return (
        <div className={style.intro}>
            <img className={style.introBgLeft} alt="" src={BgLeftImg} />
            <img className={style.introBgCenter} alt="" src={BgCenterImg} />
            <img className={style.introBgRight} alt="" src={BgRightImg} />
            <div className={style.introInfo}>
                <div className={style.introInfoTitle}>{locale['home.title']}</div>
                <div className={style.introInfoDesc}>{locale['home.desc']}</div>
            </div>
        </div>
    )
}

export default Intro