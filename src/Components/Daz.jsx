import React, { useState } from "react";
import { HiViewList } from "react-icons/hi";
import { Button, Col, Drawer, Row, Form } from "antd";
const FormBox = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    
    setOpen(false);
  };
  // const onChange = (e) => {
  //   setPlacement(e.target.value);
  // };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {/* <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space> */}
      <Button
        style={{ backgroundColor: "#e0e8fb" }}
        type="primary"
        onClick={showDrawer}
      >
        <HiViewList fill="#000" size={20} />
      </Button>
      <Drawer
      setPlacement={setPlacement}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Row>
          <Col>
            <Row>
              <Col span={24}>
                {" "}
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  {/* <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item> */}
                </Form>
              </Col>
              {/* <Col span={24}>
                {" "}
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              </Col> */}
            </Row>
          </Col>
        </Row>

        <div className="Main-Drawer-navbar">
          <ul className="ul-navbar-drawer">
            <li className="navbar-drawer">Home</li>
            <li className="navbar-drawer">Class Help</li>
            <li className="navbar-drawer">Online Certification</li>
            <li className="navbar-drawer">Online Exam Help</li>
            <li className="navbar-drawer-btn">
              <button className="btn-chat-drawer">CHAT NOW</button>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default FormBox;
