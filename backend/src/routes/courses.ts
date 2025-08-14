import { Router } from 'express';
import CoursesController from '../controllers/coursesController';

const router = Router();
const coursesController = new CoursesController();

router.get('/courses', coursesController.getCourses.bind(coursesController));
router.get('/courses/:id', coursesController.getCourseById.bind(coursesController));
router.post('/register', coursesController.registerCourse.bind(coursesController));
router.get('/courses/:id/video', coursesController.getCourseVideo.bind(coursesController));

export default function setRoutes(app:any) {
    app.use('/api', router);
}