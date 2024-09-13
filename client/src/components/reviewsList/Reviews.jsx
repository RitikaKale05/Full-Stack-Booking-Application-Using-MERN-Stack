import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './reviews.css'; // Add your CSS styling

const Reviews = ({ hotelId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/reviews/hotel/${hotelId}`);
        setReviews(response.data);
      } catch (error) {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [hotelId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="review">
            <h3>{review.userId.name}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
