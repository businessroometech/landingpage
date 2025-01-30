import React from 'react';

const DealCard = ({ startupType }) => (
  <div style={{
    backgroundColor: '#ccd6f0',
    borderRadius: '8px',
    padding: ' 8px 10px',
    marginBottom: '12px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <div style={{ flex: 1 }}>
      <div style={{
        fontSize: '14px',
        color: '#64748b',
        marginBottom: '8px'
      }}>
        Startup type: {startupType}
      </div>
      {/* Placeholder lines */}
      <div style={{
        height: '8px',
        backgroundColor: '#bac2df',
        width: '60%',
        borderRadius: '4px',
        marginBottom: '8px'
      }} />
    </div>
    {/* Right side placeholders */}
    <div style={{
      display: 'flex',
      gap: '12px'
    }}>
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          style={{
            height: '24px',
            width: '48px',
            backgroundColor: '#bac2df',
            borderRadius: '4px'
          }}
        />
      ))}
    </div>
  </div>
);

const MyDeals = () => {
  const deals = [
    { type: 'Shopify App' },
    { type: 'SaaS' },
    { type: 'Mobile' }
  ];

  return (
    <div style={{
      borderRadius : '8px',
      backgroundColor : '#eaf0ff',
      padding: '26px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{
        
        fontSize: '31px',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '26px'
      }}>
        My deals
      </h2>
      
      <div style={{
        marginBottom: '24px'
      }}>
        {deals.map((deal, index) => (
          <DealCard key={index} startupType={deal.type} />
        ))}
      </div>

      <button style={{
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
      >
        Send offer
      </button>
    </div>
  );
};

export default MyDeals;