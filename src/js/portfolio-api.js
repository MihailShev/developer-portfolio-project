import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api-docs';

export const postQueryComment = (email, comment) => {
  return axios.post('/requests ', {
    "email": email,
    "comment": comment
  });
}