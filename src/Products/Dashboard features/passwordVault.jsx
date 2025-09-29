import React, { useState, useEffect } from 'react';
import { Plus, Search, Eye, EyeOff, Copy, Edit, Trash2, Shield, Mail, MessageSquare, Briefcase } from 'lucide-react';

const PasswordVault = () => {
  const [passwords, setPasswords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPassword, setShowPassword] = useState({});
  const [isAddingPassword, setIsAddingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState({ name: '', username: '', password: '', category: 'Work' });

  // Initialize with example passwords
  useEffect(() => {
    setPasswords([
      {
        id: 1,
        name: 'Work Email',
        username: 'john.doe@company.com',
        password: 'WorkPass123!',
        category: 'Work',
        icon: Mail,
        lastUsed: '2 hours ago',
        strength: 'Strong'
      },
      {
        id: 2,
        name: 'School Email',
        username: 'j.doe@university.edu',
        password: 'SchoolLife2024',
        category: 'Education',
        icon: Shield,
        lastUsed: '1 day ago',
        strength: 'Medium'
      },
      {
        id: 3,
        name: 'Personal Email',
        username: 'johndoe.personal@gmail.com',
        password: 'PersonalSecure987',
        category: 'Personal',
        icon: Mail,
        lastUsed: '3 hours ago',
        strength: 'Strong'
      },
      {
        id: 4,
        name: 'WhatsApp',
        username: '+1234567890',
        password: 'WhatsApp2024!',
        category: 'Social',
        icon: MessageSquare,
        lastUsed: '30 minutes ago',
        strength: 'Strong'
      }
    ]);
  }, []);

  const togglePasswordVisibility = (id) => {
    setShowPassword(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  const addPassword = () => {
    if (newPassword.name && newPassword.username && newPassword.password) {
      const password = {
        id: Date.now(),
        ...newPassword,
        icon: getIconForCategory(newPassword.category),
        lastUsed: 'Just now',
        strength: getPasswordStrength(newPassword.password)
      };
      setPasswords([...passwords, password]);
      setNewPassword({ name: '', username: '', password: '', category: 'Work' });
      setIsAddingPassword(false);
    }
  };

  const getIconForCategory = (category) => {
    switch (category) {
      case 'Work': return Briefcase;
      case 'Education': return Shield;
      case 'Personal': return Mail;
      case 'Social': return MessageSquare;
      default: return Shield;
    }
  };

  const getPasswordStrength = (password) => {
    if (password.length > 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
      return 'Strong';
    } else if (password.length > 8) {
      return 'Medium';
    }
    return 'Weak';
  };

  const filteredPasswords = passwords.filter(password =>
    password.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    password.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryGradient = (category) => {
    switch (category) {
      case 'Work': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'Education': return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 'Personal': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      case 'Social': return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
      default: return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
  };

  return (
    <div className="password-vault">
      <style>{`
        .password-vault {
          min-height: 100vh;
          background: #0a0a0a;
          color: white;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .vault-container {
          position: relative;
          z-index: 2;
          padding: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .vault-header {
          margin-bottom: 40px;
        }

        .vault-title {
          font-size: 36px;
          font-weight: 300;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .vault-subtitle {
          color: #888;
          font-size: 16px;
          margin-bottom: 30px;
        }

        .vault-controls {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-input {
          width: 100%;
          padding: 15px 20px 15px 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .search-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
        }

        .add-button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .add-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .passwords-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .password-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          backdrop-filter: blur(20px);
          cursor: pointer;
        }

        .password-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          border-radius: 16px 16px 0 0;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .card-icon {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .card-info h3 {
          margin: 0 0 5px 0;
          font-size: 18px;
          font-weight: 500;
        }

        .card-info p {
          margin: 0;
          color: #888;
          font-size: 14px;
        }

        .card-content {
          margin-bottom: 20px;
        }

        .credential-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .credential-row:last-child {
          border-bottom: none;
        }

        .credential-label {
          color: #888;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .credential-value {
          color: white;
          font-size: 16px;
          font-family: 'Monaco', 'Menlo', monospace;
        }

        .credential-actions {
          display: flex;
          gap: 8px;
        }

        .action-button {
          padding: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 12px;
          color: #666;
        }

        .strength-indicator {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .strength-strong {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .strength-medium {
          background: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
        }

        .strength-weak {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .add-password-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .modal-content {
          background: rgba(10, 10, 10, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          width: 90%;
          max-width: 500px;
          backdrop-filter: blur(20px);
        }

        .modal-title {
          font-size: 24px;
          font-weight: 300;
          margin-bottom: 30px;
          text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: #ccc;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-select {
          width: 100%;
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        .modal-actions {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .modal-button {
          flex: 1;
          padding: 15px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-button.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .modal-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .modal-button:hover {
          transform: translateY(-2px);
        }

        .background-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 1;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
          animation: float 20s infinite linear;
        }

        .bg-circle:nth-child(1) {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .bg-circle:nth-child(2) {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 15%;
          animation-delay: -10s;
        }

        .bg-circle:nth-child(3) {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 20%;
          animation-delay: -5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        @media (max-width: 768px) {
          .vault-container {
            padding: 20px;
          }
          
          .vault-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-container {
            min-width: auto;
          }
          
          .passwords-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="background-elements">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
      </div>

      <div className="vault-container">
        <div className="vault-header">
          <h1 className="vault-title">Password Vault</h1>
          <p className="vault-subtitle">Secure storage for all your credentials</p>
        </div>

        <div className="vault-controls">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search passwords..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="add-button" onClick={() => setIsAddingPassword(true)}>
            <Plus size={20} />
            Add Password
          </button>
        </div>

        <div className="passwords-grid">
          {filteredPasswords.map((password) => {
            const Icon = password.icon;
            return (
              <div key={password.id} className="password-card">
                <div 
                  className="card-gradient" 
                  style={{ background: getCategoryGradient(password.category) }}
                ></div>
                
                <div className="card-header">
                  <div className="card-icon">
                    <Icon size={20} />
                  </div>
                  <div className="card-info">
                    <h3>{password.name}</h3>
                    <p>{password.category}</p>
                  </div>
                </div>

                <div className="card-content">
                  <div className="credential-row">
                    <div>
                      <div className="credential-label">Username</div>
                      <div className="credential-value">{password.username}</div>
                    </div>
                    <div className="credential-actions">
                      <button 
                        className="action-button"
                        onClick={() => copyToClipboard(password.username)}
                        title="Copy username"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="credential-row">
                    <div>
                      <div className="credential-label">Password</div>
                      <div className="credential-value">
                        {showPassword[password.id] ? password.password : '••••••••••••'}
                      </div>
                    </div>
                    <div className="credential-actions">
                      <button 
                        className="action-button"
                        onClick={() => togglePasswordVisibility(password.id)}
                        title={showPassword[password.id] ? "Hide password" : "Show password"}
                      >
                        {showPassword[password.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      <button 
                        className="action-button"
                        onClick={() => copyToClipboard(password.password)}
                        title="Copy password"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <span>Last used: {password.lastUsed}</span>
                  <span className={`strength-indicator strength-${password.strength.toLowerCase()}`}>
                    {password.strength}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isAddingPassword && (
        <div className="add-password-modal">
          <div className="modal-content">
            <h2 className="modal-title">Add New Password</h2>
            
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                value={newPassword.name}
                onChange={(e) => setNewPassword({...newPassword, name: e.target.value})}
                placeholder="e.g., Work Email"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Username/Email</label>
              <input
                type="text"
                className="form-input"
                value={newPassword.username}
                onChange={(e) => setNewPassword({...newPassword, username: e.target.value})}
                placeholder="username@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                value={newPassword.password}
                onChange={(e) => setNewPassword({...newPassword, password: e.target.value})}
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={newPassword.category}
                onChange={(e) => setNewPassword({...newPassword, category: e.target.value})}
              >
                <option value="Work">Work</option>
                <option value="Education">Education</option>
                <option value="Personal">Personal</option>
                <option value="Social">Social</option>
              </select>
            </div>

            <div className="modal-actions">
              <button 
                className="modal-button secondary"
                onClick={() => setIsAddingPassword(false)}
              >
                Cancel
              </button>
              <button 
                className="modal-button primary"
                onClick={addPassword}
              >
                Add Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordVault;