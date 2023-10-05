import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { socket } from '../utils/socket';
import ChatMessage from './ChatMessage';
import { confetti } from 'tsparticles-confetti';

function Chat({ handleWindow, windowed }) {
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState('Input a username');
  const [inputError, setInputError] = useState(false);
  const [currentRoom, setCurrentRoom] = useState('room1');
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [emojiOpenFinished, setEmojiOpenFinished] = useState(false);

  const renderConfetti = async () => {
    const duration = 0.5 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.5), y: Math.random() - 0.5 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.5, 0.9), y: Math.random() - 0.5 },
        })
      );
    }, 50);
  };

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
    setInputPlaceholder('Write a message');
    setInput('');
  };

  const joinRoom = (room) => {
    setChatMessages([]);
    socket.emit('join', room);
    setCurrentRoom(room);
  };

  const toggleEmoji = () => {
    setEmojiOpen(!emojiOpen);
    if (!emojiOpen) {
      setTimeout(() => {
        setEmojiOpenFinished(true);
      }, 300);
    } else {
      setEmojiOpenFinished(false);
    }
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
        setInputPlaceholder('Invalid username');
        socket.disconnect();
      } else if (err.message === 'username taken') {
        setSocketConnected(false);
        setInputError(true);
        setInputPlaceholder('Username taken');
        socket.disconnect();
      } else {
        setSocketConnected(false);
        setInputPlaceholder('Input a username');
      }
    });

    return () => {
      socket.disconnect();
      socket.off('chat messages');
    };
  }, []);

  return (
    <div className={windowed ? 'chat-container' : 'chat-container rounded-md'}>
      <div id="buttons" className={windowed ? 'chat-buttons-container lg:justify-center lg:gap-10' : 'chat-buttons-container'}>
        <button
          className={currentRoom === 'room1' ? 'btn bg-black' : 'btn'}
          onClick={() => {
            joinRoom('room1');
          }}
        >
          Room 1
        </button>
        <button
          className={currentRoom === 'room2' ? 'btn bg-black' : 'btn'}
          onClick={() => {
            joinRoom('room2');
          }}
        >
          Room 2
        </button>
        <button
          className={currentRoom === 'room3' ? 'btn bg-black' : 'btn'}
          onClick={() => {
            joinRoom('room3');
          }}
        >
          Room 3
        </button>
        <button className={windowed ? 'icon-btn bg-[url(./dock.svg)]' : 'icon-btn bg-[url(./pip.svg)]'} onClick={handleWindow}></button>
      </div>
      <div className="chat-messages">
        {chatMessages.map((message, index) => {
          return <ChatMessage message={message} key={index}></ChatMessage>;
        })}
      </div>
      <div className={emojiOpen ? 'w-full p-2 relative' : 'w-full p-0 relative'}>
        <div className={emojiOpen ? 'emoji-container' : 'h-0'} style={{ transition: 'height 0.3s ease-in-out' }}>
          <button
            className={emojiOpen ? 'icon-btn emoji-toggle-btn' : 'icon-btn emoji-toggle-btn -top-8'}
            style={emojiOpen ? { borderRadius: '0.375rem 0.375rem 0 0' } : { borderRadius: '0.375rem' }}
            onClick={toggleEmoji}
          ></button>
          <div className={emojiOpenFinished ? 'flex gap-2 flex-wrap justify-around items-center' : 'hidden'}>
            <button className="icon-btn emoji-btn bg-[url(./capLamme.png)]" onClick={renderConfetti}></button>
            <button className="icon-btn emoji-btn bg-[url(./capTea.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./fishBrain.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./moti.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./poop.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./tataru.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./catge.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./dogege.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./pepeNo.png)]"></button>
            <button className="icon-btn emoji-btn bg-[url(./pepeYes.png)]"></button>
          </div>
        </div>
      </div>
      <form id="message-input" onSubmit={socketConnected ? handleMessageSubmit : handleUsernameSubmit} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className={inputError ? 'chat-input-error' : 'chat-input'}
          placeholder={inputPlaceholder}
        ></input>
        <button type="submit" className="w-9 h-9 bg-[url(../sendIcon.svg)] bg-cover absolute right-3"></button>
      </form>
    </div>
  );
}

Chat.propTypes = {
  handleWindow: PropTypes.func.isRequired,
  windowed: PropTypes.bool.isRequired,
};

export default Chat;
