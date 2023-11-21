import axios from './axios';

export const getBirthdaysRequest = () => axios.get("/birthdays");

export const getBirthdayRequest = (id) => axios.get(`/birthdays/${id}`);

export const createBirthdayRequest = (birthday) => axios.post("/birthdays", birthday);

export const updateBirthdayRequest = (id, birthday) => axios.put(`/birthdays/${id}`, birthday);

export const deleteBirthdayRequest = (id) => axios.delete(`/birthdays/${id}`);