import {Router} from 'express';
import{PatientRegistration} from '../controllers/patient.controller.js'
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route('/patientregistration').post(
    upload.fields([
        {
            name: 'Report',
            maxCount: 1
        }
    ]),

    PatientRegistration);

export default router ;