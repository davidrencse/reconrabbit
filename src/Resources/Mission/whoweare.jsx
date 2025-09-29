import React, { useState } from 'react';

// SVG Icon for the arrow in the corner of each card
const ArrowIcon = () => (
  <svg
    className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// SVG Icon for the "Separation" card
const SeparationIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 59C46.9117 59 59 46.9117 59 32C59 17.0883 46.9117 5 32 5C17.0883 5 5 17.0883 5 32C5 46.9117 17.0883 59 32 59Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M51.1127 12.8873C44.4827 6.25732 32 5 32 5C32 5 19.5173 6.25732 12.8873 12.8873" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M12.8873 51.1127C19.5173 57.7427 32 59 32 59C32 59 44.4827 57.7427 51.1127 51.1127" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M5 32H59" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
    </svg>
);


// SVG Icon for the "Protection" card
const ProtectionIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 5L7 16.25V32C7 45.5625 18.0625 57.875 32 61.25C45.9375 57.875 57 45.5625 57 32V16.25L32 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M22.8125 31.0625L29.25 37.5L42.3125 24.4375" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// SVG Icon for the "Productivity" card
const ProductivityIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52 18L35.25 34.75L26.25 25.75L12 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 18H52V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 5V59H59" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Close icon for the modal
const CloseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Decorative background element
const ShootingStar = ({ top, left, delay }) => {
  const style = {
    top: `${top}%`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `calc(1.5s * (1 + ${Math.random()}))`
  };
  return <div className="absolute w-1 h-1 bg-white rounded-full shooting-star" style={style}></div>;
};

// Modal Component
const InfoModal = ({ isOpen, onClose, feature }) => {
    if (!isOpen || !feature) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-2xl mx-4 p-8 sm:p-12 rounded-2xl overflow-hidden text-white modal-gradient-bg"
                onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
            >
                {/* Noise/Texture Effect */}
                <div className="absolute inset-0 w-full h-full bg-noise opacity-10"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 text-gray-300">
                        {feature.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                        {feature.modalContent}
                    </p>
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="Close modal"
                    >
                       <CloseIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};


// Main Card Component
const FeatureCard = ({ icon, title, description, onClick }) => {
    const cardClasses = `
        group relative flex flex-col justify-between h-full p-8 bg-black border
        border-gray-800 rounded-2xl transition-all duration-300 ease-in-out
        hover:border-white hover:bg-gray-900/50 cursor-pointer
        hover:-translate-y-2
    `;

    return (
        <div className={cardClasses} onClick={onClick}>
            <div>
                <div className="mb-6 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="absolute bottom-8 right-8 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
            </div>
        </div>
    );
};


// The main "Who We Are" page component
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <SeparationIcon />,
      title: 'SEPARATION',
      description: 'Divide life into distinct workspaces for work, education, and personal projects, gaining unparalleled clarity and control over your communication.',
      modalContent: 'Reconrabbit combats digital chaos by creating distinct, isolated workspaces. This mental and digital separation reduces cognitive load and prevents context-switching, allowing you to fully immerse yourself in the task at hand. All your tools, messages, and files for a specific life area are contained within its own workspace, creating a focused and organized environment.'
    },
    {
      icon: <ProtectionIcon />,
      title: 'PROTECTION',
      description: 'Secure your data and focus. All messages and notifications are organized into their respective workspaces, preventing digital crossover and overload.',
      modalContent: 'Your digital security and focus are paramount. Reconrabbit protects your data by siloing information, which prevents accidental leaks between personal and professional contexts. Furthermore, it protects your attention by consolidating all notifications within the app and organizing them by workspace, shielding you from the constant, distracting barrage of alerts from numerous sources.'
    },
    {
      icon: <ProductivityIcon />,
      title: 'PRODUCTIVITY',
      description: 'Get instant access to workspace-specific resources, from emails to texts from dedicated phone numbers, all streamlined to boost your efficiency.',
      modalContent: 'Unlock peak efficiency with streamlined workflows. When you enter a workspace, everything you need is at your fingertips. This includes unified inboxes for emails, Slack, and texts, as well as instant access to your most-used apps for that context. By eliminating the need to constantly switch between applications, Reconrabbit saves you time and keeps you in a state of flow.'
    },
  ];

  const handleCardClick = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing feature to allow for fade-out animation
    setTimeout(() => setSelectedFeature(null), 300);
  };

  const stars = Array.from({ length: 15 }, (_, i) => (
      <ShootingStar
          key={i}
          top={Math.random() * 100}
          left={Math.random() * 100}
          delay={Math.random() * 5}
      />
  ));

  return (
    <>
      <style>{`
        @keyframes shoot {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(150px, -150px) scale(0); opacity: 0; }
        }
        .shooting-star {
          animation: shoot 2s linear infinite;
        }
        .modal-gradient-bg {
          background-image: linear-gradient(to top left, #000000, #111111, #2a2a2a);
        }
        .bg-noise {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=');
        }
      `}</style>

      <div className="min-h-screen bg-black text-white font-sans antialiased overflow-hidden">
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {stars}
            </div>
            <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
                <div className="text-left mb-16">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">THIS IS RECONRABBIT</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-3xl">
                        A life organization platform designed to simplify the complexities of modern digital life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            onClick={() => handleCardClick(feature)}
                        />
                    ))}
                </div>
                 <div className="text-center mt-20">
                    <p className="text-gray-500">Build the future you.</p>
                </div>
            </div>
        </div>
      </div>
      <InfoModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        feature={selectedFeature}
      />
    </>
  );
}
