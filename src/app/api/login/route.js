import { NextResponse } from "next/server";
import User from "../../../../models/user";
import connectToDB from "../../../../lib/connection";
import jwt from "jsonwebtoken";

export async function POST(req) {
  
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ message: "Username and password are required" }, { status: 400 });
  }

  try {
    await connectToDB();
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ message: "User does not exist" }, { status: 400 });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Invalid password" }, { status: 400 });
    }

    if (!process.env.JWT_SECRET) {
      return NextResponse.json({ error: "JWT_SECRET is not defined in environment variables" }, { status: 500 });
    }
    
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return  NextResponse.json({
      message: "Login successful",
      token: token,
    }, { status: 200 });
  } catch (err) {
    console.error("Error fetching user:", { error: err.message, stack: err.stack });
    return NextResponse.json({ error: "Failed to fetch user details", details: err }, { status: 500 });
  }
}
