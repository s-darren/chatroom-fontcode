import React, { Component } from 'react';
import './App.css';
import { List, Avatar, Tooltip, Layout, Button, Input, Modal, InputNumber, message } from 'antd';
const address = '127.0.0.1:3000'
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
interface normalObj {
  [propName: string]: any;
}
interface webSocketInstance extends normalObj {
  websocketInstance: WebSocket
}
class App extends Component<normalObj, webSocketInstance> {
  [propName: string]: any;
  constructor(props: any) {
    super(props);
    this.state = {
      size: 'large',
      websocketInstance: new WebSocket(`ws://${address}`),
      visible: false,
      roomID: 1,
      sendMessage: ''
    };
  }
  // state: webSocketInstance = {
  //   size: 'large',
  //   websocketInstance: new WebSocket(`ws://${address}`)
  // };
  componentDidMount() {
    this.state.websocketInstance.onmessage = this.onWebSocketMessage
    this.state.websocketInstance.onopen = this.onWebSocketOpen
    this.setState({
      visible: true
    })
  }
  onWebSocketOpen = () => {
    console.log(this)
  }
  onWebSocketMessage = (msg: MessageEvent) => {
    console.log(msg.data)
    // this.state.websocketInstance.send('1199')
    
  }
  chooseCommon = (data:string) => {
    let splitString:string[] = data.split(':')
    if(this[splitString[0]]) {
      this[splitString[0]]()
    } else {
      throw new Error ('no methods')
    }
  }
  roomIDWarning = () => {
    message.warning('请输入聊天室ID');
  };
  handleCancel = () => {
    this.roomIDWarning()
  }
  handleOk = () => {
    this.state.websocketInstance.send(this.state.roomID)
    this.setState({
      visible: false
    })
  }
  onRoomIDChange = (val:number | undefined) => {
    this.setState({
      roomID: val
    })
  }
  onMessageChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    let message:string = e.target.value
    console.log(message, this.state.sendMessage)
    this.setState({
      sendMessage: message
    })
  }
  sendMessage = () => {
    this.state.websocketInstance.send(this.state.sendMessage)
    this.setState({
      sendMessage: ''
    })
  }
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
                  <TextArea rows={2} value={this.state.sendMessage} onChange={this.onMessageChange}/>
                  <Button type="primary" ghost  size={size} className="chatroom-footer-button" onClick={this.sendMessage}>发送</Button>
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
        <Modal
          title="请输入需要进入的聊天室ID"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        >
          <InputNumber min={1} max={9999} defaultValue={this.state.roomID} onChange={this.onRoomIDChange} />
        </Modal>
      </div>
    );
  }
}

export default App;
