import axios from "axios";
import { Genre, optionsMovie } from "../models/Movie";

const base_url: string = "https://api.themoviedb.org/3/genre/movie/list";

export const getGenre = async (id: string) => {
  const options: optionsMovie = {
    method: "GET",
    url: base_url,
    params: {
      api_key: String(process.env.REACT_API_KEY),
      language: "en-US",
    },
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        return response?.data as Genre[];
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
};
