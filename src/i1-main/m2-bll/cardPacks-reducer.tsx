import {Dispatch} from "redux";
import {cardsAPI} from "../m3-dal/api";
import {AxiosResponse} from "axios";



type InitialStateType = typeof initialState
// типизация для колоды карт
export type CardPack = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    type: "pack" | "folder"
    created: Date
    updated: Date
    __v: number
}
// типизация для колод
export type AxiosCardPacksResponseType = {
    cardPacks: Array<CardPack>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    // приходет в data,нахрена ?
    token: string
    tokenDeathTime: Date
}
// Action type
type setTotalPacksCountActionType = ReturnType<typeof setTotalPacksCount>
type ActionType = setTotalPacksCountActionType


const initialState = {
    cardPacksTotalCount: 0
}

export const cardPacksReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "cardPacks/SET_TOTAL_PACKS_COUNT":
            return {...state, cardPacksTotalCount: action.totalPackSCount}
        default:
            return {...state}
    }

}

export const setTotalPacksCount = (totalPackSCount: number) => ({type: "cardPacks/SET_TOTAL_PACKS_COUNT", totalPackSCount} as const )

export const getCardPacks = () => (dispatch: Dispatch) => {
    cardsAPI.getCardPack()
        .then((res: AxiosResponse<AxiosCardPacksResponseType>) => {
            dispatch(setTotalPacksCount(res.data.cardPacksTotalCount))
            console.log(res)
        })
}

