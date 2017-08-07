import * as types from '../constant/ship.const'

export const filterTextShip= (text,name) => ({
    type: types.FILTERTEXTSHIP,
    payload:{
        text,
    }
})

export const setItem=(data)=>({
    type:types.SETITEM,
    payload :{
        data
    }
})

export const setRecord=(value)=>({
    type:types.SETRECORD,
    payload :{
        value
    }
})


export const changeOffset=(value)=>({
    type:types.CHANGEOFFSET,
    payload :{
        value
    }
})
