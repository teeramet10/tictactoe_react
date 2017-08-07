import * as types from '../constant/test.const'

export const filterText=(text)=>({
    type : types.FILTERTEXT,
    payload:{
        text
    }
    
})

export const inStock=(status)=>({
    type:types.INSTOCK,
    payload:{
        status
    }
})
