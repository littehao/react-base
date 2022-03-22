import React from 'react';
import {Input,Button,List} from 'antd'
import {connect}  from 'react-redux'
import {changeInputAction,addItemAction,deleteItemAction}  from  '@/store/actionCreatores'

function TodoList(props){
    let {inputValue,changeInput,addBtn,list,deleteItem}  = props;
    return ( 
        <div style={{margin:'10px'}}>
            <div style={{marginBottom:'10px'}}>
                <Input value={inputValue} style={{width:'400px',marginRight:'10px'}} type="text" placeholder='请输入内容' onChange={changeInput}/>
                <Button type='primary'  onClick={addBtn}>增加</Button>
            </div>
            <List bordered dataSource={list} renderItem={(item,index)  =>(
                <List.Item  key={index} onClick={()=>{deleteItem(index)}}>{item}</List.Item>
            )}></List>
        </div>
     );
}


//映射props
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps =  (dispatch)=>{
    return  {
        changeInput(e){
            let action = changeInputAction(e.target.value)
            dispatch(action)
        },
        addBtn(){
            let action = addItemAction();
            dispatch(action)
        },
        deleteItem(index){
            let action = deleteItemAction(index);
            dispatch(action)
        }
    }
}

//连接器 创建映射关系
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default VisibleTodoList;