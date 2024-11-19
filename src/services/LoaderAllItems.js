import axios from "axios";

const LoaderAllItems = async (detail, link) => {
  try {
    const res = await axios.get(link);
    console.log(res);
    detail({
      info: res.data.info,
      results: res.data.results,
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
    detail({ info: null, results: [] });
  }
  return detail;
};

export default LoaderAllItems;
