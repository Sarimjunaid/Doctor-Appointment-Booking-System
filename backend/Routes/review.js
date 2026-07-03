import express from 'express';
import { authenticate, restrict } from '../auth/verifyToken.js';
import { createReview, getAllReviews } from '../Controllers/reviewController.js';
import { get } from 'mongoose';

const router = express.Router({ mergeParams: true });

router.route('/')
.get(getAllReviews)
.post(authenticate, restrict(['patient']), createReview);

export default router;