import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (type) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest"
      );

      if (type === 1) {
        const filteredData = response.data.data?.filter(
          (state) =>
            state["Slug State"] !== "district-of-columbia" &&
            state["Slug State"] !== "puerto-rico"
        );
        setData(filteredData);
      } else if (type === 2) {
        const filteredData = response.data.data?.filter(
          (state) =>
            state["Slug State"] === "district-of-columbia" ||
            state["Slug State"] === "puerto-rico"
        );
        setData(filteredData);
      } else if (type === 3) {
        setData(response.data.data);
      }
    } catch (error) {
      setError(error);
      alert("There is an error. Please try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
