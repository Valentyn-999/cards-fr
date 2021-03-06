import {cardsAPI, LearnCardType, ThunkLearnPutType} from "../../../i1-main/m3-dal/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../i1-main/m2-bll/store";
import {AxiosResponse} from "axios";
import {message} from "antd";


const initialState = {
    card_id: '',
    cardsPack_id: '',
    created: '',
    grade: 0,
    more_id: '',
    shots: 0,
    updated: '',
    user_id: '',
    __v: 0,
    _id: '',
}

export type InitialStateType = typeof initialState
//AC type

type CARD = ReturnType<typeof updateCardAC>
type ActionsType = CARD
//TC type
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

export const learnReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case updatedCard:
            return {
                ...state,
                card_id: action.data.card_id,
                cardsPack_id: action.data.cardsPack_id,
                created: action.data.created,
                grade: action.data.grade,
                more_id: action.data.more_id,
                shots: action.data.shots,
                updated: action.data.updated,
                user_id: action.data.user_id,
                __v: action.data.__v,
                _id: action.data._id,
            }
        default:
            return state
    }
}
//const
const updatedCard = 'updatedCard'



//ac
export const updateCardAC = (data: LearnCardType) => ({ type: updatedCard, data } as const )

//tc
export const cardsEvaluation = (data: ThunkLearnPutType):ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
    cardsAPI.evaluationCard(data)
        .then((res:AxiosResponse<LearnCardType>) => {
            dispatch(updateCardAC(res.data))
        })
        .catch((err) => {
            const error = err.response
                ? err.response.data.error : (err.message + ', more details in the console');
            message.error(error, 2)
        })
    }













