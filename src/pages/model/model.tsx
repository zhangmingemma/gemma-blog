import { InfoContext } from "@/provider/global-provider"
import style from './model.module.less'
import { useContext } from "react"

const Model = () => {
    const {locale} = useContext(InfoContext)
    return (
        <div className={style.model}>
            <div className={style.modelTitle}>{locale['model.intro.title']}</div>
            <div className={style.modelMain}>
                
            </div>
        </div>
    )
}

export default Model