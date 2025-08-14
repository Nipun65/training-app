
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CourseList from '../components/CourseList';

const CoursesPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (client-side only)
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setLoading(false);
    
    // If not logged in, redirect to login page
    if (typeof window !== 'undefined' && !loggedIn) {
      router.push('/');
    }
  }, [router]);

  // Listen for storage changes (in case login state changes in another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      
      // If not logged in, redirect to login page
      if (typeof window !== 'undefined' && !loggedIn) {
        router.push('/');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [router]);

  // If still loading, show loading indicator
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  // If not logged in, don't render the page content
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of courses designed to enhance your skills and advance your career.
          </p>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export default CoursesPage;