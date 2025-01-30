const FeatureCard = ({ text } : {text : string}) => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '16px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.2s ease',
    cursor: 'pointer'
  }}
  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
  onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
  >
    <p style={{
      color: '#1f2937',
      fontSize: '18px',
      fontWeight: '500',
      textAlign : 'center',
      margin: 0
    }}>
      {text}
    </p>
  </div>
);

const Features = () => {
  const features = [
    "Expert tooling",
    "World-class support",
    "Escrow and financing"
  ];

  return (
    <div style={{
      backgroundColor: '#eaf0ff',
      height : '438px',
      padding: '32px',
      display: 'flex',
      borderRadius : '2%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        {/* Logo */}
        <div style={{
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent : 'center',
              fontSize: '32px',
              fontWeight: 'bold'
            }}>
              <span style={{ color: '#4361ee' }}>A</span>
              <span style={{ color: '#1f2937' }}>cquireroom</span>
              {/* <span style={{ color: '#6b7280', fontSize: '18px',marginTop : '11px' }}>.com</span> */}
            </span>
          </div>
        </div>

        {/* Feature Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}>
          {features.map((feature, index) => (
            <FeatureCard key={index} text={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;