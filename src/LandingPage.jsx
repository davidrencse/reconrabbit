import React, { useState, useEffect } from 'react';

// The styles have been removed from this file.
// You will need to ensure your external CSS file (e.g., LandingPage.css)
// and Tailwind CSS are set up correctly in your project.

const helveticaStack = '"Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif';

// The Sign Up Modal Component I created
function SignUpModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  if (!isOpen) return null;

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword || !agreedToTerms) {
      alert("Please fill out all fields and agree to the terms.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose(); 
    }, 2000);
  };
  
  const inputClass = (fieldName) => 
    `w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none ${
      focusedField === fieldName ? 'border-white ring-2 ring-gray-500/30' : 'border-gray-700 hover:border-gray-500'
    }`;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-black rounded-2xl shadow-2xl border border-neutral-800 w-full max-w-md mx-auto animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between p-5 border-b border-neutral-800">
          <h2 className="text-xl font-bold text-white">Sign up</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-neutral-800 hover:text-white transition-colors" aria-label="Close modal">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} onFocus={() => handleFocus('fullName')} onBlur={handleBlur} placeholder="Enter your full name" className={inputClass('fullName')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email Address</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={() => handleFocus('email')} onBlur={handleBlur} placeholder="your@email.com" className={inputClass('email')} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} onFocus={() => handleFocus('password')} onBlur={handleBlur} placeholder="••••••••" className={inputClass('password')} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onFocus={() => handleFocus('confirmPassword')} onBlur={handleBlur} placeholder="••••••••" className={inputClass('confirmPassword')} />
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button type="button" onClick={() => setAgreedToTerms(!agreedToTerms)} className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${agreedToTerms ? 'bg-white border-white' : 'border-gray-500'}`} aria-pressed={agreedToTerms}>
                {agreedToTerms && (<svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" /></svg>)}
            </button>
            <label htmlFor="terms" className="text-sm text-gray-400">I agree to all statements in <a href="#" className="font-semibold text-white hover:underline">Terms of service</a></label>
          </div>
          <div className="pt-2">
            <button type="submit" disabled={isSubmitting} className="w-full px-4 py-3 bg-white hover:bg-gray-200 disabled:bg-gray-700 disabled:text-gray-400 text-black font-bold rounded-lg transition-colors disabled:cursor-not-allowed">
              {isSubmitting ? ( <div className="flex items-center justify-center gap-2"><svg className="w-5 h-5 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span>Signing up...</span></div>) : ('Sign up')}
            </button>
          </div>
        </form>
        <div className="text-center p-5 border-t border-neutral-800">
           <p className="text-sm text-gray-400">Already have an account? <a href="#" className="font-semibold text-white hover:underline">Sign in</a></p>
        </div>
      </div>
    </div>
  );
}

// Your original LandingPage component, now using the SignUpModal
export default function LandingPage() {
  /* ---------- fonts and styles ---------- */
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.cdnfonts.com/css/helvetica-neue-55';
    fontLink.rel  = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // The inline style block has been removed.
    
    return () => {
        document.head.removeChild(fontLink);
    }
  }, []);

  /* ---------- headline typing ---------- */
  const [displayText, setDisplayText] = useState({
    title: '',
    description: '',
    buttonsVisible: false
  });
  const [modalOpen, setModalOpen] = useState(false);

  const fullTitle = 'Your time deserves better.';
  const fullDescription = 'Meet the system for modern life built to give you your time back.';

  useEffect(() => {
    let titleIndex = 0;
    const t = setInterval(() => {
      if (titleIndex <= fullTitle.length) {
        setDisplayText(p => ({ ...p, title: fullTitle.substring(0, titleIndex) }));
        titleIndex++;
      } else {
        clearInterval(t);
        let descIndex = 0;
        const d = setInterval(() => {
          if (descIndex <= fullDescription.length) {
            setDisplayText(p => ({ ...p, description: fullDescription.substring(0, descIndex) }));
            descIndex++;
          } else {
            clearInterval(d);
            setDisplayText(p => ({ ...p, buttonsVisible: true }));
          }
        }, 20);
      }
    }, 30);
    return () => {
        clearInterval(t);
    };
  }, []);

  /* ---------- component ---------- */
  return (
    <div className="landing-page" style={{ fontFamily: helveticaStack }}>
      <div className="background-image-container" />
      <header />
      <main className="hero-section">
        <div className="hero-content">
          <h1>{displayText.title}<span className="cursor" /></h1>
          <p className="hero-description">{displayText.description}</p>

          <div className={`cta-buttons ${displayText.buttonsVisible ? 'visible' : ''}`}>
            <button
              className="primary-btn"
              onClick={() => setModalOpen(true)}
            >
              I&nbsp;am&nbsp;ready
            </button>
            <button className="secondary-btn">
              Mission&nbsp;Statement&nbsp;<span className="arrow">→</span>
            </button>
          </div>
        </div>
      </main>

      {/* modal mount-point: Now calling SignUpModal instead of ContactModal */}
      <SignUpModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
