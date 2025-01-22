import React from 'react';
import useGetOrders from '../ui-logic/hooks/useGetOrders';
import { useParams } from 'next/navigation';
import OrderCompoenent from './OrderCompoenent';

const RecentOrders = () => {
  const { username } = useParams();
  const { orders, loading, error } = useGetOrders({ username });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const filterOrder = orders?.slice(0,3)
  return (
    <div>
      <h1>Your Recent Orders</h1>
      {filterOrder && filterOrder.length > 0 ? (
        filterOrder.map(orderItem => (
          <OrderCompoenent key={orderItem._id} orderItem={orderItem} />
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default RecentOrders;
