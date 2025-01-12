import { NextResponse } from "next/server";
import connectToDB from "../../../../lib/connection";
import User from "../../../../models/user"; 

export async function POST(req) {
  try {
    await connectToDB();
    
    const { username, email, password } = await req.json();
    const existingUser = await User.findOne({ username });
    console.log(existingUser);
    
    if (existingUser) {
      return NextResponse.json({ message: "User already exist" }, { status: 400 });
    }

    await User.create({ username, email, password });

    return NextResponse.json({ message: "User created successfully" }, { status: 201 }); 
  } catch (err) {
    console.error("Error creating user:", err);
    return NextResponse.json({ error: "Failed to create user", details: err }, { status: 500 });
  }
}
