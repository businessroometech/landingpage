// import React from 'react';
import Lady from '../../../assets/Lady.jpg';
import Man from '../../../assets/Men.jpg';

const Avatar = ({ photo = "",size = 32 }) => (
  <div style={{
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: '#ddd',
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    flexShrink: 0
  }} />
);

const ChatInterface = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <Avatar size={40} photo={Lady}/>
        <div>
          <div style={{
            fontSize: '16px',
            fontWeight: '500',
            marginBottom: '4px'
          }}>
            Kailey Watkins
          </div>
          <div style={{
            fontSize: '14px',
            opacity: 0.8
          }}>
            Online
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div style={{
        backgroundColor: '#f8fafc',
        padding: '20px',
        height: '278px',
        overflowY: 'auto'
      }}>
        {/* Manager Message */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px'
        }}>
          <Avatar photo={Lady}/>
          <div style={{
            backgroundColor: 'white',
            padding: '12px 16px',
            borderRadius: '12px',
            maxWidth: '80%',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}>
            Your startup listing is almost ready to go live! Last step is asking price
          </div>
        </div>

        {/* User Message Placeholders */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          
          marginBottom: '12px'
        }}>
          <div style={{
            backgroundColor: '#f1f5f9',
            padding: '12px 16px',
            width : '90px',
            borderRadius: '12px',
            maxWidth: '60%',
            marginLeft: '40px'
          }}>
            <div style={{
              height: '8px',
              backgroundColor: '#e2e8f0',
              width: '100%',
              borderRadius: '4px'
            }} />
          </div>
        </div>

        {/* Last Message with Avatar */}
        <div style={{
          display: 'flex',
          justifyContent  : 'flex-end',
          alignItems: 'flex-end',
          gap: '8px'
        }}>
           
         
          <div style={{
            backgroundColor: '#f1f5f9',
            padding: '12px 16px',
            width : '200px',
            borderRadius: '12px',
            maxWidth: '40%'
          }}>
            <div style={{
              height: '8px',
              backgroundColor: '#e2e8f0',
              width: '100%',
              borderRadius: '4px'
            }} />
           
          </div>
          <Avatar photo={Man}/>
        </div>
      </div>

      {/* Chat Input Box */}
      <div style={{
        padding: '16px',
        backgroundColor: 'white',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
        <Avatar photo={Lady}/>
        <input 
          type="text"
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            fontSize: '14px',
            outline: 'none',
            backgroundColor: '#f8fafc'
          }}
        />
      </div>
    </div>
  );
};

export default ChatInterface;