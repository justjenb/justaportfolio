import axios from 'axios';

const getUser = () => {
  return axios.get('https://api.github.com/users/justjenb');
};

const getRepos = () => {
  return axios.get(`https://api.github.com/users/justjenb/repos`);
};

export default {
  getUser,
  getRepos,
};
