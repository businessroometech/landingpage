import { useEffect, useState } from 'react';
import Avatar1 from '../../assets/fn-1.jpg';
import Avatar2 from '../../assets/fn-2.jpg';

const messagesData = [
  { text: "Hi, I want to sell my startup.", avatar: Avatar1, sender: "manager" },
  { text: "Interesting! I’m looking to buy a promising startup.", avatar: Avatar2, sender: "user" },
  { text: "It's a platform that helps businesses automate customer support and respond faster.", avatar: Avatar1, sender: "manager" },
  { text: "That sounds promising. What’s your expected valuation?", avatar: Avatar2, sender: "user" },
//   { text: "I’m aiming for $500k based on current revenue and projections.", avatar: Avatar1, sender: "manager" },
//   { text: "Let’s schedule a call to discuss further.", avatar: Avatar2, sender: "user" }
];

function ChatBubble({ text, avatar, sender, isHighlighted }) {
  const bubbleStyle = {
    maxWidth: '250px',
    padding: '12px 16px',
    borderRadius: sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
    backgroundColor: sender === 'user' ? '#3DAEF4' : '#f1f1f1',
    color: sender === 'user' ? '#fff' : '#000',
    margin: '8px 0',
    boxShadow: isHighlighted ? '0 4px 10px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
    transform: isHighlighted ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.5s ease-in-out',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: '12px' }}>
      {sender !== 'user' && <img src={avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />}
      <div style={bubbleStyle}>{text}</div>
      {sender === 'user' && <img src={avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }} />}
    </div>
  );
}

function ChatComponent() {
  const [highlightedMessage, setHighlightedMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedMessage((prev) => (prev + 1) % messagesData.length);
    }, 2000); // Highlight changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '350px', borderRadius: '16px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden', fontFamily: 'Roboto, sans-serif', borderTopLeftRadius: '0' }}>
      {/* Header Section */}
      <div style={{ backgroundColor: '#3DAEF4', color: '#fff', padding: '16px', display: 'flex', alignItems: 'center' }}>
        <img src={Avatar1} alt="Founder" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
        <div>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Startup Founder</p>
          <p style={{ margin: '0', fontSize: '12px', opacity: 0.8 }}>Online</p>
        </div>
      </div>

      {/* Chat Messages Section */}
      <div style={{ padding: '16px', backgroundColor: '#f7f7f7', minHeight: '300px' }}>
        {messagesData.map((msg, index) => (
          <ChatBubble key={index} avatar={msg.avatar} text={msg.text} sender={msg.sender} isHighlighted={index === highlightedMessage} />
        ))}
      </div>
    </div>
  );
}

export default ChatComponent;
