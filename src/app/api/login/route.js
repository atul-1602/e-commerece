import { NextResponse } from "next/server";
import User from "../../../../models/user";
import connectToDB from "../../../../lib/connection";
export async function POST(req) {
  
  const { username, password } = await req.json();

  try {
    await connectToDB();
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ message: "User does not exist" }, { status: 400 });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Invalid password" }, { status: 400 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });

  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json({ error: "Failed to fetch user details", details: err }, { status: 500 });
  }
}
