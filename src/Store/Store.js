//唯一的数据源
import { createStore } from 'redux';
import reducer from './Reducer.js'
//初始数据
let initValues = {
    apple:1,
    orange:2,
    banana:3
}
//创建数据源
//数据源有两项职能1.存储数据 2.变更数据
//createStore方法  参数1：用于处理数据修改 2.用于提供初始化数据
const store = createStore(reducer,initValues)
export default store
