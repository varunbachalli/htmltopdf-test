import path from "path";
import initRDKitModule from "./rdkit/RDKit_minimal";

export default async function getSVG() {
    const rdkit = await initRDKitModule({
        locateFile: () => path.join(process.cwd(), "data/rdkit/RDKit_minimal.wasm")
    });
    var smiles = "CC(=O)Oc1ccccc1C(=O)O";
    var mol = rdkit.get_mol(smiles);
    var svg = mol.get_svg();
    return svg;
}
