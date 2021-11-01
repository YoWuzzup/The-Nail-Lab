import axios from "axios";

const url = `http://localhost:5000/`;

export const fetchService = async (sort) => {
  try {
    let query;

    if (sort) {
      let newSort = sort.includes(" ") ? sort.split(" ").join("") : sort;
      query = `?sort=${newSort}`;
    } else {
      query = "";
    }

    return axios.get(`${url}treatments${query}`);
  } catch (er) {
    console.log(er);
  }
};

export const fetchSingleService = async (name) => {
  try {
    return axios.get(`${url}treatments/${name}`);
  } catch (error) {
    console.log(`There's no such post with name: ${name}.`);
  }
};
