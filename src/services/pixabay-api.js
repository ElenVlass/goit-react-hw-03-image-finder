import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const MY_KEY = "21246510-8cf114b80fb53559900540c62";

export const getImages = ({
  searchQuery = "",
  currentPage = 1,
  perPage = 12,
}) =>
  axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then((responce) => responce.data.hits);
