import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: boolean;
}

export const useFetchWithLogging = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const response = await fetch(url);
        const responseBody = await response.json();
        if (!response.ok) {
          throw new Error('Fetch error');
        }
        setData(responseBody);
        const logEntry = {
          url,
          status: response.status,
          responseBody,
        };
        localStorage.setItem('api_logs', JSON.stringify(logEntry));
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};
