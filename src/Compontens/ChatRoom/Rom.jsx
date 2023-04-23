import ChatWindow from "./ChatWindow";
import SiderBar from "./Siderbar";
function Room() {
  return (
    <div className=" md:flex ">
      <div className="md:w-[20%] w-[10%] max-sm:w-[50%]  ">
        {" "}
        <SiderBar />
      </div>
      <div className="md:w-[80%] ">
        {" "}
        <ChatWindow />
      </div>
    </div>
  );
}

export default Room;
