import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import Rou from "../Rou";

const Layouts = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Sider className="sider">
          <Sidebar />
        </Sider>
        <Layout className="layout_content">
          <Header className="header"><Headers/></Header>
          <Content className="content">
            <Rou />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Layouts;
