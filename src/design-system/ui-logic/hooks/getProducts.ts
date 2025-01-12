'use client'
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get<T>(url);
      setData(response.data.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("/api/products");
  }, []);

  return { data, loading, error };
};


const useProducts = () => {
  const { data: products, loading, error } = useFetch<{ id: string; name: string; price: number }[]>();
  return { products, loading, error };
};

export default useProducts;
