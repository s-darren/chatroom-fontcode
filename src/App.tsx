import React, { Component } from 'react';
import './App.css';
import { List, Avatar, Tooltip, Layout, Button, Input } from 'antd';
const { TextArea } = Input;
const {
  Header, Footer, Sider, Content,
} = Layout;
import moment from 'moment';
import {addRoomMessage} from './interface'
const data = [
  {
    title: 'Ant Design Title 1',
    name: 'a'
  },
  {
    title: 'Ant Design Title 2',
    name: 'b'
  },
  {
    title: 'Ant Design Title 3',
    name: 'b'
  },
  {
    title: 'Ant Design Title 4',
    name: 'c'
  },
];

let b:addRoomMessage
class App extends Component {
  state = {
    size: 'large',
  };

  render() {
    const size = this.state.size as "large" | "small" | "default" | undefined;
    return (
      <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Layout>
            <Content>
              <List
                className="chatroom-content"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<><span className="chatroom-content-username">{item.name}</span><Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}><span>{moment().fromNow()}</span></Tooltip></>}
                      description={<><div>"Ant Design, a design language for background applications, is refined by Ant UED Team"</div></>}
                    />
                  </List.Item>
                )}
              />
            </Content>
            <Footer>
              <div className="chatroom-footer">
                <TextArea rows={2} />
                <Button type="primary" ghost  size={size} className="chatroom-footer-button">发送</Button>
              </div>
            </Footer>
          </Layout>
          <Sider>
            <Button type="primary"></Button>
            <Button type="primary"></Button>
            <Button type="primary"></Button>
          </Sider>
        </Layout>
      </Layout>
        
      </div>
    );
  }
}

export default App;
