import React,{useState} from 'react';
import { Button, DatePicker, version,Form, Input,Checkbox  } from "antd";
import {auth} from './config'
import { useNavigate } from "react-router-dom";   
import { signInWithEmailAndPassword } from "firebase/auth";
import './index.css';
function Login(){
  const navigate = useNavigate();
  const [username,setusername] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');


  const loginHandler = async() => {
      console.log(auth,email,password)
      console.log(email, password)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(auth,email,password)
        console.log('user logged in. ')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage  )
        console.log(auth)
        console.log(email)
        console.log(password)

        // ..
      });
  



}
      
return(
    <>
    <div className="loginclass">
        <h1 id="h">Please Login</h1>
<Form
name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
////onFinish={onFinish}
//onFinishFailed={onFinishFailed}
autoComplete="off"
>
<Form.Item  onChange={(e)=>{return (setemail(e.target.value)) }}
  label="Username"
  name="email"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input />
</Form.Item>

<Form.Item onChange={(e)=>{return (setpassword(e.target.value)) }}
  label="Password"
  name="password"
  rules={[{ required: true, message: 'Please input your password!' }]}
>
  <Input.Password />
</Form.Item>

<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
  <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit" onClick={loginHandler}>
    Submit
  </Button>
</Form.Item>
</Form>
</div>
</>
)};
export {Login}