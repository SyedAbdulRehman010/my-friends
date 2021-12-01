import React from 'react';
import { Button, DatePicker, version,Form, Input,Checkbox  } from "antd";

   
function Signup(){
    
    const onFinish = (values: any) => {
 
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      
return(
    <>
    <div className="loginclass">
        <h1 id="h">Please Sign Up</h1>
<Form
name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off"
>
<Form.Item
  label="Username"
  name="username"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input />
</Form.Item>


<Form.Item
  label="Email"
  name="Email"
  rules={[{ required: true, message: 'Please input your password!' }]}
>
  <Input />
</Form.Item>




<Form.Item
  label="Password"
  name="password"
  rules={[{ required: true, message: 'Please input your password!' }]}
>
  <Input />
</Form.Item>





<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit" onClick={formsubmit}>
    SignUp
  </Button>
  <Button type="primary" htmlType="submit" id>
    SignIn
  </Button>
</Form.Item>



</Form>
</div>
</>
)};
export {Signup}