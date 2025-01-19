'use client'
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
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
    fetchData();
  }, [url]); 

  return { data, loading, error };
};


const useProducts = () => {
  const { data: products, loading, error } = useFetch<{ id: string; name: string; price: number }[]>("/api/products");
  return { products, loading, error };
};

export default useProducts;
