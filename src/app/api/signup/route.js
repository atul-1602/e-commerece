import { NextResponse } from "next/server";
import connectToDB from "../../../../lib/connection";
import User from "../../../../models/user";

import jwt from "jsonwebtoken"; // Import jsonwebtoken for generating JWT

export async function POST(req) {
  try {
    await connectToDB();
    
    const { username, email, password } = await req.json();
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const newUser = await User.create({ username, email, password });

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } 
    );

    const res = NextResponse.json({ 
      message: "User created successfully", 
      user: { username: newUser.username, email: newUser.email },
    }, { status: 201 });

    res.cookies.set("auth_token", token, {
      httpOnly: true,  
      secure: false,   
      sameSite: "Strict", 
      maxAge: 60 * 60 * 24 * 7, 
    });
    
    return res;

  } catch (err) {
    console.error("Error creating user:", err);
    return NextResponse.json({ error: "Failed to create user", details: err }, { status: 500 });
  }
}
