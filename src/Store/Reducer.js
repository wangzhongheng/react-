//提供数据修改的逻辑
//先复制一份原有数据，修改之后再返回
//参数一表示唯一的数据源
//参数二action表示视图中触发的action
export default (state,action) => {
    let newState = null;
    switch( action.type ){
        case "add":
            //控制商品数量加一
            newState = { ...state };
            newState[action.pname] = newState[action.pname] + 1;
            return newState
        case "sub":
            //控制商品数量减一
            newState = { ...state };
            if(newState[action.pname] > 1){
                newState[action.pname] = newState[action.pname] - 1;
                console.log(newState[action.pname])
            }
            return newState
        default:
            return state
    }
}
