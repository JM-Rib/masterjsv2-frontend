import client from "./client";
import { API_ROUTES } from '../utils/constants';

const postEmail = (data) => client.post(API_ROUTES.EMAIL, data);

const exports = {
  postEmail,
};

export default exports;