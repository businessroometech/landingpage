import React from 'react';
import { 
  LineChart, 
  PieChart, 
  BarChart, 
  TrendingUp, 
  Users, 
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

function Card(style) {
  const cardStyle = {
    width: '360px', // Increased width to fit content
    padding: '28px',
    borderRadius: '20px',
    backgroundColor: '#1a1b23',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const amountStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#10b981',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const statsContainerStyle = {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
  };

  const statBoxStyle = {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  };

  const statValueStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 4px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  const statLabelStyle = {
    fontSize: '13px',
    color: '#9ca3af',
    margin: '0',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '4fr 4fr',
    gap: '6px', // Reduced gap to fit content
  };

  const chartBoxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '16px', // Reduced padding to fit content
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  };

  const chartHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px', // Reduced margin to fit content
  };

  const chartTitleStyle = {
    fontSize: '13px',
    color: '#ffffff',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const chartValueStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0',
  };

  const percentageStyle = (isPositive: boolean) => ({
    fontSize: '12px',
    color: isPositive ? '#10b981' : '#ef4444',
    backgroundColor: isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
    padding: '2px 4px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  });

  return (
    <div style={{...cardStyle,...style}}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>
          <Activity size={24} color="#10b981" />
          SaaS Metrics
        </h2>
        <p style={amountStyle}>
          $1.5M
          <DollarSign size={24} color="#10b981" />
        </p>
      </div>

      <div style={statsContainerStyle}>
        <div style={statBoxStyle}>
          <p style={statValueStyle}>2.4k</p>
          <p style={statLabelStyle}>Active Users</p>
        </div>
        <div style={statBoxStyle}>
          <p style={statValueStyle}>94%</p>
          <p style={statLabelStyle}>Retention</p>
        </div>
        <div style={statBoxStyle}>
          <p style={statValueStyle}>89k</p>
          <p style={statLabelStyle}>Sessions</p>
        </div>
      </div>
      
      <div style={gridStyle}>
        <div style={chartBoxStyle}>
          <div style={chartHeaderStyle}>
            <p style={chartTitleStyle}>
              <BarChart size={7} color="#60a5fa" />
              Revenue
            </p>
            <span style={percentageStyle(true)}>
              <ArrowUpRight size={7} />
              +24%
            </span>
          </div>
          <p style={chartValueStyle}>$648.5k</p>
        </div>
        
        <div style={chartBoxStyle}>
          <div style={chartHeaderStyle}>
            <p style={chartTitleStyle}>
              <Users size={7} color="#818cf8" />
              Customers
            </p>
            <span style={percentageStyle(true)}>
              <ArrowUpRight size={7} />
              +12%
            </span>
          </div>
          <p style={chartValueStyle}>1,257</p>
        </div>
        
        <div style={chartBoxStyle}>
          <div style={chartHeaderStyle}>
            <p style={chartTitleStyle}>
              <TrendingUp size={7} color="#34d399" />
              Growth
            </p>
            <span style={percentageStyle(true)}>
              <ArrowUpRight size={7} />
              +18%
            </span>
          </div>
          <p style={chartValueStyle}>+85%</p>
        </div>
        
        <div style={chartBoxStyle}>
          <div style={chartHeaderStyle}>
            <p style={chartTitleStyle}>
              <PieChart size={7} color="#f472b6" />
              Expenses
            </p>
            <span style={percentageStyle(false)}>
              <ArrowDownRight size={14} />
              -8%
            </span>
          </div>
          <p style={chartValueStyle}>$284.3k</p>
        </div>
      </div>
    </div>
  );
}

function CardComponent2() {
  return (
    <>
    <div style={{position : 'absolute',zIndex : 50,marginTop : '-108px'}}>
        <svg width="600" height="600" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="140" height="138" rx="10" ry="10" 
                    fill="none" stroke="black" stroke-width="1.1" stroke-dasharray="6 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
            </rect>
        </svg>
    </div>
    <div style={{
      backgroundColor: '',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{marginRight : '65px',marginTop : '-185px',zIndex : 100}}>
      <Card/>
      </div>
      <div style={{marginTop : '136px',zIndex : 100}}>
        <Card/>
      </div>
    </div>
    </>
  );
}

export default CardComponent2;