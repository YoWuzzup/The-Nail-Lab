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

// fetching technicians
export const fetchTechnicians = async () => {
  try {
    return axios.get(`${url}technicians`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleTechnician = async (id) => {
  try {
    return axios.get(`${url}technicians/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const postUserConfirmed = async (data) => {
  try {
    return axios.post(`${url}email/confirmation/${data.id}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchBookings = async (data) => {
  try {
    return axios.get(`${url}booking?staff_fullname=${data}`);
  } catch (error) {
    console.log(error);
  }
};

export const userRegistration = async (data) => {
  try {
    return axios.post(`${url}users/register`, data);
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (data) => {
  return axios
    .post(`${url}users/login`, data, {
      withCredentials: true,
    })
    .catch((error) => {
      return error.response;
    });
};

export const userLogOut = async () => {
  try {
    return axios.post(`${url}users/logout`, null, { withCredentials: true });
  } catch (error) {
    console.log(error);
  }
};

export const sendBookingData = async (data) => {
  try {
    return axios.post(`${url}booking`, data);
  } catch (error) {
    console.log(error);
  }
};
