import axios from 'axios';

export const fetchReviews = async () => {
  return axios.get('https://portfolio-js.b.goit.study/api/reviews');
};
