import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Tooltip, Form, Input } from "antd";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyle = styled.div``;
const ContentSyle = styled.div`
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;
const FromStyle = styled(Form)`
  display: flex;
  justify-content: space-between;
  padding: 2px 2px 2px 0px;
  gap: 5px;
  border: 1px soild rgb(230, 230, 230);
  border-radius: 2px;
  .ant-form-item {
    flex: 1;
  }
`;
const MessageListStyle = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
function ChatWindow() {
  return (
    <div className=" bg-gray-500 h-screen w-full">
      <HeaderStyle className="flex h-[60px] justify-between px-[20px] md:py-0 items-center ">
        <div className="header_infor mt-10 md:mt-0">
          <p className="header_title">Room 1</p>
          <span className="header_descroption">Đây là Room 1</span>
        </div>
        <div className="flex items-center mt-10 md:mt-0">
          <button className="flex items-center gap-2">
            <UserAddOutlined className="text-white" />
            Mời
          </button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </HeaderStyle>
      <ContentSyle>
        <MessageListStyle>
          <Message
            text="Test"
            photoUrl={null}
            displayName="Tam"
            CreateAt="23/04/2023"
          />
          <Message
            text="Test"
            photoUrl={null}
            displayName="Tam"
            CreateAt="23/04/2023"
          />
          <Message
            text="Test"
            photoUrl={null}
            displayName="Tam"
            CreateAt="23/04/2023"
          />
        </MessageListStyle>
        <FromStyle>
          <Form.Item>
            <Input
              className="outline-none"
              placeholder="Enter your message"
              autoComplete="off"
            ></Input>
          </Form.Item>
          <Button>Send</Button>
        </FromStyle>
      </ContentSyle>
    </div>
  );
}

export default ChatWindow;
