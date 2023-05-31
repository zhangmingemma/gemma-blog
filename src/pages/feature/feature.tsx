import { useContext, useEffect, useState } from 'react';
import style from './feature.module.less';
import { InfoContext } from '@/provider/global-provider';
import classNames from 'classnames';
import Feature1Icon from '@/assets/svg/feature1.svg';
import Feature2Icon from '@/assets/svg/feature2.svg';
import Feature3Icon from '@/assets/svg/feature3.svg';

const Feature = ({ show }: { show: boolean }) => {
    const { locale } = useContext(InfoContext);
    const featureIcons = [Feature1Icon, Feature2Icon, Feature3Icon];

    return (
        <div className={style.feature} id="js__feature">
            <div className={classNames(style.featureBox, show && style.animation)}>
                <div className={style.featureBoxTitle}>{locale['model.feature.title']}</div>
                <div className={style.featureBoxList}>
                    {locale['model.feature.list'].map((item: { title?: string; desc: string }, index: number) => (
                        <div className={style.item} key={index}>
                            <div className={style.itemIndex}>
                                {(index + 1).toString().length < 2 ? '0' : ''}
                                {index + 1}
                            </div>
                            <div className={style.itemInfo}>
                                <div className={style.itemInfoTitle}>{item.title}</div>
                                <div className={style.itemInfoDesc}>{item.desc}</div>
                            </div>
                            <img className={style.itemIcon} src={featureIcons[index]} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;
