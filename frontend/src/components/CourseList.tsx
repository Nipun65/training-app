import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Course } from '../types';

interface CourseListProps {
    disableSubscribe?: boolean;
}

const CourseList: React.FC<CourseListProps> = ({ disableSubscribe = false }) => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/courses`);
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError('Failed to load courses. Please try again later.');
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleSubscribe = async (courseId: string) => {
        try {
            // Show loading state
            const subscribeButton = document.activeElement as HTMLButtonElement;
            const originalText = subscribeButton.textContent;
            subscribeButton.textContent = 'Subscribing...';
            subscribeButton.disabled = true;
            
            // In a real application, you would send user information as well
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/register`, { courseId });
            
            // Store subscription in localStorage
            const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
            if (!subscriptions.includes(courseId)) {
                subscriptions.push(courseId);
                localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
            }
            
            // Show success message
            alert(`Success! ${response.data.message}`);
            
            // Redirect to watch page after successful subscription
            window.location.href = `/watch?courseId=${courseId}`;
        } catch (error) {
            console.error('Error subscribing to course:', error);
            alert('Failed to subscribe to course. Please try again.');
        } finally {
            // Reset button state if user stays on page
            const subscribeButton = document.activeElement as HTMLButtonElement;
            if (subscribeButton) {
                subscribeButton.disabled = false;
                subscribeButton.textContent = 'Subscribe & Start Learning';
            }
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading courses...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-64 text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={course.courseImage}
                            alt={course.courseName}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-800">{course.courseName}</h3>
                                <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                                    <svg className="w-4 h-4 text-yellow-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-800 font-semibold">{course.ratings}</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center mb-4">
                                <img
                                    src={course.instructor.image}
                                    alt={course.instructor.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{course.instructor.name}</p>
                                    <p className="text-sm text-gray-600">{course.instructor.profession}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 mb-6">{course.instructor.bio}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {course.instructor.qualifications.map((qual, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                        {qual}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-2">
                                {disableSubscribe && (
                                    <button
                                        onClick={() => window.location.href = `/watch?courseId=${course.id}&preview=true`}
                                        className="flex-1 py-3 bg-brand-secondary text-white font-semibold rounded-lg hover:bg-brand-secondaryDark transition duration-300 shadow-md hover:shadow-lg"
                                    >
                                        View Details
                                    </button>
                                )}
                                <button
                                    onClick={() => !disableSubscribe && handleSubscribe(course.id)}
                                    disabled={disableSubscribe}
                                    className={`flex-1 py-3 font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg ${
                                        disableSubscribe
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-brand-primary text-white hover:bg-brand-primaryDark'
                                    }`}
                                >
                                    {disableSubscribe ? 'Explore Only' : 'Subscribe & Start Learning'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;