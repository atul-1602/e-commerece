import React from 'react';
import useGetOrders from '../ui-logic/hooks/useGetOrders';
import { useParams } from 'next/navigation';
import OrderCompoenent from './OrderCompoenent';

const AllOrders = () => {
  const { username } = useParams();
  
  const { orders, loading, error } = useGetOrders({ username });
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Your Recent Orders</h1>
      {orders && orders.length > 0 ? (
        orders.map(orderItem => (
          <OrderCompoenent key={orderItem._id} orderItem={orderItem} />
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default AllOrders;
