import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";

export async function GET(request: Request) {
  connectDB();

  try {
    const studyList = await Study.find({});

    return Response.json(studyList);
  } catch (error: any) {
    throw new Error(error);
  }
}
