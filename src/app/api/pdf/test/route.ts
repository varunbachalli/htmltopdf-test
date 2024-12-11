import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
export async function GET(request: NextRequest) {
    const existsTest = [
        path.join(process.cwd(), "src/app/rdkit/RDKit_minimal.wasm"),
        path.join(process.cwd(), "rdkit/RDKit_minimal.wasm"),
        path.join(process.cwd(), "app/rdkit/RDKit_minimal.wasm")
    ];

    const existsResponse = existsTest.map((exists) => {
        return {
            [exists]: fs.existsSync(exists)
        };
    });

    return NextResponse.json({ message: existsResponse, request });
}
