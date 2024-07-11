import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ error: "id 가 필요합니다." }, { status: 400 });
  }
  connectDB();

  try {
    const study = await Study.findById(studyId);

    return Response.json(study);
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ error }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ error: "id 가 필요합니다." }, { status: 400 });
  }
  connectDB();
  try {
    await Study.findByIdAndDelete(studyId);

    return Response.json({ message: "스터디가 삭제되었습니다." }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
