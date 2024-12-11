import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import initRDKitModule from "./RDKIT_minimal";
export async function GET(request: NextRequest) {
    const existsTest = [
        path.join(process.cwd(), "rdkit/RDKit_minimal.wasm"),
        path.join(process.cwd(), "app/api/pdf/test/rdkit/RDKit_minimal.wasm")
    ];

    const rdkit = await initRDKitModule({
        locateFile: () => path.join(process.cwd(), "rdkit/RDKit_minimal.wasm")
    });

    var smiles = "CC(=O)Oc1ccccc1C(=O)O";
    var mol = rdkit.get_mol(smiles);
    var svg = mol.get_svg();

    // const readDir = fs.readdirSync(path.join(process.cwd(), "rdkit"));

    // const existsResponse = existsTest.map((exists) => {
    //     return {
    //         [exists]: fs.existsSync(exists)
    //     };
    // });

    return NextResponse.json({ message: svg, request });
}
