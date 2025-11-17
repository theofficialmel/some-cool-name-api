import express from "express";
import {
  getAllMovies,
  getMoviesById,
  addMovies,
  updateMoviesById,
  deleteMoviesById,
  userLikesMovies,
} from "../controllers/moviesControllers.js";
import { authenticate, checkApiKey } from "../middleware/middleware.js";
import jwt from "jsonwebtoken";



//create router

const router = express.Router(); 

/** movie types
 * @typedef {object} Movie
 * @property {number} id - Movie id
 * @property {string} title - Movie title
 * @property {string} url - Movie url
 * @property {number} userId - ID of the user
 */

//routes

//post movies
router.post("/" , authenticate, addMovies);

router.put("/:id" , authenticate, updateMoviesById);

router.delete("/:id" , authenticate, deleteMoviesById);

router.post("/:id/like" , authenticate, userLikesMovies);

//get movies

//get all
router.get("/", getAllMovies);

router.get("/:id", getMoviesById);







export default router;


