import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      success: true,
      message: "MongoDB Connected",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}