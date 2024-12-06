import client from "./client";
import { API_ROUTES } from '../utils/constants';

const getCaptchas = (langcode) => client.get(`${API_ROUTES.PROJET}/all&lang=${langcode}`);
const getCaptcha = (id, langcode) => client.get(`${API_ROUTES.PROJET}/info/${id}&lang=${langcode}`);
const postCaptcha = (data) => client.post(API_ROUTES.PROJET, data);
const putCaptcha = (id, data) => client.put(`${API_ROUTES.PROJET}/${id}`, data);
const deleteCaptcha = (id) => client.delete(`${API_ROUTES.PROJET}/${id}`);

const exports = {
  getCaptchas,
  getCaptcha,
  postCaptcha,
  putCaptcha,
  deleteCaptcha
};

export default exports;