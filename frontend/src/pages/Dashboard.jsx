import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../services/api';

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const [masterToken, setMasterToken] = useState('');
  const [appName, setAppName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const generateToken = async () => {
    if (!appName.trim()) {
      setError('Please enter an application name');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await authAPI.generateMasterToken(appName);
      setMasterToken(response.data.token);
      setSuccess(`Token generated for ${appName}! Valid for 1 hour.`);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate token');
    } finally {
      setLoading(false);
    }
  };

  const copyToken = () => {
    navigator.clipboard.writeText(masterToken);
    setSuccess('Token copied to clipboard!');
  };

  const quickLinks = [
    {
      path: '/products',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Browse Products',
      description: 'Explore our gaming arsenal.',
      color: 'cyan'
    },
    {
      path: '/about',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'About SENC',
      description: 'Learn about our mission.',
      color: 'purple'
    },
    {
      path: '/contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Get Support',
      description: 'Reach out to our team.',
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background effects */}
      <div className="fixed top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Welcome Section */}
        <div className="glass rounded-2xl p-8 border border-white/5 mb-8 relative overflow-hidden animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mr-4">
                  <span className="font-gaming text-2xl font-bold text-white">
                    {user?.firstName?.[0] || user?.email?.[0]?.toUpperCase() || 'P'}
                  </span>
                </div>
                <div>
                  <h1 className="font-gaming text-3xl font-bold text-white">
                    Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{user?.firstName || 'Player'}</span>!
                  </h1>
                  <p className="text-gray-400">
                    Ready to dominate? Access all SENC products from here.
                  </p>
                </div>
              </div>
            </div>
            
            {isAdmin && (
              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-lg text-yellow-400 font-gaming text-sm uppercase tracking-wider">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Admin
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="glass rounded-2xl p-8 border border-white/5 animate-slide-up delay-200">
            <h2 className="font-gaming text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              Profile Information
            </h2>
            
            <div className="space-y-6">
              {[
                { label: 'Gamer Tag', value: `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'Not set' },
                { label: 'Email', value: user?.email },
                { label: 'Account Type', value: user?.role, badge: true }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <span className="text-gray-400 text-sm uppercase tracking-wider">{item.label}</span>
                  {item.badge ? (
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg text-sm capitalize font-medium">
                      {item.value}
                    </span>
                  ) : (
                    <span className="text-white font-medium">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
              {[
                { value: '0', label: 'Products' },
                { value: 'Active', label: 'Status' },
                { value: '2024', label: 'Joined' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-gaming text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Master Login Token Generator */}
          <div className="glass rounded-2xl p-8 border border-white/5 animate-slide-up delay-300">
            <h2 className="font-gaming text-xl font-bold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
              Master Login Token
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Generate a secure token to authenticate with other SENC applications seamlessly.
            </p>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-4 flex items-center animate-scale-in">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl mb-4 flex items-center animate-scale-in">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{success}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="appName" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Application Name
                </label>
                <input
                  type="text"
                  id="appName"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 transition-all duration-300"
                  placeholder="e.g., SENC Analytics"
                />
              </div>

              <button
                onClick={generateToken}
                disabled={loading}
                className="cyber-button w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-gaming font-semibold text-white uppercase tracking-wider hover:shadow-purple-500/25 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Generate Token
                  </>
                )}
              </button>

              {masterToken && (
                <div className="mt-6 p-4 bg-[#0a0a0f] rounded-xl border border-cyan-500/30 animate-scale-in">
                  <label className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                    Your Token
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={masterToken}
                      readOnly
                      className="flex-1 px-4 py-3 bg-[#12121a] border border-white/10 rounded-l-lg text-cyan-400 text-sm font-mono truncate"
                    />
                    <button
                      onClick={copyToken}
                      className="cyber-button px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 rounded-r-lg text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Token expires in 1 hour. Keep it secure.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 animate-slide-up delay-400">
          <h2 className="font-gaming text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></span>
            Quick Access
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group glass card-hover rounded-2xl p-6 border border-white/5"
              >
                <div className={`w-14 h-14 rounded-xl bg-${link.color}-500/10 border border-${link.color}-500/30 flex items-center justify-center mb-4 text-${link.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="font-gaming text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
                
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Go to page</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
