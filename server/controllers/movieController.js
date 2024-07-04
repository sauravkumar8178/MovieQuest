import Movie from "../models/movieModel";
import axios from "axios";

export const fetchMovieData = async(req, res) =>{
    try {
        const data = await axios.get('MOVIE_URL');
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

export const getMovies = async(req, res) =>{
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}