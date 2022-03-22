import React from 'react';
import { Form,Input ,Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Particles from 'react-tsparticles';
import ParticlesOptions from '../../utils/Particles-config.js'
import { withRouter } from 'react-router-dom';

function Login(props) {

  const onFinish  = (values)=>{
    console.log(values)
    localStorage.setItem('token',JSON.stringify({username:values.username,password:values.password}))
    props.history.push('/')
    message.success("登陆成功")
  }
  return <div style={{background:'rgb(35,39,65)',height:'100%',overflow:'hidden'}}>
      <Particles height={document.documentElement.height} options={
        ParticlesOptions
      }/>
      <div className='formContainer'>
          <div className='logintitle'>后台管理系统</div>
          <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
  </div>;
}

export default  withRouter(Login)