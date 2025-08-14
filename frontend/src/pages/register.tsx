import React, { useState } from 'react';

const tabs = [
    { key: 'register', label: 'Register', icon: '📝' },
    { key: 'login', label: 'Login', icon: '🔑' },
    { key: 'course', label: 'Register Course', icon: '📚' },
];

const AuthTabs = () => {
    const [activeTab, setActiveTab] = useState<'register' | 'login' | 'course'>('register');

    return (
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
            <div className="flex justify-center gap-4 mb-8">
                {tabs.map(tab => (
                    <button
                        key={tab.key}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200
                            ${activeTab === tab.key
                                ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-blue-500 hover:bg-blue-100'
                            }`}
                        onClick={() => setActiveTab(tab.key as any)}
                    >
                        <span className="text-xl">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
            <div className="w-full max-w-2xl">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6 drop-shadow-lg">
                    Training App Portal
                </h1>
                <p className="text-center text-blue-900 mb-10">
                    Welcome! Register, login, or enroll in a course to get started.
                </p>
                <AuthTabs />
            </div>
        </div>
    );
};

export default RegisterPage;