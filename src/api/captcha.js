import client from "./client";
import { API_ROUTES } from '../utils/constants';

const getCaptcha = (id, langcode) => client.get(`${API_ROUTES.CAPTCHA}/info/${id}&lang=${langcode}`);
const postCaptcha = (data) => client.post(API_ROUTES.CAPTCHA, data);

const exports = {
  getCaptcha,
  postCaptcha,
};

export default exports;