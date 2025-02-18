import {  
  PieChart, 
  BarChart, 
  TrendingUp, 
  Users, 
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Building
} from 'lucide-react';
import { CSSProperties } from 'react';
import Avatar1 from '../../assets/fn-1.jpg'
import { Building2 } from 'lucide-react';
import Avatar2 from '../../assets/fn-2.jpg'
import { Banknote } from 'lucide-react';


function Card(style: CSSProperties) {
  const cardStyle = {
    width: "280px",
    padding: "20px",
    borderRadius: "16px 0px 16px 16px", // Changed to make the right top corner square
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.15)",
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
    <div style={{ ...cardStyle, ...style, position: 'relative' }}>
      <p style={{ ...textStyle, marginTop: '28px', fontSize: '18px', position: 'absolute', left: '60px', color:"#0C59BD", fontWeight: 'bold' }}>Steve Smith</p>
      <img src={Avatar1} alt="Founder Avatar" style={{ width: "80px", height: "80px", borderRadius: "50%", position: 'absolute', right: '21px' }} />
      <p style={{ ...textStyle, marginTop: '50px', fontSize: '18px',marginRight:'94px',color:"#252525"  }}>Founder</p>
      <p style={{ ...textStyle,marginBottom:'20px', fontSize: '18px',marginLeft:'155px',color:"#252525"  }}><Building/> 9Startup.com</p>
      <p style={{ ...textStyle, marginTop: '20px', fontSize: '20px',color:"#252525",fontWeight: 'bold' }}>Hi, I am looking for funding for my startup.</p>
    </div>
  );
}

function Card2(style: CSSProperties) {
  const cardStyle = {
    width: "280px",
    padding: "20px",
    borderRadius: "16px 0px 16px 16px", 
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.15)",
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
    <div style={{ ...cardStyle, ...style, position: 'relative' }}>
      <p style={{ ...textStyle, marginTop: '28px', fontSize: '18px', position: 'absolute', left: '60px',color:"#0C59BD" , fontWeight: 'bold' }}>Daniel Okaya</p>
      <img src={Avatar2} alt="Investor Avatar" style={{ width: "80px", height: "80px", borderRadius: "50%", position: 'absolute', right: '21px' }} />
      <p style={{ ...textStyle, marginTop: '50px', fontSize: '18px', marginRight: '94px',color:"#252525" }}>Investor</p>
      <p style={{ ...textStyle, marginBottom: '10px', fontSize: '18px', marginLeft: '160px',color:"#252525" }}><Banknote/>Investment group</p>
      <p style={{ ...textStyle, marginTop: '20px', fontSize: '20px',color:"#252525",fontWeight: 'bold' }}>Hi, Let's discuss more.</p>
    </div>
    // <div style={{ ...cardStyle, ...style , position: 'relative'}}>
    //   <p style={{ ...textStyle, marginTop: '28px', fontSize: '16px', position: 'absolute', left: '60px' }}>Daniel Okaya</p>
    //   <img src={Avatar2} alt="Investor Avatar" style={{ width: "80px", height: "80px", borderRadius: "50%", position: 'absolute', right: '21px' }} />
    //   <p style={{ ...textStyle, marginTop: '200px', fontSize: '16px' }}>Hi, Let's Discuss More</p>
    // </div>
  );
}



function CardComponent() {
  return (
    <>
    <div style={{position : 'absolute',zIndex : 50,marginTop : '-88px',marginLeft : '85px'}}>
      <svg width="500" height="530" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="160" height="146" rx="10" ry="10" 
            fill="none" stroke="black" stroke-width="0.3" stroke-dasharray="6 3">
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