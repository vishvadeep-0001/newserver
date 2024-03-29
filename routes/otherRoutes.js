import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherController.js";

const router = express.Router();


// Contact Form 
router.route("/contact").post(contact);

// Request form
router.route("/courserequest").post(courseRequest);

// Get Admin Dashboard stats
router.route("/admin/stats").get(isAuthenticated, authorizeAdmin, getDashboardStats);


export default router;
 