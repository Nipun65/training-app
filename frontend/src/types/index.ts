export interface Instructor {
    name: string;
    image: string;
    profession: string;
    qualifications: string[];
    bio: string;
}

export interface Course {
    id: string;
    courseName: string;
    courseImage: string;
    courseUrl: string;
    ratings: number;
    price: number;
    instructor: Instructor;
}

export interface Registration {
    courseId: string;
    userId: string;
    userName: string;
    userEmail: string;
}