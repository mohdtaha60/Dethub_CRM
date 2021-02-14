import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu, Row } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";

function App() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const [amount, setAmount] = useState();

  const pay = () => {
    axios
      .post(
        "http://127.0.0.1:3000/orders",
        {
          amount: amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res.data));
  };

  return (
    <div className="App">
      <Header style={{ padding: 0 }} className="header">
        <img
          style={{ height: "70px" }}
          src="http://a2markets.com/static/media/A2MARKETS.241acacf.png"
        />
        <Menu
          style={{ float: "right" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsible>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: "20px" }}>
          <input type="number" onChange={(e) => setAmount(e.target.value)} />
          <button onClick={pay}>Pay</button>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
