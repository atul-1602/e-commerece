import { NextResponse } from "next/server";
import connectToDB from "../../../../lib/connection";
import Order from "../../../../models/orders";

export async function POST(req) {
  const { username, products } = await req.json();

  if (!username || !products || products.length === 0) {
    return NextResponse.json({ message: "Username and at least one product are required" }, { status: 400 });
  }

  for (const product of products) {
    if (!product.id || !product.name || !product.price || !product.quantity) {
      return NextResponse.json({ message: "Missing required product details" }, { status: 400 });
    }

    if (typeof product.price !== 'number' || typeof product.quantity !== 'number') {
      return NextResponse.json({ message: "Price and quantity must be numbers" }, { status: 400 });
    }
  }

  try {
    await connectToDB();

    const existingOrder = await Order.findOne({ username });

    if (existingOrder) {
      existingOrder.products.push(...products);  

      await existingOrder.save();

      return NextResponse.json({
        message: "Order placed successfully, to see orders go to your order section",
        order: existingOrder,
      }, { status: 200 });

    } else {
      const newOrder = new Order({
        username,
        products,
        order_time: new Date() 
      });

      await newOrder.save();

      return NextResponse.json({
        message: "Order placed successfully, to see orders go to your order section",
        order: newOrder,
      }, { status: 200 });
    }

  } catch (err) {
    console.error("Error placing order:", err);
    return NextResponse.json({
      message: "Failed to place order",
      error: err.message,
    }, { status: 500 });
  }
}
