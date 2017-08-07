import * as types from '../constant/first.const'
export const changeName=(name)=>({
    type:types.CHANGENAME,
    payload:{
        name
    }
})

export const changeJob=(job)=>({
    type:types.CHANGEJOB,
    payload:{
        job
    }
})

export const onSearch=(text)=>({
    type:types.ONSEARCH,
    payload:{
        text
    }
})