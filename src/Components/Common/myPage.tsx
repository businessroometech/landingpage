import React from 'react';
import { LineChart, Line, YAxis, XAxis } from 'recharts';

const StartupLanding = () => {
  const chartData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 65 },
    { month: 'Apr', value: 58 },
    { month: 'May', value: 75 },
    { month: 'Jun', value: 85 },
    { month: 'Jul', value: 95 }
  ];

  const Feature = ({ text }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      gap: '12px'
    }}>
      <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: '#4f46e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '16px'
      }}>
        +
      </div>
      <span style={{
        color: '#1e293b',
        fontSize: '16px'
      }}>
        {text}
      </span>
    </div>
  );

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '48px',
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '48px'
    }}>
      {/* Left Content */}
      <div style={{
        flex: '1'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '24px',
          lineHeight: '1.2'
        }}>
          {/* Discover your dream startup */}Businessroom Live
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#475569',
          marginBottom: '32px',
          lineHeight: '1.6'
        }}>
          Pitch your idea to a global community and build meaningful connections.

        </p>

        <div style={{ marginBottom: '32px' }}>
          <Feature text="Evaluate web, customer, and financial metrics" />
          <Feature text="Build and send LOIs and APAs in minutes" />
          <Feature text="Get help to acquire with acquisition financing" />
        </div>

        <button style={{
          backgroundColor: '#1e293b',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          Tell me more
          <span style={{ fontSize: '20px' }}>→</span>
        </button>
      </div>

      {/* Right Content - Graph Card */}
      <div style={{
        flex: '1',
        backgroundColor: '#f8fafc',
        borderRadius: '24px',
        padding: '32px',
        maxWidth: '500px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '24px'
          }}>
            Annual Recurring Revenue
          </h3>

          <div style={{ height: '200px' }}>
            <LineChart width={400} height={200} data={chartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4f46e5" 
                strokeWidth={2} 
                dot={{ fill: '#4f46e5', r: 4 }}
              />
              <XAxis dataKey="month" hide={true} />
              <YAxis hide={true} />
            </LineChart>
          </div>

          <div style={{
            marginTop: '24px',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '16px',
            color: '#94a3b8',
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>Payment processing integration</div>
            <img 
              src="/api/placeholder/60/24" 
              alt="Stripe"
              style={{
                opacity: 0.5
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupLanding;