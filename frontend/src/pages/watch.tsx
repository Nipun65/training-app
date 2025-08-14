import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import VideoPlayer from '../components/VideoPlayer';
import { Course } from '../types';
import axios from 'axios';

const WatchPage = () => {
    const router = useRouter();
    const { courseId, preview } = router.query;
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourseAndVideo = async () => {
            if (courseId) {
                try {
                    // Check if user is accessing preview content
                    const isPreview = preview === 'true';
                    
                    // If not preview, check if user is subscribed to the course
                    if (!isPreview) {
                        const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
                        if (!subscriptions.includes(courseId)) {
                            setError('You need to subscribe to this course to view its content.');
                            setLoading(false);
                            return;
                        }
                    }
                    
                    // Fetch specific course details using the new endpoint
                    const courseResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/courses/${courseId}`);
                    const course = courseResponse.data;
                    
                    setCourse(course);
                    
                    // Fetch video URL
                    const videoResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/courses/${courseId}/video`);
                    setVideoUrl(videoResponse.data.videoUrl);
                } catch (error: any) {
                    console.error('Error fetching course:', error);
                    if (error.response && error.response.status === 404) {
                        setError('Course not found');
                    } else {
                        setError('Failed to load course. Please try again later.');
                    }
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchCourseAndVideo();
    }, [courseId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-xl text-gray-600">Loading course content...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="text-xl text-red-500 mb-4">{error}</div>
                    <button
                        onClick={() => router.push('/courses')}
                        className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primaryDark transition duration-300"
                    >
                        Go to Courses Page
                    </button>
                </div>
            </div>
        );
    }

    if (!course || !videoUrl) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-xl text-gray-600">Course not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <button 
                        onClick={() => router.push('/courses')}
                        className="flex items-center text-brand-primary hover:text-brand-primaryDark transition"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Courses
                    </button>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.courseName}</h1>
                        <div className="flex items-center mb-4">
                            <img 
                                src={course.instructor.image} 
                                alt={course.instructor.name} 
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800 text-lg">{course.instructor.name}</p>
                                <p className="text-gray-600">{course.instructor.profession}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        {videoUrl ? (
                            <div className={preview === 'true' ? 'relative' : ''}>
                                <VideoPlayer videoUrl={videoUrl} />
                                {preview === 'true' && (
                                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg">
                                        <div className="text-center p-4">
                                            <div className="text-white text-2xl font-bold mb-4">Preview Not Available</div>
                                            <p className="text-white font-semibold mb-6">Subscribe to this course to access the full video content.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
                                <div className="text-gray-500">Video not available</div>
                            </div>
                        )}
                    </div>
                    
                    <div className="p-6 border-t border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">About this course</h2>
                        <p className="text-gray-600 mb-6">{course.instructor.bio}</p>
                        
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructor Qualifications</h3>
                        <div className="flex flex-wrap gap-2">
                            {course.instructor.qualifications.map((qual, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {qual}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchPage;