import React, { useEffect, useState } from 'react';
import { User, Settings, Shield, Briefcase, LogOut, ChevronRight, Home, Bell, Search, Lock} from 'lucide-react';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate authentication
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Senior Developer',
        workspaces: 3,
        projects: 110
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    // localStorage.clear(); navigate('/auth');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'workspace', label: 'Workspace', icon: Briefcase },
    { id: 'passwords', label: 'Password Vault', icon: Lock },
    { id: 'account',   label: 'Account',   icon: User },
    { id: 'settings',  label: 'Settings',  icon: Settings },
    { id: 'security',  label: 'Security',  icon: Shield }
  ];

  if (isLoading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #333',
            borderTop: '3px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'workspace':
        return (
      <div>
        <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '300' }}>Workspace Management</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[
            { id: 'School Emails', notifications: 124 },
            { id: 'Personal Texts', notifications: 444 },
            { id: 'Internship Slack', notifications: 12 }
          ].map(({ id, notifications }) => (
            <div
              key={id}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '25px',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                const card = e.currentTarget;
                card.style.background = 'rgba(255,255,255,0.08)';
                card.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                const card = e.currentTarget;
                card.style.background = 'rgba(255,255,255,0.05)';
                card.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-10px',
                  width: '100px',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)',
                  transform: 'skew(20deg)'
                }}
              />
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}> {id}</h3>
              <p style={{ color: '#ccc', marginBottom: '15px' }}>{notifications} notifications</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#888', fontSize: '14px' }}>Last updated 2h ago</span>
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    case 'passwords':
      return (
        <div>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '300' }}>Password Vault</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px' }}>
            {[ // Replace with real data eventually
              { site: 'Gmail', email: 'john@gmail.com' },
              { site: 'GitHub', email: 'john@github.com' },
              { site: 'Bank', email: 'john@bank.com' }
            ].map((entry, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '25px',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
                onMouseEnter={e => {
                  const card = e.currentTarget;
                  card.style.background = 'rgba(255,255,255,0.08)';
                  card.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget;
                  card.style.background = 'rgba(255,255,255,0.05)';
                  card.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{entry.site}</h3>
                <p style={{ color: '#ccc', marginBottom: '10px' }}>{entry.email}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#888', fontSize: '14px' }}>••••••••••</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'account':
      return (
        <div>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '300' }}>Account Management</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {/* Profile Info */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '20px' }}>Profile Information</h3>
              <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Name</label>
              <input type="text" value={user.name} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: 'white' }} />
              <label style={{ display: 'block', margin: '20px 0 5px', color: '#ccc' }}>Email</label>
              <input type="email" value={user.email} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', color: 'white' }} />
            </div>
            {/* Stats */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '20px' }}>Account Statistics</h3>
              <div style={{ marginBottom: '15px' }}><span style={{ color: '#ccc' }}>Member since:</span><span style={{ float: 'right' }}>January 2024</span></div>
              <div style={{ marginBottom: '15px' }}><span style={{ color: '#ccc' }}>Total Notifications:</span><span style={{ float: 'right' }}>{user.projects}</span></div>
              <div><span style={{ color: '#ccc' }}>Active workspaces:</span><span style={{ float: 'right' }}>{user.workspaces}</span></div>
            </div>
          </div>
        </div>
      );

      case 'settings':
        return (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '300' }}>Settings</h2>
            {['Notifications','Theme Preferences','Language','Privacy'].map((s,i)=>(
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', marginBottom: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}
                onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                <span>{s}</span>
                <ChevronRight size={20} />
              </div>
            ))}
          </div>
        );

      case 'security':
        return (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: '300' }}>Security</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '20px' }}>Password Security</h3>
                <button style={{ width:'100%', padding:'12px 24px', marginBottom:'15px', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:'4px', color:'white', cursor:'pointer' }}>Change Password</button>
                <button style={{ width:'100%', padding:'12px 24px', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:'4px', color:'white', cursor:'pointer' }}>Enable 2FA</button>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '20px' }}>Recent Activity</h3>
                <div style={{ color:'#ccc', fontSize:'14px' }}>
                  <div style={{ marginBottom:'10px' }}>Login from New York - 2 hours ago</div>
                  <div style={{ marginBottom:'10px' }}>Password changed - 1 week ago</div>
                  <div>Email verified - 2 weeks ago</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '36px', marginBottom: '10px', fontWeight: '300' }}>Welcome back, {user.name}</h1>
              <p style={{ color: '#ccc', fontSize: '18px' }}>{user.role} • {user.email}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px', marginBottom: '40px' }}>
              {[
                { title:'Business Emails', value:user.projects, change:'+12%' },
                { title:'Workspaces',      value:user.workspaces},
                { title:'Personal Emails',    value:'24',         },
                { title:'Silent Notifications', value:'156',          }
              ].map((stat,i)=>(
                <div key={i} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', padding:'30px', borderRadius:'8px', position:'relative', overflow:'hidden', cursor:'pointer', transition:'all 0.3s ease' }}
                  onMouseEnter={e=>{const card=e.currentTarget; card.style.background='rgba(255,255,255,0.08)'; card.style.transform='translateY(-5px)'}}
                  onMouseLeave={e=>{const card=e.currentTarget; card.style.background='rgba(255,255,255,0.05)'; card.style.transform='translateY(0)'}}>
                  <h3 style={{ fontSize:'32px', marginBottom:'5px', fontWeight:'300' }}>{stat.value}</h3>
                  <p style={{ color:'#ccc', marginBottom:'10px' }}>{stat.title}</p>
                  <span style={{ color:'#4ade80', fontSize:'14px' }}>{stat.change}</span>
                </div>
              ))}
            </div>

            {/* Recent Activity Panel */}
            <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', padding:'30px', borderRadius:'8px', position:'relative', overflow:'hidden' }}>
              <h3 style={{ fontSize:'24px', marginBottom:'20px', fontWeight:'300' }}>Recent Activity</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:'15px' }}>
                {['Updated Project Alpha documentation','Added 3 new team members to Workspace Beta','Completed security audit for Client X','Deployed new features to production'].map((act,i)=>(
                  <div key={i} style={{ padding:'15px', background:'rgba(255,255,255,0.03)', borderRadius:'6px', borderLeft:'3px solid rgba(255,255,255,0.1)', position:'relative' }}>
                    <span style={{ color:'#ccc' }}>{act}</span>
                    <div style={{ fontSize:'12px', color:'#888', marginTop:'5px' }}>{Math.floor(Math.random()*5)+1} hours ago</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,#000000 0%,#1a1a1a 50%,#000000 100%)', color:'white', fontFamily:'"Inter",-apple-system,BlinkMacSystemFont,sans-serif', position:'relative', overflow:'hidden' }}>
      <style>{`
        @keyframes spin { 0%{transform:rotate(0deg);}100%{transform:rotate(360deg);} }
        * { box-sizing: border-box; }
        input:focus { outline: none; border-color: rgba(255,255,255,0.4) !important; }
        button:hover { background: rgba(255,255,255,0.15) !important; transform: translateY(-1px); }
      `}</style>

      {/* Decorative Diagonals */}
      <div style={{ position:'absolute', top:'-200px', left:'-100px', width:'400px', height:'600px', background:'linear-gradient(45deg,transparent,rgba(255,255,255,0.02),transparent)', transform:'rotate(15deg)', zIndex:0 }} />
      <div style={{ position:'absolute', bottom:'-200px', right:'-100px', width:'500px', height:'700px', background:'linear-gradient(-45deg,transparent,rgba(255,255,255,0.015),transparent)', transform:'rotate(-10deg)', zIndex:0 }} />

      {/* Layout */}
      <div style={{ display:'flex', minHeight:'100vh', position:'relative', zIndex:1, paddingTop:'100px' }}>
        {/* Sidebar */}
        <aside style={{ width:'280px', background:'rgba(0,0,0,0.4)', backdropFilter:'blur(10px)', borderRight:'1px solid rgba(255,255,255,0.1)', padding:'30px 0', position:'relative' }}>
          <nav>
            {menuItems.map(item=>{
              const Icon = item.icon;
              const isActive = activeSection===item.id;
              return (
                <div key={item.id} onClick={()=>setActiveSection(item.id)} style={{ padding:'15px 30px', display:'flex', alignItems:'center', gap:'15px', cursor:'pointer', background:isActive?'rgba(255,255,255,0.1)':'transparent', borderRight:isActive?'3px solid white':'3px solid transparent', transition:'all 0.3s ease', position:'relative', overflow:'hidden' }}
                  onMouseEnter={e=>{ if(!isActive) e.currentTarget.style.background='rgba(255,255,255,0.05)'}}
                  onMouseLeave={e=>{ if(!isActive) e.currentTarget.style.background='transparent' }}>
                  {isActive && <div style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',background:'linear-gradient(90deg,rgba(255,255,255,0.05),transparent)',zIndex:-1}} />}                    
                  <Icon size={20} />
                  <span style={{ fontSize:'16px' }}>{item.label}</span>
                </div>
              );
            })}
          </nav>
          <button onClick={handleLogout} style={{ margin:'30px', display:'flex', alignItems:'center', gap:'15px', width:'calc(100% - 60px)', padding:'15px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'8px', color:'white', cursor:'pointer', fontSize:'16px', position:'absolute', bottom:0 }}>
            <LogOut size={20} /><span>Log out</span>
          </button>
        </aside>

        {/* Main Content */}
        <main style={{ flex:1, padding:'40px', position:'relative' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
