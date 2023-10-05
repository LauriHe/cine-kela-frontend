import PropTypes from 'prop-types';

const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-center gap-2 pl-2">
      <div className="text-black">{message.username + ':'}</div>
      {message.emoji ? <img className="w-10 h-10 bg-cover" src={`./${message.msg}.png`}></img> : <div className="text-white">{message.msg}</div>}
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object,
};

export default ChatMessage;
