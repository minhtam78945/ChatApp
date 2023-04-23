import { PlusSquareFilled } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";
const { Panel } = Collapse;
function RomList() {
  const LinkStyle = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    margin-left: 20px;
  `;
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <Panel header="Danh sách các phòng " key="1">
        <LinkStyle>Room 1</LinkStyle>
        <LinkStyle>Room 2</LinkStyle>
        <LinkStyle>Room 3</LinkStyle>
        <button className="text-white my-2 flex items-center gap-1 md:px-4 md:py-2 bg-slate-600">
          Create new Room
        </button>
      </Panel>
    </Collapse>
  );
}

export default RomList;
