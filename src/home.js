import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState,useContext } from 'react';
import { Modal, Button,Form,Input } from 'antd';
import {useParams} from 'react-router-dom'
import { collection,getDocs,query,where,onSnapshot ,doc,updateDoc} from "firebase/firestore";
import {db} from './config';
import {Userdet} from './login'






function Home(){
  const [useremail,setuseremail] = useState();
  const [username,setusername] = useState();
  const {email} = useParams()
 
  console.log(email)
  
  const colRef = collection(db,'users')
  getDocs(colRef).then((snapshot)=>{console.log(snapshot.docs)})
  const q = query(colRef,where("email","==",email))
  

  onSnapshot(q,(snapshot)=>{
    let userdet=[]
    snapshot.docs.map((doc)=>{
      userdet.push({...doc.data()})
    })
    console.log(userdet)
    console.log(userdet [0].name)
    setusername(userdet [0].name)
    setuseremail(userdet [0].email)
  })

    

const { Meta } = Card;
const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
return(
    <>
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting"  onClick={showModal}/>,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={username}
      description={useremail}
    />
  </Card>,


  <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
  <Form
name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
////onFinish={onFinish}
//onFinishFailed={onFinishFailed}
autoComplete="off"
>
<Form.Item onChange={(e)=>{setusername(e.target.value)}}
  label="Your Name"
  name="Name"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input />
</Form.Item>


<Form.Item wrapperCol={{ offset: 8, span: 16 }} >
  <Button type="primary" htmlType="submit" >
    Submit
  </Button>
</Form.Item>
</Form>
      </Modal>


  </>
)}

export {Home}