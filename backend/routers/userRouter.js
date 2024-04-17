import express from 'express';
import { addNewDoctor, adminRegister, getAllDoctors, getUserDeatils, login, logoutAdmin, logoutPatient, patientRegister } from '../controllers/userController.js';
import { isAdminAuth, isPatientAuth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/patient/register',patientRegister);
router.post('/login',login);
router.post('/admin/new',isAdminAuth,adminRegister);
router.get('/doctors',getAllDoctors);
router.get('/admin/me',isAdminAuth,getUserDeatils);
router.get('/patient/me',isPatientAuth,getUserDeatils);

router.get('/admin/logout',isAdminAuth,logoutAdmin);
router.get('/patient/logout',isPatientAuth,logoutPatient);

router.post('/doctor/addNew',isAdminAuth,addNewDoctor);

export default router;