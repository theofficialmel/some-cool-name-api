import bcrypt from "bcrypt";
import { response } from "express";
import jwt from "jsonwebtoken";
import { listAllItems, } from "../dynamo";
import router from "../routes/movieRoutes";

export const getAllMovies = async (request, response) => {
  const items = listAllItems("Movie");
  response.json(items);
};

export const getMoviesById = async (request, response) => {
  const items = listAllItems("Movie");
  response.json(items);
};

export const addMovies = async (request, response) => {
  const items = listAllItems("Movie");
  response.json(items);
};

export const updateMoviesById = async (request, response) => {
  const items = listAllItems("Movie");
  response.json(items);
};

export const deleteMoviesById = async (request, response) => {
  const items = listAllItems("Movie");
  response.json(items);
};

export const userLikesMovies = async (request, response) => {
  const items = listAllItems("Movie");
  response.json(items);
};

