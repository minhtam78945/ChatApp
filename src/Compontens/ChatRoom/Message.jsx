import { Avatar, Typography } from "antd";

function Message({ text, displayName, photoUrl, CreateAt }) {
  return (
    <div className="my-[10px]">
      <div>
        <Avatar size="small" src={photoUrl}>
          A
        </Avatar>
        <Typography.Text className="mx-[5px] ">{displayName}</Typography.Text>
        <Typography.Text className="mx-[10px] text-sm ">
          {CreateAt}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="ml-[5px]">{text}</Typography.Text>
      </div>
    </div>
  );
}

export default Message;
