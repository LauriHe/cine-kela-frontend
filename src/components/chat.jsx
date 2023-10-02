import PropTypes from 'prop-types';

function Chat({ handleWindow }) {
  return (
    <div className="bg-gray-700 w-full h-full">
      <button className="w-fit h-fit text-white bg-gray-800 p-1 rounded-md m-2" onClick={handleWindow}>
        Toggle window
      </button>
    </div>
  );
}

Chat.propTypes = {
  handleWindow: PropTypes.func.isRequired,
};

export default Chat;
