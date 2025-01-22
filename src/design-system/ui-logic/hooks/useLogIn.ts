'use client'
import { useState } from "react";
import axios from "axios";

const useFetch = <T>(url: string, payload: object) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post<T>(url, payload, { withCredentials: true });

      setData(response?.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};

const useLogIn = ({ username, password }: { username: string, password: string }) => {
  const { data, loading, error, fetchData } = useFetch<{ id: string; username: string; email: string }>(
    "/api/login", 
    { username, password },
  );
  
  return { data, loading, error, fetchData };
};

export default useLogIn;
