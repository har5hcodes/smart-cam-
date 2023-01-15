import { Layout, Button, Input, Image, Card } from "antd";
import React from "react";
const { Content, Sider } = Layout;
const SignUp = () => {
  return (
    <Layout>
      <Sider width={600}>
        <Card
          cover={
            <div style={{ overflow: "hidden", height: "500px" }}>
              <img
                alt="example"
                style={{ height: "100%" }}
                src="https://images.unsplash.com/photo-1510849911856-cdc9335e5597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              />
            </div>
          }
        ></Card>
      </Sider>
      <Content
        style={{
          margin: "24px 16px 0",
        }}
      >
        <div
          style={{
            margin: "auto",
            padding: 24,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            width: "600px",
          }}
        >
          <Input placeholder="Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Button type="primary">Sign Up</Button>
        </div>
      </Content>
    </Layout>
  );
};
export default SignUp;
