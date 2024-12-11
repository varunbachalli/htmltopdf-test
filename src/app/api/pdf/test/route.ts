import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
export async function GET(request: NextRequest) {
    const existsTest = [
        path.join(process.cwd(), "rdkit/RDKit_minimal.wasm"),
        path.join(process.cwd(), "app/api/pdf/test/rdkit/RDKit_minimal.wasm")
    ];

    const readDir = fs.readdirSync(path.join(process.cwd()));

    // const existsResponse = existsTest.map((exists) => {
    //     return {
    //         [exists]: fs.existsSync(exists)
    //     };
    // });

    return NextResponse.json({ message: readDir.join(","), request });
}
