import express from 'express';
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from '../controllers/appointmentController.js';
import { isAdminAuth, isPatientAuth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/new',isPatientAuth,postAppointment);
router.get('/getAll',isAdminAuth,getAllAppointments);
router.put('/update/:id',isAdminAuth,updateAppointmentStatus);
router.delete('/delete/:id',isAdminAuth,deleteAppointment);

export default router;