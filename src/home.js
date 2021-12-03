import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Modal, Button,Form,Input } from 'antd';
import { collection, query, where } from "firebase/firestore";
import {db} from './config'
function Home(){
const citiesRef = collection(db, "users");  
const { Meta } = Card;
const [isModalVisible, setIsModalVisible] = useState(false);
const q = query(citiesRef, where("name", "==", "ddd"));
console.log(q.data)
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
      title="Card title"
      description="This is the description"
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
<Form.Item  
  label="Your Name"
  name="Name"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input />
</Form.Item>


<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit" >
    Submit
  </Button>
</Form.Item>
</Form>
      </Modal>


  </>
)}

export {Home}