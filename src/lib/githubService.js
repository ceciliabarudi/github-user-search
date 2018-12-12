'Use strict';
import axios from 'axios';

class GithubService {
  constructor(){
    this.apiInstance = axios.create({
      baseURL: 'https://api.github.com/search/',
    })
  }

  getUsersBySearchTerm(username) {
    return this.apiInstance.get(`users?q=${username}+type:user+in:login`)
    .then((response) => {
      return response.data
    })
  }

}

const githubService = new GithubService();
export default githubService;