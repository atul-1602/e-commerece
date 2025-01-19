'use client';
import { useState } from "react";
import axios from "axios";

const useFetch = <T>(url: string, payload: object) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null); 
    try {
      console.log("Sending request:", payload); 
      const response = await axios.post<T>(url, payload, { withCredentials: true });
      setData(response.data);
    } catch (err: any) {
      console.error("Error occurred:", err); 
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  return { data, loading, error, fetchData, reset };
};

const usePlaceOrders = ({ username, products }: { username: string, products: { id: number, name: string, price: number, quantity: number, warranty_period: string, date: string }[] }) => {
  const formattedProducts = products.map(product => ({
    ...product,
    date: new Date().getTime(), 
  }));

  const { data, loading, error, fetchData, reset } = useFetch<{ message: string, order: any }>(
    "/api/order", 
    { username, products: formattedProducts }
  );

  return { data, loading, error, fetchData, reset };
};

export default usePlaceOrders;
