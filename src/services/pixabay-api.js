import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";
const MY_KEY = "21246510-8cf114b80fb53559900540c62";

const imagesApi = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((r) => console.log(r));
};
// const    imagesApi = async () => {
//     try {
//     const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;
//       const responce = await fetch(url);
//       const photos = await responce.json();
//     //   this.incrementPage();
//       return photos;
//     } catch (error) {
//       throw error;
//       };
//   }

export default imagesApi;
