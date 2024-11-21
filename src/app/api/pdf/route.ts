import { getPdf } from "@/app/lib/pdf";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  console.log("GET /api/pdf" + request);
  const pdfBuffer = await getPdf();
  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="output.pdf"'
    }
  });
}
