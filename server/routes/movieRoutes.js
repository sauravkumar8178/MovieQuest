import express from 'express';
import { fetchMovieData, getMovies } from '../controllers/movieController';

const router = express.router();

router.get('/fetch', fetchMovieData);
router.get('/', getMovies);

export default router;