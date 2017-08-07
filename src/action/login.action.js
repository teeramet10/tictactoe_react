import * as types from '../constant/login.const'

export const changeText = (text,name) => ({
    type: types.CHANGETEXT,
    payload:{
        text,
        name
    }
})

export const changeShowing=(status)=>({
    type:types.CHANGESTATUS,
    payload :{
        status
    }
})



