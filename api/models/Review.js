// api/models/Review.js

import mongoose from 'mongoose';

// Define the review schema
const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, { timestamps: true });

// Create the Review model
export const Review = mongoose.model('Review', reviewSchema);
