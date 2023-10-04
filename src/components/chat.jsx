import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { socket } from '../utils/socket';
import ChatMessage from './ChatMessage';

function Chat({ handleWindow, windowed }) {
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState('Syötä nimimerkki');
  const [inputError, setInputError] = useState(false);
  const [currentRoom, setCurrentRoom] = useState('room1');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    socket.emit('chat messages', input);
    setInput('');
  };

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    const username = input;
    socket.auth = { username };
    socket.connect();
    setSocketConnected(true);
    setInputError(false);
    setInputPlaceholder('Syötä viesti');
    setInput('');
  };

  const joinRoom = (room) => {
    setChatMessages([]);
    socket.emit('join', room);
    setCurrentRoom(room);
  };

  useEffect(() => {
    if (socketConnected) {
      socket.emit('chat messages', '');
      socket.emit('join', currentRoom);
      socket.on('chat messages', (messages) => {
        setChatMessages(messages);
      });
    }
  }, [socketConnected, currentRoom]);

  useEffect(() => {
    socket.on('connect_error', (err) => {
      if (err.message === 'invalid username') {
        setSocketConnected(false);
        setInputError(true);
        setInputPlaceholder('Nimimerkki ei kelpaa');
        socket.disconnect();
      } else if (err.message === 'username taken') {
        setSocketConnected(false);
        setInputError(true);
        setInputPlaceholder('Nimimerkki on jo käytössä');
        socket.disconnect();
      } else {
        setSocketConnected(false);
        setInputPlaceholder('Syötä nimimerkki');
      }
    });

    return () => {
      socket.disconnect();
      socket.off('chat messages');
    };
  }, []);

  return (
    <div
      className={
        windowed
          ? 'bg-oc-pastel-blue w-full h-full flex flex-col justify-between'
          : 'bg-oc-pastel-blue w-full h-full rounded-md flex flex-col justify-between'
      }
    >
      <div
        id="buttons"
        className={
          windowed
            ? 'flex flex-row-reverse justify-around xs:justify-center xs:gap-10 pt-2 flex-grow-0 flex-shrink basis-auto'
            : 'flex flex-row-reverse justify-around xs:justify-center xs:gap-10 pt-2 lg:flex-row lg:flex-wrap lg:gap-y-4 flex-grow-0 flex-shrink basis-auto'
        }
      >
        <div className={windowed ? 'w-fit h-fit' : 'w-fit h-fit lg:w-full lg:flex lg:justify-end lg:pr-2'}>
          <button
            className={
              windowed
                ? 'w-8 h-8 bg-oc-space-blue rounded-md bg-[url(./dock.svg)] bg-cover'
                : 'w-8 h-8 bg-oc-space-blue rounded-md bg-[url(./pip.svg)] bg-cover'
            }
            onClick={handleWindow}
          ></button>
        </div>
        <button
          className={
            currentRoom === 'room1'
              ? 'h-fit w-fit p-1 rounded-md  bg-black text-white text-sm'
              : 'h-fit w-fit p-1 rounded-md bg-oc-space-blue text-white text-sm'
          }
          onClick={() => {
            joinRoom('room1');
          }}
        >
          Huone 1
        </button>
        <button
          className={
            currentRoom === 'room2'
              ? 'h-fit w-fit p-1 rounded-md  bg-black text-white text-sm'
              : 'h-fit w-fit p-1 rounded-md bg-oc-space-blue text-white text-sm'
          }
          onClick={() => {
            joinRoom('room2');
          }}
        >
          Huone 2
        </button>
        <button
          className={
            currentRoom === 'room3'
              ? 'h-fit w-fit p-1 rounded-md  bg-black text-white text-sm'
              : 'h-fit w-fit p-1 rounded-md bg-oc-space-blue text-white text-sm'
          }
          onClick={() => {
            joinRoom('room3');
          }}
        >
          Huone 3
        </button>
      </div>
      <div id="chat-messages" className="flex flex-col-reverse flex-grow flex-shrink basis-auto overflow-auto mt-2 relative">
        {chatMessages.map((message, index) => {
          return <ChatMessage message={message} key={index}></ChatMessage>;
        })}
      </div>
      <form
        id="message-input"
        onSubmit={socketConnected ? handleMessageSubmit : handleUsernameSubmit}
        className="w-full flex items-center z-30 bottom-4 flex-grow-0 flex-shrink basis-auto"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className={
            inputError
              ? 'bg-gray-800 w-full h-10 rounded-md pl-2 m-2 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500'
              : 'bg-gray-800 w-full h-10 rounded-md pl-2 m-2 pr-10 text-white'
          }
          placeholder={inputPlaceholder}
        ></input>
        <button type="submit" className="w-9 h-9 bg-[url(../sendIcon.svg)] bg-cover absolute right-5"></button>
      </form>
    </div>
  );
}

Chat.propTypes = {
  handleWindow: PropTypes.func.isRequired,
  windowed: PropTypes.bool.isRequired,
};

export default Chat;
