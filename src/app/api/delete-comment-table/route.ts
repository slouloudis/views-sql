import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await sql`DROP TABLE comments;`;

  return NextResponse.json({ message: "Table deleted" });
}