// src/components/ui/icons.jsx
import React from 'react';
import { Loader2 } from 'lucide-react';

// Spinner
function Spinner(props) {
  return <Loader2 {...props} />;
}

// Google “G” logo
function GoogleIcon(props) {
  return (
    <svg
      {...props}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google</title>
      <path d="M23.954 12c0-.766-.069-1.513-.197-2.237H12v4.237h6.426c-.277 1.49-1.109 2.753-2.365 3.602v2.991h3.822C22.184 18.613 23.954 15.64 23.954 12z" fill="#4285F4"/>
      <path d="M12 24c3.24 0 5.955-1.076 7.94-2.923l-3.822-2.991c-1.064.714-2.432 1.138-4.118 1.138-3.163 0-5.84-2.134-6.792-5.002H1.254v3.142C3.233 21.827 7.337 24 12 24z" fill="#34A853"/>
      <path d="M5.208 14.222a7.28 7.28 0 01-.39-2.222c0-.773.134-1.52.39-2.223V6.635H1.254A11.996 11.996 0 000 12c0 1.93.464 3.75 1.254 5.365l3.954-3.143z" fill="#FBBC05"/>
      <path d="M12 4.762c1.757 0 3.335.605 4.576 1.797l3.432-3.432C17.953 1.22 15.238.142 12 .142 7.337.142 3.233 2.315 1.254 5.365l3.954 3.142C6.16 6.896 8.837 4.762 12 4.762z" fill="#EA4335"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );
}

export const Icons = {
  spinner: Spinner,
  google: GoogleIcon,
};
