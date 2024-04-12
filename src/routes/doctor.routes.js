import {Router} from 'express';
import{DoctorRegistration} from '../controllers/doctor.controller.js'
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route('/register').post(
    upload.fields([
        {

        }
    ]),

    DoctorRegistration);

export default router ;