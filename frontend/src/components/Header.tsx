import React, { useState, useEffect } from 'react';

interface HeaderProps {
  username: string;
  registeredCourses: number;
  disableAvatar?: boolean;
}

const Header: React.FC<HeaderProps> = ({ username, registeredCourses, disableAvatar = false }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state on initial load
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    // Clear login state from localStorage
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    // Redirect to the home page
    window.location.href = '/';
  };

  const handleUserMenuClick = () => {
    // Set login state in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Update local state to reflect login
    setIsLoggedIn(true);
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1
            className="text-xl font-bold text-brand-primary cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              // Only redirect if user is logged in
              if (isLoggedIn) {
                window.location.href = '/courses';
              }
            }}
          >
            SkillBoost Academy
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Registered Courses:</span>
            <span className="font-semibold text-brand-primary">{registeredCourses}</span>
          </div>
          
          <div className="relative">
            <button
              className={`flex items-center space-x-2 focus:outline-none ${disableAvatar ? 'cursor-default' : ''}`}
              onClick={!disableAvatar ? handleUserMenuClick : undefined}
              disabled={disableAvatar}
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-semibold">
                {username.charAt(0).toUpperCase()}
              </div>
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{username}</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
                {isLoggedIn && (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;