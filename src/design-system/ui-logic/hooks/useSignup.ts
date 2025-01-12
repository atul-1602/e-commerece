'use client'
import { useState } from "react";
import axios from "axios";

// Generic hook for fetching data with payload
const useFetch = <T>(url: string, payload: object) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Initially false, since we're not triggering it automatically
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post<T>(url, payload);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

const useSignUp = ({ username, email, password }: { username: string, email: string, password: string }) => {
  const { data, loading, error, fetchData } = useFetch<{ id: string; name: string; price: number }[]>("/api/signup", { username, email, password });

  return { data, loading, error, fetchData };
};

export default useSignUp;
