import React, { useState, useEffect, useRef } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a subtle gradient that follows the mouse
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, 300
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.01)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw a simple circle that follows the cursor
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 120, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner circle
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 60, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mousePosition]);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0
    },
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    content: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      maxWidth: '500px',
      width: '100%'
    },
    logo: {
      fontSize: '2.5rem',
      fontWeight: '300',
      letterSpacing: '0.05em',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.1rem',
      fontWeight: '300',
      marginBottom: '3rem',
      opacity: 0.8,
      lineHeight: '1.6'
    },
    form: {
      marginBottom: '3rem'
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '2rem'
    },
    input: {
      width: '100%',
      padding: '1rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: '#ffffff',
      outline: 'none',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    inputFocused: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: '#ffffff',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
    },
    button: {
      width: '100%',
      padding: '1rem 2rem',
      fontSize: '1rem',
      fontWeight: '500',
      backgroundColor: isHovered ? '#ffffff' : 'transparent',
      color: isHovered ? '#000000' : '#ffffff',
      border: '2px solid #ffffff',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(255, 255, 255, 0.2)'
    },
    successMessage: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: '#000000',
      padding: '1rem 2rem',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '500',
      opacity: isSubmitted ? 1 : 0,
      transition: 'opacity 0.3s ease',
      pointerEvents: isSubmitted ? 'auto' : 'none',
      zIndex: 10
    },
    founderSection: {
      marginTop: '2rem',
      padding: '2.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease'
    },
    founderTitle: {
      fontSize: '1.2rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
      color: '#ffffff'
    },
    founderText: {
      fontSize: '0.95rem',
      marginBottom: '1.5rem',
      opacity: 0.7,
      lineHeight: '1.5'
    },
    linkedinContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    },
    profileImage: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    },
    linkedinLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '500',
      padding: '0.8rem 1.5rem',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backdropFilter: 'blur(5px)'
    },
    linkedinIcon: {
      fontSize: '1.2rem'
    }
  };

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas}></canvas>
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.content}>
        <h1 style={styles.logo}>Reconrabbit</h1>
        <p style={styles.subtitle}>
          Join our community and stay updated with the latest insights and innovations.
        </p>
        
        <div style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                ...styles.input,
                ...(document.activeElement === document.querySelector('input[type="email"]') ? styles.inputFocused : {})
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = '#ffffff';
                e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <button
            onClick={handleSubmit}
            style={{
              ...styles.button,
              ...(isHovered ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Join the List
          </button>
        </div>
        
        <div 
          style={styles.founderSection}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <h3 style={styles.founderTitle}>Meet the Founder</h3>
          <p style={styles.founderText}>
            Connect with David Ren, the visionary behind Reconrabbit, and discover the story behind our innovation.
          </p>
          <div style={styles.linkedinContainer}>
            <div style={styles.profileImage}>DR</div>
            <a
              href="https://www.linkedin.com/in/david-ren-cse/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkedinLink}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span style={styles.linkedinIcon}>💼</span>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div style={styles.successMessage}>
        ✓ Successfully added to the list!
      </div>
    </div>
  );
}