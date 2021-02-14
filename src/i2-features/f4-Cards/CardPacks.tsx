import React from "react";
import {cardsAPI} from "../../i1-main/m3-dal/api";
import SuperButton from "../../i1-main/m1-ui/u4-components/SuperComponents/rc2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {getCardPacks} from "../../i1-main/m2-bll/cardPacks-reducer";
import {AppRootStateType} from "../../i1-main/m2-bll/store";

export const CardPacks = () => {
    const totalPacksCount = useSelector<AppRootStateType, number>( state => state.cardPacks.cardPacksTotalCount)
    const dispatch = useDispatch()

    const callback = () => {
        dispatch(getCardPacks())
    }

    const pageCount = Math.ceil(totalPacksCount/ 4)
    const pages = new Array
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (<>
        {pages.map((el, i) => <span key={i}>{el}</span>)}
           <SuperButton onClick={callback}>click</SuperButton>
    </>)
}