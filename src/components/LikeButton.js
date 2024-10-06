// components/LikeButton.js
import React, { useState, useEffect, useContext } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify'; // For user notifications

const LikeButton = ({ bookId }) => {
  const { isAuthenticated } = useContext(AuthContext); // Authentication status
  const [isLiked, setIsLiked] = useState(false); // Wishlist status
  const [loading, setLoading] = useState(false); // Loading state
  const apiUrl = process.env.REACT_APP_API_URL; // API base URL
  const token = localStorage.getItem("token"); // Authentication token
  const userId = localStorage.getItem("userId"); // User ID

  // Fetch wishlist status on component mount
  useEffect(() => {
    const fetchWishlistStatus = async () => {
      if (isAuthenticated && userId && bookId) {
        try {
          const response = await axios.get(`${apiUrl}/api/wishlist/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Authorization header
            },
          });

          // Determine if the book is in the wishlist
          const isBookInWishlist = response.data.products.some(
            (item) => item.book === bookId || (item.book._id && item.book._id === bookId)
          );

          setIsLiked(isBookInWishlist);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
          toast.error("Failed to load wishlist.");
        }
      }
    };

    fetchWishlistStatus();
  }, [apiUrl, isAuthenticated, token, userId, bookId]);

  // Handle Like/Unlike toggle
  const handleLikeToggle = async () => {
    if (!isAuthenticated) {
      toast.info("Please log in to modify your wishlist.");
      return;
    }

    setLoading(true); // Start loading
    try {
      if (!isLiked) {
        // Add to wishlist
        await axios.post(
          `${apiUrl}/api/wishlist/add`,
          { bookId },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Authorization header
              'Content-Type': 'application/json', // Content type
            },
          }
        );
        setIsLiked(true); // Update state
        toast.success("Book added to wishlist!");
      } else {
        // Remove from wishlist
        await axios.post(
          `${apiUrl}/api/wishlist/remove`,
          { bookId },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Authorization header
              'Content-Type': 'application/json', // Content type
            },
          }
        );
        setIsLiked(false); // Update state
        toast.success("Book removed from wishlist!");
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      toast.error("Failed to update wishlist.");
    } finally {
      setLoading(false); // End loading
    }
  };

  // Do not render the button if the user is not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <button
      onClick={handleLikeToggle}
      className={`p-2 m-1 cursor-pointer transition-colors duration-300 ${
        isLiked ? 'text-red-500' : 'text-gray-500'
      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Styling
      aria-label="Like Button"
      disabled={loading} // Disable during loading
    >
      {isLiked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
    </button>
  );
};

export default LikeButton;
