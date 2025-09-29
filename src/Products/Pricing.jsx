import React from 'react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Up to 3 Workspaces',
        'Email & WhatsApp ',
        'Security',
        'Simplicity'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$4.99',
      period: 'month',
      features: [
        'Up to 10 Workspaces',
        'Discord, Slack, iMessages',
        'Data backup & recovery',
        'Life analytics'
      ],
      popular: true
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: 'month',
      features: [
        'Shared Workspaces & Teams',
        'AI secretary',
        'Security dashboard',
        'Relationship tracker',
      ],
      popular: false
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '10rem 1rem 3rem', // Increased top padding to push content down
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center' // This centers content vertically
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          margin: '0 0 1rem 0',
          color: '#ffffff'
        }}>
          Choose Your Plan
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#888888',
          margin: 0,
          fontWeight: '300'
        }}>
          Simple, transparent pricing for every need
        </p>
      </div>

      {/* Pricing Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        width: '100%',
        alignItems: 'center'
      }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: plan.popular 
                ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' 
                : 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
              border: plan.popular ? '2px solid #ffffff' : '1px solid #333333',
              borderRadius: '16px',
              padding: '2rem',
              position: 'relative',
              transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: plan.popular 
                ? '0 20px 40px rgba(255,255,255,0.1)' 
                : '0 10px 30px rgba(0,0,0,0.3)',
              marginTop: plan.popular ? '0' : '24px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = plan.popular ? 'scale(1.08)' : 'scale(1.03)';
              e.currentTarget.style.boxShadow = plan.popular 
                ? '0 25px 50px rgba(255,255,255,0.15)' 
                : '0 15px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = plan.popular ? 'scale(1.05)' : 'scale(1)';
              e.currentTarget.style.boxShadow = plan.popular 
                ? '0 20px 40px rgba(255,255,255,0.1)' 
                : '0 10px 30px rgba(0,0,0,0.3)';
            }}
          >
            {plan.popular && (
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '0',
                right: '0',
                margin: '0 auto',
                width: 'fit-content',
                background: '#ffffff',
                color: '#000000',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>
                MOST POPULAR
              </div>
            )}

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: '0 0 1rem 0',
                color: '#ffffff'
              }}>
                {plan.name}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#ffffff'
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: '1rem',
                  color: '#888888',
                  marginLeft: '0.5rem'
                }}>
                  /{plan.period}
                </span>
              </div>
            </div>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0'
            }}>
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    fontSize: '0.95rem',
                    color: '#cccccc',
                    borderBottom: featureIndex !== plan.features.length - 1 ? '1px solid #333333' : 'none'
                  }}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    marginRight: '1rem',
                    flexShrink: 0
                  }} />
                  {feature}
                </li>
              ))}
            </ul>

            <button style={{
              width: '100%',
              padding: '1rem 2rem',
              background: plan.popular 
                ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)' 
                : 'transparent',
              color: plan.popular ? '#000000' : '#ffffff',
              border: plan.popular ? 'none' : '2px solid #ffffff',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              if (plan.popular) {
                e.target.style.background = 'linear-gradient(135deg, #f0f0f0 0%, #d0d0d0 100%)';
              } else {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#000000';
              }
            }}
            onMouseLeave={(e) => {
              if (plan.popular) {
                e.target.style.background = 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)';
              } else {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }
            }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '4rem',
        color: '#666666',
        fontSize: '0.9rem'
      }}>
        <p>All plans include 14-day free trial • No setup fees • Cancel anytime</p>
      </div>
    </div>
  );
};

export default PricingPage;