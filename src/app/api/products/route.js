import { NextResponse } from "next/server";
import connectToDB from "../../../../lib/connection";
import Product from "../../../../models/products";

export async function GET() {
  try {
    await connectToDB();

    const data = await Product.find({});

    
    if (!data || data.length === 0) {
      return NextResponse.json(
        { message: "No products found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { error: "Failed to fetch product details", details: err },
      { status: 500 }
    );
  }
}
