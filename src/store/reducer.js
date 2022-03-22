const defaultObj = {
    inputValue:"",
    list:[]
}
const reducers =  (state = defaultObj,action)=>{
    // 监听 dispatch分发 执行 changeInput
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }
    // 监听新增 dispatch分发
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState;
    }
     // 监听删除 dispatch分发
    if(action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState;
    }

    return state;
}

export default reducers;