import getSVG from "@/app/utils/rdkittest";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // const readDir = fs.readdirSync(path.join(process.cwd(), "rdkit"));

    // const existsResponse = existsTest.map((exists) => {
    //     return {
    //         [exists]: fs.existsSync(exists)
    //     };
    // });
    const svg = await getSVG();

    return NextResponse.json({ message: svg, request });
}
