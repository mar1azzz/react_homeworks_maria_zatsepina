import { useEffect } from "react";

const useFetch = (url, options) => {
  useEffect(() => {
    const logRequest = async () => {
      try {
        const response = await fetch(url, options);
        const responseBody = await response.json();

        const logEntry = {
          url,
          options,
          status: response.status,
          responseBody,
        };

        localStorage.setItem("api_logs", JSON.stringify(logEntry));
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    logRequest();
  }, [url, options]);
};

export default useFetch;
