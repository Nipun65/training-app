import { Course } from '../models/course';

class CoursesController {
    private courses: Course[] = [
        {
            id: "1",
            courseName: "Mastering JavaScript: From Basics to Advanced",
            courseImage: "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg?rect=1,0,999,667&w=800&h=534&fit=clip&auto=format",
            courseUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            ratings: 4.8,
            instructor: {
                name: "John Doe",
                image: "https://cdn.pixabay.com/photo/2024/03/29/17/55/ai-generated-8663328_960_720.png",
                profession: "Senior Software Engineer at Google",
                qualifications: [
                    "B.Sc. in Computer Science",
                    "Certified JavaScript Developer",
                    "10+ Years of Industry Experience"
                ],
                bio: "John has been working in the software industry for over a decade, specializing in JavaScript frameworks and scalable web architectures. He has trained thousands of students worldwide."
            }
        },
        {
            id: "2",
            courseName: "Full-Stack Web Development Bootcamp",
            courseImage: "https://www.cdnsol.com/images/service/web-development/web-development.png",
            courseUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            ratings: 4.7,
            instructor: {
                name: "Sarah Lee",
                image: "https://s39613.pcdn.co/wp-content/uploads/2019/08/PEACE-in-the-classroom.jpg",                
                profession: "Full-Stack Developer & Tech Educator",
                qualifications: [
                    "M.Sc. in Information Technology",
                    "AWS Certified Solutions Architect",
                    "8+ Years in Web Development"
                ],
                bio: "Sarah is passionate about teaching technology and has helped hundreds of students transition into tech careers. She focuses on real-world projects and industry best practices."
            }
        },
        {
            id: "3",
            courseName: "Data Science & Machine Learning with Python",
            courseImage: "https://www.cdnsol.com/images/service/web-development/web-development.png",
            courseUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            ratings: 4.9,
            instructor: {
                name: "Michael Chen",
                image: "https://strictlypositiveteaching.org/wp-content/uploads/2018/05/img_0496.jpg",
                profession: "Lead Data Scientist at Microsoft",
                qualifications: [
                    "Ph.D. in Computer Science (AI Specialization)",
                    "Kaggle Grandmaster",
                    "Author of 'Practical Machine Learning'"
                ],
                bio: "Michael has extensive experience building AI systems for top tech companies. His courses blend theory with practical coding exercises to help students excel."
            }
        }
    ];

    constructor() {
        this.getCourses = this.getCourses.bind(this);
        this.getCourseById = this.getCourseById.bind(this);
        this.registerCourse = this.registerCourse.bind(this);
        this.getCourseVideo = this.getCourseVideo.bind(this);
    }

    public getCourses(req: any, res: any) {
        res.status(200).json(this.courses);
    }

    public getCourseById(req: any, res: any) {
        const { id } = req.params;
        const course = this.courses.find(c => c.id === id);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    }

    public registerCourse(req: any, res: any) {
        const { courseId } = req.body;
        // Logic to register the user for the course
        res.status(201).json({ message: `Registered for course ID: ${courseId}` });
    }

    public getCourseVideo(req: any, res: any) {
        const { id } = req.params;
        const course = this.courses.find(c => c.id == id);
        if (course) {
            // For now, we'll return a placeholder video URL
            // In a real application, this would be the actual video URL
            res.json({ videoUrl: course.courseUrl });
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    }
}

export default CoursesController;