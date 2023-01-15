import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Button, Card, Avatar, Input, Dropdown, Space } from "antd";
import Typography from "antd/es/typography/Typography";
const { Content, Header } = Layout;
const { Meta } = Card;
const { Search } = Input;

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
];

const Dashboard = () => {
  return (
    <Layout>
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "12px",
          }}
        >
           <Typography style={{ color: "white", fontSize: "24px", fontWeight: "600", letterSpacing: "2px" }}>SmartCam</Typography> 
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            //   onSearch={onSearch}
            style={{ width: "300px" }}
          />
          <Button
            type="text"
            style={{ color: "white", fontWeight: "600", letterSpacing: "2px" }}
          >
            Sign Up
          </Button>
          <Button
            type="text"
            style={{ color: "white", fontWeight: "600", letterSpacing: "2px" }}
          >
            Log In
          </Button>
          <Button>Submit a webcam</Button>
          <Avatar
            size="large"
            style={{
              color: "#1644ff",
              backgroundColor: "#1688ff",
            }}
            icon={<UserOutlined />}
          />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <MenuUnfoldOutlined
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: "24px", color: "white" }}
            />
          </Dropdown>
        </div>
      </Header>
      <Content style={{ height: "90vh", padding: "30px" }}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default Dashboard;
