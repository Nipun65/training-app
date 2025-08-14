import CourseList from '../components/CourseList';

const ExploredCoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Browse our comprehensive collection of courses. Subscribe to access full content.
          </p>
          <div className="mb-8">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primaryDark transition duration-300"
            >
              Back to Login
            </a>
          </div>
        </div>
        <CourseList disableSubscribe={true} />
      </div>
    </div>
  );
};

export default ExploredCoursesPage;