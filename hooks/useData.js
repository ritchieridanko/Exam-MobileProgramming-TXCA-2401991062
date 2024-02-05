import { useState, useEffect } from "react";
import axios from "axios";

import jsonStates from "../data/states.json";

const useData = (slug) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest"
      );

      const first_data = response.data.data?.find(
        (state) => state["Slug State"] === slug
      );
      const second_data = jsonStates.find(
        (state) => state["Slug State"] === slug
      );
      const full_data = {
        first: first_data,
        second: second_data,
      };
      setData(full_data);
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

export default useData;
