import CourseList from '../components/CourseList';

const CoursesPage = () => {
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