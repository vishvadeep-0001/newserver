import express from "express";
import {
  addLecture,
  courseDelete,
  createCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated, authorizeSubscribers } from "../middlewares/auth.js";

const router = express.Router();

router.route("/courses").get(getAllCourses);

router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

// Get course lectures and // Add lectures
router
  .route("/course/:id")
  .get(isAuthenticated, authorizeSubscribers, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizeAdmin, courseDelete);



router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture)

export default router;
