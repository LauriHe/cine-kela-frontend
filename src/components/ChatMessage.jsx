import PropTypes from "prop-types";

const ChatMessage = ({ message }) => {

  return (
    <div className="flex items-flex-start gap-2 mx-2 p-2 w-fit max-w-full bg-oc-space-blue rounded-md">
      <div className="flex items-baseline gap-1 h-fit">
        <div className="text-[0.8rem] text-white">{message.timestamp}</div>
        <div className="text-white">{message.username + ":"}</div>
      </div>
      {message.emoji ? (
        <img className="w-10 h-10 bg-cover" src={`./${message.msg}.png`}></img>
      ) : (
        <div className="text-white break-all">{message.msg.length > 300 ? message.msg.slice(0,300) : message.msg}</div>
      )}
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object,
};

export default ChatMessage;
