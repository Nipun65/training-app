import React, { useState } from 'react';

const AuthTabs = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    
    // Login form state
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginEmailError, setLoginEmailError] = useState('');
    const [loginPasswordError, setLoginPasswordError] = useState('');
    
    // Signup form state
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupNameError, setSignupNameError] = useState('');
    const [signupEmailError, setSignupEmailError] = useState('');
    const [signupPasswordError, setSignupPasswordError] = useState('');
    
    // Validation functions
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const validatePassword = (password: string) => {
        // Password should be at least 6 characters
        return password.length >= 6;
    };
    
    const validateLoginForm = () => {
        let isValid = true;
        
        // Validate email
        if (!loginEmail) {
            setLoginEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(loginEmail)) {
            setLoginEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setLoginEmailError('');
        }
        
        // Validate password
        if (!loginPassword) {
            setLoginPasswordError('Password is required');
            isValid = false;
        } else if (!validatePassword(loginPassword)) {
            setLoginPasswordError('Password must be at least 6 characters');
            isValid = false;
        } else {
            setLoginPasswordError('');
        }
        
        return isValid;
    };
    
    const validateSignupForm = () => {
        let isValid = true;
        
        // Validate name
        if (!signupName) {
            setSignupNameError('Name is required');
            isValid = false;
        } else {
            setSignupNameError('');
        }
        
        // Validate email
        if (!signupEmail) {
            setSignupEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(signupEmail)) {
            setSignupEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setSignupEmailError('');
        }
        
        // Validate password
        if (!signupPassword) {
            setSignupPasswordError('Password is required');
            isValid = false;
        } else if (!validatePassword(signupPassword)) {
            setSignupPasswordError('Password must be at least 6 characters');
            isValid = false;
        } else {
            setSignupPasswordError('');
        }
        
        return isValid;
    };

    return (
        <div className='flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-xl border border-gray-100'>
            <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                    className={`flex-1 py-3 px-4 rounded-md text-center font-semibold transition-all duration-300 ${
                        activeTab === 'login'
                            ? 'bg-white text-brand-primary shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('login')}
                >
                    Login
                </button>
                <button
                    className={`flex-1 py-3 px-4 rounded-md text-center font-semibold transition-all duration-300 ${
                        activeTab === 'signup'
                            ? 'bg-white text-brand-secondary shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('signup')}
                >
                    Sign Up
                </button>
            </div>

            {activeTab === 'login' && (
                <div className="space-y-6 animate-fadeIn">
                    <h2 className='text-3xl font-bold text-gray-800 text-center'>Welcome Back</h2>
                    <p className="text-gray-600 text-center">Sign in to continue your learning journey</p>
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        // Validate form before submitting
                        if (validateLoginForm()) {
                            // Bypass login and redirect to courses page
                            window.location.href = '/courses';
                        }
                    }}>
                        <div>
                            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="login-email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={loginEmail}
                                onChange={(e) => {
                                    setLoginEmail(e.target.value);
                                    setLoginEmailError('');
                                }}
                                className={`w-full px-4 py-3 border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition ${
                                    loginEmailError ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {loginEmailError && <p className="mt-1 text-sm text-red-500">{loginEmailError}</p>}
                        </div>
                        <div>
                            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="login-password"
                                type="password"
                                placeholder="••••••••"
                                value={loginPassword}
                                onChange={(e) => {
                                    setLoginPassword(e.target.value);
                                    setLoginPasswordError('');
                                }}
                                className={`w-full px-4 py-3 border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition ${
                                    loginPasswordError ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {loginPasswordError && <p className="mt-1 text-sm text-red-500">{loginPasswordError}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-brand-primary hover:text-brand-primaryDark transition">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-brand-primary text-white font-semibold hover:bg-brand-primaryDark transition duration-300 shadow-md hover:shadow-lg"
                        >
                            Login
                        </button>
                    </form>
                </div>
            )}

            {activeTab === 'signup' && (
                <div className="space-y-6 animate-fadeIn">
                    <h2 className='text-3xl font-bold text-gray-800 text-center'>Create Account</h2>
                    <p className="text-gray-600 text-center">Join our learning community today</p>
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        // Validate form before submitting
                        if (validateSignupForm()) {
                            // In a real app, you would submit the form data to a server
                            alert('Account created successfully!');
                            // Reset form fields
                            setSignupName('');
                            setSignupEmail('');
                            setSignupPassword('');
                        }
                    }}>
                        <div>
                            <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                id="signup-name"
                                type="text"
                                placeholder="John Doe"
                                value={signupName}
                                onChange={(e) => {
                                    setSignupName(e.target.value);
                                    setSignupNameError('');
                                }}
                                className={`w-full px-4 py-3 border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition ${
                                    signupNameError ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {signupNameError && <p className="mt-1 text-sm text-red-500">{signupNameError}</p>}
                        </div>
                        <div>
                            <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="signup-email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={signupEmail}
                                onChange={(e) => {
                                    setSignupEmail(e.target.value);
                                    setSignupEmailError('');
                                }}
                                className={`w-full px-4 py-3 border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition ${
                                    signupEmailError ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {signupEmailError && <p className="mt-1 text-sm text-red-500">{signupEmailError}</p>}
                        </div>
                        <div>
                            <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="signup-password"
                                type="password"
                                placeholder="••••••••"
                                value={signupPassword}
                                onChange={(e) => {
                                    setSignupPassword(e.target.value);
                                    setSignupPasswordError('');
                                }}
                                className={`w-full px-4 py-3 border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition ${
                                    signupPasswordError ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {signupPasswordError && <p className="mt-1 text-sm text-red-500">{signupPasswordError}</p>}
                        </div>
                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                className="h-4 w-4 text-brand-secondary focus:ring-brand-secondary border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I agree to the <a href="#" className="text-brand-secondary hover:text-brand-secondaryDark">Terms</a> and <a href="#" className="text-brand-secondary hover:text-brand-secondaryDark">Privacy Policy</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-brand-secondary text-white font-semibold hover:bg-brand-secondaryDark transition duration-300 shadow-md hover:shadow-lg"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-primaryDark/5 p-4">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-8">
                {/* Left: Welcome Text */}
                <div className="flex flex-col justify-center w-full lg:w-2/5 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        Welcome to <a href="/courses" className="text-brand-primary hover:text-brand-primaryDark transition">SkillBoost</a> <a href="/courses" className="text-brand-secondary hover:text-brand-secondaryDark transition">Academy</a>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                        Enhance your skills with our comprehensive courses and track your progress as you learn.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="/explored-courses" className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primaryDark transition duration-300 text-center">
                            Explore Courses
                        </a>
                        <a href="/learn-more" className="px-6 py-3 bg-white text-brand-primary border border-brand-primary font-semibold rounded-lg shadow-sm hover:bg-brand-primary/5 transition duration-300 text-center">
                            Learn More
                        </a>
                    </div>
                </div>
                
                {/* Right: Auth */}
                <div className="w-full lg:w-3/5">
                    <AuthTabs />
                </div>
            </div>
        </div>
    );
};

export default Home;