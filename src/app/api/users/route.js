import { NextResponse } from "next/server";
import connectToDB from "../../../../lib/connection";
import User from "../../../../models/user";

export async function GET() {
  try {

    await connectToDB();

    const data = await User.find({});

    if (!data || data.length === 0) {
      return NextResponse.json(
        { message: "No users found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error("Error fetching users:", err);
    return NextResponse.json(
      { error: "Failed to fetch user details", details: err },
      { status: 500 }
    );
  }
}
