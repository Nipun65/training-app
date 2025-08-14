import React, { useState } from 'react';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [courseId, setCourseId] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [courseIdError, setCourseIdError] = useState('');

    // Validation functions
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let isValid = true;

        // Validate name
        if (!name) {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        // Validate email
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Validate courseId
        if (!courseId) {
            setCourseIdError('Course ID is required');
            isValid = false;
        } else {
            setCourseIdError('');
        }

        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate form before submitting
        if (!validateForm()) {
            return;
        }
        
        const registrationData = { name, email, courseId };

        try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            if (response.ok) {
                alert('Registration successful!');
                // Reset form fields
                setName('');
                setEmail('');
                setCourseId('');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="John Doe"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                />
            </div>
            <div>
                <label htmlFor="courseId" className="block text-sm font-medium text-gray-700 mb-1">Course ID</label>
                <input
                    type="text"
                    id="courseId"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Enter course ID"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-brand-primary text-white font-semibold hover:bg-brand-primaryDark transition duration-300 shadow-md hover:shadow-lg"
            >
                Register for Course
            </button>
        </form>
    );
};

export default RegistrationForm;