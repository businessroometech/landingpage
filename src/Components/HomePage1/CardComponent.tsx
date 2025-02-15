import {  
  PieChart, 
  BarChart, 
  TrendingUp, 
  Users, 
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { CSSProperties } from 'react';
import Avatar1 from '../../assets/fn-1.jpg'
import Avatar2 from '../../assets/fn-2.jpg'


function Card(style: CSSProperties) {
  const cardStyle = {
    width: "280px",
    padding: "20px",
    borderRadius: "16px",
    backgroundColor: "#1a1b23",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#9ca3af",
    marginTop: "10px",
  };

  return (
    <div style={{ ...cardStyle, ...style }}>
      <p style={titleStyle}>Founder</p>
      <img src={Avatar1} alt="Founder Avatar" style={{ width: "128px", height: "128px", borderRadius: "50%", marginTop: "10px" }} />
      <p style={textStyle}>Hi, I am looking for funding for my startup.</p>
    </div>
  );
}

function Card2(style: CSSProperties) {
  const cardStyle = {
    width: "280px",
    padding: "20px",
    borderRadius: "16px",
    backgroundColor: "#1a1b23",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#9ca3af",
    marginTop: "10px",
  };

  return (
    <div style={{ ...cardStyle, ...style }}>
      <p style={titleStyle}>Investor</p>
      <img
        src={Avatar2}
        alt="Investor Avatar"
        style={{ width: "128px", height: "128px", borderRadius: "50%", marginTop: "10px" }}
      />
      <p style={textStyle}>Hi, Let's Discuss More</p>
    </div>
  );
}



function CardComponent() {
  return (
    <>
    <div style={{position : 'absolute',zIndex : 50,marginTop : '-108px',marginLeft : '85px'}}>
      <svg width="500" height="530" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="160" height="138" rx="10" ry="10" 
            fill="none" stroke="black" stroke-width="0.8" stroke-dasharray="6 3">
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
        <Card2/>
      </div>
    </div>
    </>
  );
}

export default CardComponent;