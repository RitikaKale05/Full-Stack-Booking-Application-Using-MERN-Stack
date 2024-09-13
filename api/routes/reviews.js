// api/routes/reviews.js

import express from "express";
import { createReview, getReviewsByHotel } from "../controllers/review.js"; // Import controller functions

const router = express.Router();

// Route for creating a new review
router.post("/", createReview);

// Route for getting reviews by hotel ID
router.get("/hotel/:hotelId", getReviewsByHotel);

export default router; // Export the router as the default export
