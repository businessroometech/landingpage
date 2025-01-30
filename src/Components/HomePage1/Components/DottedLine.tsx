const DottedLineAnimation = () => {
  return (
    <div style={{position : 'absolute',width : '100vw',height : '100vh',zIndex : 100,}}>
        <svg width="100%" height="100%" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M288 50 H330 Q350 50 350 60 V 200 H 496 V160" stroke="#d1d5db" stroke-width="1.6" stroke-dasharray="4 4" fill="none"/>
   
    
  

   

    <path d="M716 50 H655 Q655 50 655 60 V200 H 496 V160" stroke="#d1d5db" stroke-width="1.6" stroke-dasharray="4 4" fill="none"/>
    

    <path  d="M716 50 H655 Q655 50 655 60 V200 H 496 V160" stroke="#4254f7" stroke-width="1.6" stroke-dasharray="50 1000" stroke-dashoffset="250" fill="none">
    <animate attributeName="stroke-dashoffset" from="250" to="-800" dur="8s" repeatCount="indefinite"/>
  </path>
  <path d="M288 50 H330 Q350 50 350 60 V 200 H 496 V160" stroke="#4254f7" stroke-width="1.6" stroke-dasharray="50 1000" stroke-dashoffset="250" fill="none">
    <animate attributeName="stroke-dashoffset" from="250" to="-800" dur="8s" repeatCount="indefinite"/>
  </path>
  <circle cx="287" cy="50" r="5" fill="white" stroke="#d1d5db" stroke-width="2"/>  
  <circle cx="717" cy="50" r="5" fill="white" stroke="#d1d5db" stroke-width="2"/>
    <circle cx="496" cy="160" r="5" fill="white" stroke="#d1d5db" stroke-width="2"/>
  </svg>

  {/* <h1 style={{
        transform: 'translateX(-50%) scale(0.7)',
        fontSize: 50,
        position: 'absolute', // Use absolute positioning
        top: '81%', // Adjust top position as needed
        left: '50%', // Center horizontally
        fontWeight: 'bolder',
        textAlign: 'center',
        color: '#21293b',
        backgroundColor: '#eaf0ff',
        padding : '5px 10px',
        borderRadius : '5px',
        zIndex: 5000000, // Ensure it's above the SVG
      }}>
        Businessroom
      </h1> */}
    </div>
  );
};

export default DottedLineAnimation;
