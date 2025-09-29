import React from 'react';

// This component encapsulates the animated orbs from your original design.
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="gradient-orb-1" />
      <div className="gradient-orb-2" />
      <div className="gradient-orb-3" />
    </div>
  );
}