import React, { useState, useEffect } from 'react';

const CommunicationHub = () => {
  const [activeAPI, setActiveAPI] = useState('gmail');
  const [connectionStatus, setConnectionStatus] = useState({
    gmail: 'connected',
    sms: 'connecting',
    whatsapp: 'disconnected',
    discord: 'connected'
  });
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const apis = [
    { id: 'gmail', name: 'Gmail', icon: '📧', position: { x: 25, y: 35 } },
    { id: 'sms', name: 'SMS', icon: '💬', position: { x: 75, y: 35 } },
    { id: 'whatsapp', name: 'WhatsApp', icon: '📱', position: { x: 25, y: 65 } },
    { id: 'discord', name: 'Discord', icon: '🎮', position: { x: 75, y: 65 } }
  ];

  return (
    <div style={styles.container}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.backgroundVideo}
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35e1c9a6d3a9&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
      </video>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>UNIFIED COMMUNICATIONS</h1>
          <p style={styles.heroSubtitle}>
            One interface. Every conversation.<br/>
            Connect all your communication channels in a single, intelligent hub.
          </p>
        </div>
      </div>

      {/* Main Interface */}
      <div style={styles.interfaceSection}>
        {/* Central Navigation Ring */}
        <div style={styles.centralHub}>
          <div style={{...styles.navigationRing, transform: `rotate(${animationPhase * 90}deg)`}}>
            <div style={styles.ringInner}></div>
            <div style={styles.ringOuter}></div>
          </div>
          
          {/* Navigation Points */}
          <div style={styles.navPoints}>
            <div style={{...styles.navPoint, ...styles.navPointTop}}>⚡</div>
            <div style={{...styles.navPoint, ...styles.navPointRight}}>🌐</div>
            <div style={{...styles.navPoint, ...styles.navPointBottom}}>⚙️</div>
            <div style={{...styles.navPoint, ...styles.navPointLeft}}>📊</div>
          </div>

          {/* Central Core */}
          <div style={styles.centralCore}>
            <div style={styles.coreInner}>
              <span style={styles.coreText}>HUB</span>
            </div>
          </div>
        </div>

        {/* API Connection Nodes */}
        <div style={styles.apiContainer}>
          {apis.map(api => {
          const isLeft = api.position.x < 50;
          const angle  = Math.atan2(50 - api.position.y, 50 - api.position.x) * 180 / Math.PI;

          return (
            <div
              key={api.id}
              style={{
                ...styles.apiNode,
                left:  `${api.position.x}%`,
                top:   `${api.position.y}%`,
                transform: activeAPI === api.id
                  ? 'translate(-50%, -50%) scale(1.2)'
                  : 'translate(-50%, -50%) scale(1)',
                borderColor: connectionStatus[api.id] === 'connected'
                  ? '#ffffff'
                  : connectionStatus[api.id] === 'connecting'
                  ? '#666666'
                  : '#333333'
              }}
              onClick={() => setActiveAPI(api.id)}
            >
              {/* 🔙 add these three lines back */}
              <div style={styles.apiIcon}>{api.icon}</div>
              <div style={styles.apiName}>{api.name}</div>
              <div
                style={{
                  ...styles.connectionIndicator,
                  backgroundColor:
                    connectionStatus[api.id] === 'connected'
                      ? '#ffffff'
                      : connectionStatus[api.id] === 'connecting'
                      ? '#666666'
                      : '#333333'
                }}
              />

              {/* connection line */}
              <div
                style={{
                  ...styles.connectionLine,
                  ...(isLeft
                    ? {
                        left: '100%',
                        transformOrigin: 'left center',
                        background:
                          'linear-gradient(to right, rgba(255,255,255,0.3), transparent)'
                      }
                    : {
                        left: 0,
                        transformOrigin: 'left center',
                        background:
                          'linear-gradient(to right, rgba(255,255,255,0.3), transparent)'
                      }),
                  transform: `rotate(${angle}deg)`,
                  opacity: activeAPI === api.id ? 1 : 0.3
                }}
              />
            </div>
          );
        })}

        </div>

        {/* Side Panels */}
        <div style={styles.leftPanel}>
          <div style={styles.panelHeader}>PROTOCOLS</div>
          <div style={styles.panelContent}>
            {['HTTP/2', 'WebSocket', 'OAuth 2.0', 'REST API'].map(p => (
              <div key={p} style={styles.protocolItem}>
                <span style={styles.protocolDot}></span>
                {p}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.rightPanel}>
          <div style={styles.panelHeader}>STATUS</div>
          <div style={styles.panelContent}>
            <div style={styles.statusItem}>
              <span style={styles.statusIndicator}></span>
              <span>ONLINE</span>
            </div>
            <div style={styles.statusItem}>
              <span style={{...styles.statusIndicator, backgroundColor: '#666666'}}></span>
              <span>SYNC</span>
            </div>
            <div style={styles.statusItem}>
              <span style={{...styles.statusIndicator, backgroundColor: '#333333'}}></span>
              <span>RECEIVE</span>
            </div>
          </div>
        </div>

        {/* Bottom Info Panel */}
        <div style={styles.bottomPanel}>
          <div style={styles.infoGrid}>
            {[
              { label: 'Messages', value: 142 },
              { label: 'Channels', value: 4 },
              { label: 'Uptime', value: '99.9%' },
              { label: 'Response', value: '2.3s' }
            ].map(info => (
              <div key={info.label} style={styles.infoItem}>
                <div style={styles.infoValue}>{info.value}</div>
                <div style={styles.infoLabel}>{info.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>INTEGRATED COMMUNICATIONS</h2>
        <div style={styles.featuresGrid}>
          {[
            { icon: '🔗', title: 'Universal Sync', desc: 'Seamlessly connect Gmail, SMS, WhatsApp, and Discord in one unified interface' },
            { icon: '⚡', title: 'Real-time Processing', desc: 'Instant message routing and processing across all connected platforms' },
            { icon: '🛡️', title: 'Secure Protocols', desc: 'End-to-end encryption and secure API authentication for all channels' },
            { icon: '🎯', title: 'Smart Routing', desc: 'Intelligent message categorization and automatic channel selection' }
          ].map(f => (
            <div key={f.title} style={styles.featureCard}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDescription}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- font stack w/ Helvetica Neue ---------- */
const helvetica = '"Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif';

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: helvetica,
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundVideo: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
    filter: 'brightness(0.25) contrast(1.2)'
  },
  /* ---- HERO ---- */
  heroSection: {
    height: '80vh',                // was 100vh
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1
  },
  heroContent: {
    textAlign: 'center',
    padding: '1.5rem'              // was 2rem
  },
  heroTitle: {
    fontSize: '3.5rem',            // was 4rem
    fontWeight: 300,
    fontFamily: helvetica,
    margin: '0 0 0.75rem 0',       // was 1rem
    letterSpacing: '0.05em',
    color: '#fff'
  },
  heroSubtitle: {
    fontSize: '1.1rem',            // slightly smaller
    color: '#999',
    fontFamily: helvetica,
    lineHeight: 1.5,               // was 1.6
    maxWidth: '550px',
    margin: '0 auto',
    fontWeight: 300
  },
  /* ---- MAIN ---- */
  interfaceSection: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000'
  },
  centralHub: {
    position: 'relative',
    width: '300px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigationRing: {
    position: 'absolute',
    width: '250px',
    height: '250px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    transition: 'transform 2s ease-in-out'
  },
  ringInner: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%'
  },
  ringOuter: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '50%'
  },
  navPoints: { position: 'absolute', width: '100%', height: '100%' },
  navPoint: {
    position: 'absolute',
    width: 30,
    height: 30,
    background: '#000',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  navPointTop: { top: -15, left: '50%', transform: 'translateX(-50%)' },
  navPointRight: { right: -15, top: '50%', transform: 'translateY(-50%)' },
  navPointBottom: { bottom: -15, left: '50%', transform: 'translateX(-50%)' },
  navPointLeft: { left: -15, top: '50%', transform: 'translateY(-50%)' },
  centralCore: {
    position: 'absolute',
    width: 80,
    height: 80,
    background: '#000',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
  },
  coreInner: {
    width: 60,
    height: 60,
    background: '#000',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  coreText: { fontSize: 12, fontWeight: 400, color: '#fff' },
  apiContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  apiNode: {
    position: 'absolute',
    width: 100,
    height: 100,
    background: '#000',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    pointerEvents: 'auto',
    backdropFilter: 'blur(10px)',
    transform: 'translate(-50%, -50%)'
  },
  apiIcon: { fontSize: 24, marginBottom: 6 },      // less gap
  apiName: { fontSize: 10, fontWeight: 400, color: '#fff' },
  connectionIndicator: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: '50%'
  },
  connectionLine: {
    position: 'absolute',
    width: 100,
    height: 1,
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.3), transparent)',
    transformOrigin: 'left center',
    zIndex: -1
  },
  leftPanel: {
    position: 'absolute',
    left: 40,                       // was 50
    top: '50%',
    transform: 'translateY(-50%)',
    width: 140,                     // was 150
    background: '#000',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 15,                    // was 20
    backdropFilter: 'blur(10px)'
  },
  rightPanel: {
    position: 'absolute',
    right: 40,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 140,
    background: '#000',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 15,
    backdropFilter: 'blur(10px)'
  },
  panelHeader: {
    fontSize: 12,
    fontWeight: 400,
    color: '#fff',
    marginBottom: 10,               // was 15
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: 4
  },
  panelContent: { display: 'flex', flexDirection: 'column', gap: 6 }, // was 10
  protocolItem: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#999' },
  protocolDot: { width: 6, height: 6, borderRadius: '50%', backgroundColor: '#666' },
  statusItem: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#999' },
  statusIndicator: { width: 8, height: 8, borderRadius: '50%', backgroundColor: '#fff' },
  bottomPanel: {
    position: 'absolute',
    bottom: 35,                    // was 50
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#000',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 15,                   // was 20
    backdropFilter: 'blur(10px)'
  },
  infoGrid: { display: 'flex', gap: 20 },          // was 30
  infoItem: { textAlign: 'center' },
  infoValue: { fontSize: 16, fontWeight: 300, color: '#fff' },
  infoLabel: { fontSize: 10, color: '#999', marginTop: 4 }, // was 5
  /* ---- FEATURES ---- */
  featuresSection: { padding: '60px 40px', background: '#000' }, // was 100px 50px
  featuresTitle: {
    fontSize: '2.3rem',            // was 2.5rem
    textAlign: 'center',
    marginBottom: 40,              // was 60
    color: '#fff',
    letterSpacing: '0.05em',
    fontWeight: 300
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', // smaller card width
    gap: 20,                     // was 30
    maxWidth: 1100,              // was 1200
    margin: '0 auto'
  },
  featureCard: {
    background: '#000',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 24,                 // was 30
    textAlign: 'center',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  featureIcon: { fontSize: 36, marginBottom: 16 }, // was 40 / 20
  featureTitle: { fontSize: 17, fontWeight: 400, color: '#fff', marginBottom: 12 },
  featureDescription: { fontSize: 13, color: '#999', lineHeight: 1.5, fontWeight: 300 }
};

export default CommunicationHub;
