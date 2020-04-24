import axios from "axios";


const KEY = 'AIzaSyCVY1CzP_ExdcagpWvEXJjaW9rHjJrGUEw';

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
