const mongoose = require('mongoose');
const { string, number } = require('zod');

const movieSchema = mongoose.schema({
    title: {type: string, require: true},
    description: string,
    release_date: string,
    rating: number
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;