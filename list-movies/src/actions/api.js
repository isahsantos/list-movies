import axios from "axios";

const urlBase = "https://api.themoviedb.org/3/movie/550?api_key=1797f4a6ed52a60b31009ea405781e43";

export async function obterFilmes() {
  const response = await axios.get(urlBase);
  const results = JSON.stringify(response.data);

  return {
    resultados: results,
  };
}