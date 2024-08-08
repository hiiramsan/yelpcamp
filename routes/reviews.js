const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../utils/middleware.js');
const reviews = require('../controllers/reviews.js');

router.post('/',isLoggedIn, validateReview, catchAsync(reviews.createReview));
 
router.delete('/:reviewId',isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;
