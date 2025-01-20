// pages/api/orders.js

import { NextResponse } from "next/server";
import connectToDB from "../../../../lib/connection";  // Assuming you have a DB connection utility
import Order from "../../../../models/orders";  // Assuming you have an Order model

export async function POST(req) {
  const { username } = await req.json();
  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }
  try {
    await connectToDB();
    const orders = await Order.find({username});  

    if (orders.length === 0) {
      return NextResponse.json({ message: "No orders found for this user"},{ status: 404});
    }

    return NextResponse.json({ data: orders }, { status : 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders", details: error.message },{ status: 500});
  }
}
