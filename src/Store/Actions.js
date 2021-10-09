//产生action   action的本质是一个普通对象，该对象描述了一个操作行为
//添加一个商品的action
export const addProduction = (production) => {
    return {
        type:"add",
        pname:production
    }
}
//减少一个商品的action
export const subProduction = (production) => {
    return {
        type:"sub",
        pname:production
    }
}