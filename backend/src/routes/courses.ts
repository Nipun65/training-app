import { Router } from 'express';
import CoursesController from '../controllers/coursesController';

const router = Router();
const coursesController = new CoursesController();

router.get('/courses', coursesController.getCourses);
router.get('/courses/:id', coursesController.getCourseById);
router.post('/register', coursesController.registerCourse);
router.get('/courses/:id/video', coursesController.getCourseVideo);

export default function setRoutes(app:any) {
    app.use('/api', router);
}