// api/controllers/review.js

import { Review } from "../models/Review.js"; // Use named import for the Review model

// Controller for creating a review
export const createReview = async (req, res) => {
  try {
    const { userId, hotelId, rating, comment } = req.body;
    const review = new Review({ userId, hotelId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for getting reviews by hotel ID
export const getReviewsByHotel = async (req, res) => {
  try {
    const reviews = await Review.find({ hotelId: req.params.hotelId }).populate("userId");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
