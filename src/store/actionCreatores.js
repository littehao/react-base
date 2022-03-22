import {
    CHANGE_INPUT_TYPE,
    ADD_ITEM_TYPE,
    DELETE_ITEM_TYPE,
} from './actionTypes'

export const changeInputAction  =  (value)=>({
    type:CHANGE_INPUT_TYPE,
    value
})

export const addItemAction  =  ()=>({
    type:ADD_ITEM_TYPE
})

export const deleteItemAction  =  (index)=>({
    type:DELETE_ITEM_TYPE,
    index
})