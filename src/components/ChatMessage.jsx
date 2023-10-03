import PropTypes from 'prop-types';

const ChatMessage = ({ message }) => {
  return (
    <div className="flex gap-2 pl-2">
      <div className="text-non-photo-blue">{message.username}</div>
      <div className="text-white">{message.msg}</div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object,
};

export default ChatMessage;
