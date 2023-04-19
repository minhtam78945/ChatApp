import ChatWindow from "./ChatWindow";
import SiderBar from "./Siderbar";
import { Row, Col } from "antd";
function Room() {
  return (
    <>
      <Row>
        <Col span={8}>
          <SiderBar />
        </Col>
        <Col span={10}>
          <ChatWindow />
        </Col>
      </Row>
    </>
  );
}

export default Room;
