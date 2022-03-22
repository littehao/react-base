import React from 'react'
import { Switch,Route ,Redirect} from 'react-router-dom';
import Home from '@/views/home/Home';
import UserList from '@/views/user-manage/UserList';
import TodoList from '@/views/todolist/TodoList';

export default function MainRouter() {

  return (
    <Switch>
        <Route  path='/home' component={Home}></Route>
        <Route  path='/user-manage/list' component={UserList}></Route>
        <Route  path='/todolist' component={TodoList}></Route>
        <Redirect from="/"  to="/home" exact></Redirect>
    </Switch>
  )
}
