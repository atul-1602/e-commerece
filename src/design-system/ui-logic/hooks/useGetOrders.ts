'use client'
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = <T>(url: string, payload: object) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const fetchData = async () => {
    try {
      const response = await axios.post<T>(url, payload);
      setData(response?.data.data[0].products);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);  

  return { data, loading, error };
};

// Using the hook to fetch orders for the given `username`
const useGetOrders = ({username}) => {
  
  const { data: orders, loading, error } = useFetch<{ id: string; name: string; price: number }[]>(`/api/getOrders`, {username});
  return { orders, loading, error };
};

export default useGetOrders;
