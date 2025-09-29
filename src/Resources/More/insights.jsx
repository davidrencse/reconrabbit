import React, { useState, useEffect } from 'react';
import { Users, Clock, Bell, Server } from 'lucide-react';

// HELPER: A custom hook for the counting animation
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const stepTime = Math.max(Math.floor(duration / end), 1);

  useEffect(() => {
    if (end === 0) return;
    const timer = setInterval(() => {
      setCount(prevCount => {
        const increment = Math.ceil(end / (duration / stepTime));
        if (prevCount + increment >= end) {
          clearInterval(timer);
          return end;
        }
        return prevCount + increment;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration, stepTime]);

  return count;
};

// COMPONENT: Individual statistic card
const StatCard = ({ icon, title, value, description, className }) => {
  const IconComponent = icon;
  const animatedValue = useCounter(value);

  return (
    <div className={`bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm ${className}`}>
      <div>
        <div className="flex items-center justify-between text-gray-400 mb-2">
          <p className="text-sm font-medium">{title}</p>
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="text-4xl font-bold text-white mb-1">
          {animatedValue.toLocaleString()}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

// COMPONENT: World map visualization for server status
const ServerMap = () => {
    const servers = [
        { name: 'US-West', top: '40%', left: '15%' },
        { name: 'US-East', top: '35%', left: '25%' },
        { name: 'Europe-Central', top: '30%', left: '48%' },
        { name: 'Asia-SE', top: '65%', left: '80%' },
        { name: 'Brazil', top: '70%', left: '32%' },
        { name: 'Australia', top: '80%', left: '85%' },
    ];

    return (
        <div className="relative col-span-1 md:col-span-2 lg:col-span-3 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 overflow-hidden backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-4">Global Server Network</h3>
            <p className="text-sm text-gray-500 mb-6">Our infrastructure ensures low latency and high availability across the globe.</p>
            <div className="relative w-full h-64">
                {/* Simplified World Map SVG */}
                <svg className="absolute inset-0 w-full h-full text-gray-700" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                   <path fill="currentColor" d="M991.1,304.2c-1.2-2.1-2.9-3.7-4.5-5.3c-2.4-2.4-5.2-4-8.2-5.4c-2.1-1-4.3-2-6.5-2.9c-4.5-1.9-9.2-3.4-13.8-4.8c-2.3-0.7-4.6-1.4-6.9-2.1c-5.8-1.7-11.6-3.3-17.4-4.6c-2.9-0.7-5.8-1.3-8.7-1.8c-6-1-12-1.8-18-2.2c-2.9-0.2-5.9-0.4-8.8-0.5c-6.1-0.2-12.2-0.2-18.3-0.1c-3.1,0.1-6.2,0.2-9.2,0.4c-6.2,0.5-12.4,1.3-18.5,2.4c-3.1,0.5-6.1,1.1-9.2,1.8c-5.9,1.3-11.8,2.8-17.7,4.7c-2.9,1-5.8,2-8.6,3.2c-5.3,2.2-10.5,4.8-15.5,7.7c-2.5,1.5-5,3-7.4,4.7c-4.5,3.1-8.8,6.5-12.9,10.2c-2.1,1.9-4.1,3.8-6,5.8c-3.7,3.9-7,8.2-10,12.7c-1.5,2.3-2.9,4.6-4.3,6.9c-2.8,4.7-5.2,9.6-7.3,14.6c-1,2.5-2,5-2.9,7.5c-1.8,5.1-3.2,10.3-4.2,15.5c-0.5,2.6-0.9,5.2-1.3,7.8c-0.8,5.3-1.1,10.6-1.1,15.9c0,2.7,0.1,5.4,0.3,8.1c0.4,5.4,1.1,10.8,2.3,16.1c0.6,2.7,1.2,5.3,2,8c1.5,5.3,3.5,10.5,5.9,15.6c1.2,2.5,2.5,5,3.9,7.4c2.8,4.8,5.9,9.4,9.4,13.9c1.8,2.2,3.6,4.4,5.5,6.5c3.7,4.1,7.8,7.9,12.1,11.3c2.2,1.7,4.4,3.4,6.7,5c4.4,3.2,9.1,6.1,13.9,8.7c2.4,1.3,4.8,2.6,7.3,3.8c5.1,2.4,10.2,4.6,15.4,6.4c2.6,0.9,5.2,1.8,7.8,2.6c5.5,1.7,11,3.1,16.5,4.3c2.8,0.6,5.5,1.1,8.3,1.6c5.8,1,11.6,1.7,17.4,2.2c2.9,0.2,5.8,0.4,8.8,0.5c5.9,0.2,11.9,0.2,17.8-0.1c3-0.1,5.9-0.2,8.9-0.4c6-0.5,12-1.2,17.9-2.3c3-0.5,5.9-1.1,8.8-1.7c5.9-1.2,11.7-2.8,17.5-4.6c2.9-0.9,5.7-1.9,8.5-2.9c5.3-2.1,10.5-4.5,15.6-7.3c2.5-1.4,5-2.8,7.4-4.4c4.6-3.1,9-6.5,13.2-10.1c2.1-1.8,4.1-3.7,6-5.7c3.8-3.9,7.1-8.2,10.1-12.7c1.5-2.3,2.9-4.6,4.3-7c2.8-4.7,5.2-9.6,7.3-14.6c1-2.5,2-5,2.9-7.5c1.8-5.1,3.2-10.3,4.2-15.5c0.5-2.6,0.9-5.2,1.3-7.8c0.8-5.3,1.1-10.6,1.1-15.9c0-2.7-0.1-5.4-0.3-8.1c-0.4-5.4-1.1-10.8-2.3-16.1c-0.6-2.7-1.2-5.3-2-8C997,314.7,994.9,309.5,992.5,304.4z M235,394.9c0.2,1.7,0.4,3.4,0.6,5.1c0.4,3.4,0.9,6.8,1.4,10.2c0.3,1.7,0.5,3.4,0.8,5.1c0.6,3.4,1.3,6.8,2,10.1c0.4,1.7,0.7,3.4,1.1,5.1c0.8,3.4,1.7,6.7,2.7,10c0.5,1.7,1,3.3,1.5,5c1,3.3,2.1,6.6,3.3,9.8c0.6,1.6,1.2,3.2,1.8,4.8c1.2,3.2,2.5,6.4,3.9,9.5c0.7,1.6,1.4,3.2,2.1,4.7c1.4,3.1,3,6.2,4.6,9.2c0.8,1.5,1.6,3.1,2.5,4.6c1.7,3,3.6,6,5.6,8.9c0.9,1.5,1.9,2.9,2.9,4.4c1.9,2.9,4,5.8,6.2,8.6c1.1,1.4,2.2,2.8,3.3,4.2c2.2,2.8,4.5,5.5,6.9,8.1c1.2,1.3,2.4,2.6,3.7,3.9c2.5,2.6,5.1,5.1,7.8,7.5c1.3,1.2,2.7,2.4,4.1,3.6c2.7,2.4,5.5,4.7,8.4,6.8c1.5,1.1,2.9,2.2,4.4,3.2c2.9,2,5.9,3.9,9,5.7c1.5,0.9,3.1,1.8,4.7,2.6c3.1,1.6,6.3,3.1,9.5,4.5c1.6,0.7,3.2,1.4,4.8,2.1c3.2,1.3,6.4,2.5,9.7,3.6c1.6,0.5,3.3,1,4.9,1.5c3.3,1,6.6,1.9,9.9,2.6c1.7,0.4,3.3,0.7,5,1.1c3.3,0.7,6.6,1.3,10,1.8c1.7,0.2,3.4,0.4,5.1,0.6c3.4,0.4,6.8,0.7,10.2,0.8c1.7,0.1,3.4,0.1,5.1,0.1c3.4,0,6.8,0,10.2-0.1c1.7,0,3.4-0.1,5.1-0.1c3.4-0.1,6.8-0.3,10.1-0.6c1.7-0.1,3.4-0.3,5.1-0.5c3.4-0.4,6.7-0.9,10-1.4c1.7-0.3,3.3-0.5,5-0.8c3.3-0.6,6.6-1.3,9.8-2c1.6-0.4,3.2-0.7,4.8-1.1c3.2-0.8,6.4-1.7,9.5-2.7c1.6-0.5,3.1-1,4.7-1.5c3.1-1,6.2-2.1,9.2-3.3c1.5-0.6,3-1.2,4.6-1.8c3-1.2,6-2.5,8.9-3.9c1.5-0.7,2.9-1.4,4.4-2.1c2.9-1.4,5.8-2.9,8.6-4.6c1.4-0.8,2.8-1.6,4.2-2.5c2.8-1.7,5.5-3.6,8.1-5.6c1.3-1,2.6-2,3.9-3.1c2.6-2.1,5.1-4.3,7.5-6.7c1.2-1.2,2.4-2.4,3.6-3.7c2.4-2.5,4.7-5.1,6.8-7.8c1.1-1.3,2.2-2.7,3.2-4.1c2-2.7,3.9-5.5,5.7-8.4c0.9-1.5,1.8-2.9,2.6-4.4c1.6-3.1,3.1-6.3,4.5-9.5c0.7-1.6,1.4-3.2,2.1-4.8c1.3-3.2,2.5-6.4,3.6-9.7c0.5-1.6,1-3.3,1.5-4.9c1-3.3,1.9-6.6,2.6-9.9c0.4-1.7,0.7-3.3,1.1-5c0.7-3.3,1.3-6.6,1.8-10c0.2-1.7,0.4-3.4,0.6-5.1c0.4-3.4,0.7-6.8,0.8-10.2c0.1-1.7,0.1-3.4,0.1-5.1c0-3.4,0-6.8-0.1-10.2c0-1.7-0.1-3.4-0.1-5.1c-0.1-3.4-0.3-6.8-0.6-10.1c-0.1-1.7-0.3-3.4-0.5-5.1c-0.4-3.4-0.9-6.7-1.4-10c-0.3-1.7-0.5-3.3-0.8-5c-0.6-3.3-1.3-6.6-2-9.9c-0.4-1.7-0.7-3.3-1.1-5c-0.8-3.3-1.7-6.6-2.7-9.8c-0.5-1.6-1-3.2-1.5-4.8c-1-3.2-2.1-6.4-3.3-9.5c-0.6-1.6-1.2-3.1-1.8-4.7c-1.2-3.1-2.5-6.2-3.9-9.2c-0.7-1.5-1.4-3.1-2.1-4.6c-1.4-3-3-6-4.6-8.9c-0.8-1.5-1.6-2.9-2.5-4.4c-1.7-2.9-3.6-5.8-5.6-8.6c-1-1.4-1.9-2.8-2.9-4.2c-1.9-2.8-4-5.5-6.2-8.1c-1.1-1.3-2.2-2.6-3.3-3.9c-2.2-2.6-4.5-5.1-6.9-7.5c-1.2-1.2-2.4-2.4-3.7-3.6c-2.5-2.4-5.1-4.7-7.8-6.8c-1.3-1.1-2.7-2.2-4.1-3.2c-2.7-2-5.5-3.9-8.4-5.7c-1.5-0.9-2.9-1.8-4.4-2.6c-2.9-1.6-5.9-3.1-9-4.5c-1.5-0.7-3.1-1.4-4.7-2.1c-3.1-1.3-6.3-2.5-9.5-3.6c-1.6-0.5-3.2-1-4.8-1.5c-3.2-1-6.4-1.9-9.7-2.6c-1.6-0.4-3.3-0.7-4.9-1.1c-3.3-0.7-6.6-1.3-9.9-1.8c-1.7-0.2-3.3-0.4-5-0.6c-3.3-0.4-6.6-0.7-10-0.8c-1.7-0.1-3.4-0.1-5.1-0.1c-3.4,0-6.8,0-10.2,0.1c-1.7,0-3.4,0.1-5.1,0.1c-3.4,0.1-6.8,0.3-10.2,0.6c-1.7,0.1-3.4,0.3-5.1,0.5c-3.4,0.4-6.7,0.9-10.1,1.4c-1.7,0.3-3.3,0.5-5,0.8c-3.3,0.6-6.6,1.3-9.9,2c-1.7,0.4-3.3,0.7-4.9,1.1c-3.3,0.8-6.6,1.7-9.8,2.7c-1.6,0.5-3.2,1-4.8,1.5c-3.2,1-6.4,2.1-9.5,3.3c-1.6,0.6-3.1,1.2-4.7,1.8c-3.1,1.2-6.2,2.5-9.2,3.9c-1.5,0.7-3,1.4-4.6,2.1c-3,1.4-6,2.9-8.9,4.6c-1.5,0.8-2.9,1.6-4.4,2.5c-2.9,1.7-5.8,3.6-8.6,5.6c-1.4,1-2.8,2-4.2,3.1c-2.8,2.1-5.5,4.3-8.1,6.7c-1.3,1.2-2.6,2.4-3.9,3.7c-2.6,2.5-5.1,5.1-7.5,7.8c-1.2,1.3-2.4,2.7-3.6,4.1c-2.4,2.7-4.7,5.5-6.8,8.4c-1.1,1.5-2.2,2.9-3.2,4.4c-2,3.1-3.9,6.3-5.7,9.5c-0.9,1.6-1.8,3.2-2.6,4.8c-1.6,3.2-3.1,6.4-4.5,9.7c-0.7,1.6-1.4,3.3-2.1,4.9c-1.3,3.3-2.5,6.6-3.6,9.9c-0.5,1.7-1,3.3-1.5,5c-1,3.3-1.9,6.6-2.6,10c-0.4,1.7-0.7,3.4-1.1,5.1c-0.7,3.4-1.3,6.8-1.8,10.2c-0.2,1.7-0.4,3.4-0.6,5.1c-0.4,3.4-0.7,6.8-0.8,10.2c-0.1,1.7-0.1,3.4-0.1,5.1s0,3.4,0.1,5.1c0,1.7,0.1,3.4,0.1,5.1C234.9,384.7,235,391.5,235,394.9z"/>
                </svg>

                {/* Server Dots */}
                {servers.map((server) => (
                    <div
                        key={server.name}
                        className="absolute w-3 h-3 rounded-full bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ top: server.top, left: server.left, boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4' }}
                    >
                        <div className="absolute w-full h-full bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-cyan-200 whitespace-nowrap bg-black/30 px-1.5 py-0.5 rounded">{server.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function Insights() {
  return (
    <div className="bg-black min-h-screen text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center">
            <div className="inline-block">
                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter relative">
                    ReconRabbit
                    <span className="absolute -top-1 -right-4 text-xs font-bold text-cyan-400 bg-gray-800 px-2 py-1 rounded-md transform rotate-12">LIVE</span>
                </h1>
            </div>
           
            <p className="mt-4 max-w-2xl mx-auto text-base text-gray-400">
                A unified, real-time overview of our platform's impact. We handle the noise, you stay in flow.
            </p>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard 
              icon={Users}
              title="Live Users"
              value={12789}
              description="+214 this week"
              className="lg:col-span-1"
            />
            <StatCard 
              icon={Clock}
              title="Hours Saved"
              value={42345}
              description="Collective user productivity"
               className="lg:col-span-1"
            />
            <StatCard 
              icon={Bell}
              title="Notifications Processed"
              value={3109340}
              description="Across all integrated services"
               className="lg:col-span-1"
            />
          
            {/* Server Map Component fills the rest of the grid */}
            <ServerMap />
        </main>

        <footer className="text-center mt-12 text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} ReconRabbit. All rights reserved.</p>
          <p>Simplifying digital chaos for the modern multitasker.</p>
        </footer>
      </div>
    </div>
  );
}
