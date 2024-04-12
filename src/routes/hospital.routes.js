import {Router} from 'express';
import{HospitalRegistration} from '../controllers/hospital.controller.js'
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route('/register').post(
    upload.fields([
        {

        }
    ]),

    HospitalRegistration);

export default router ;