import React, {useState}from 'react';
import { Button, DatePicker, version,Form, Input,Checkbox  } from "antd";
import {auth} from './config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";   
import {db} from './config'
function Signup(){
   const navigate = useNavigate();
    const [username,setusername] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    const loginHandler = async() => {
        console.log(auth,email,password)
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
          setDoc(doc(db, "users", user.uid), {
            name: username,
            id: user.uid,
            email:email,
           
          })





          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage  )

          // ..
        });
    



}/*
    const onFinish = (values: any) => {
        console.log('Success:', values);
      }
        
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
   */   
      
return(
    <>
    <div className="loginclass">
        <h1 id="h">Please Sign Up</h1>
<Form
name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
//onFinish={onFinish}
//onFinishFailed={onFinishFailed}
autoComplete="off"
>
<Form.Item onChange={(e)=>{return (setusername(e.target.value)) }}
  label="Username"
  name="username"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input />
</Form.Item>


<Form.Item  onChange={(e)=>{return (setemail(e.target.value)) }}
  label="Email"
  name="Email"
  rules={[{ required: true, message: 'Please input your password!' }]}
>
  <Input />
</Form.Item>




<Form.Item onChange={(e)=>{return (setpassword(e.target.value)) }}
  label="Password"
  name="password"
  rules={[{ required: true, message: 'Please input your password!' }]}
>
  <Input />
</Form.Item>





<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit" onClick={loginHandler}>
    SignUp
  </Button>
  <Button type="primary" htmlType="submit" onClick={() => navigate('./signin')}>
    SignIn
  </Button>
</Form.Item>



</Form>
</div>
</>
)};
export {Signup}