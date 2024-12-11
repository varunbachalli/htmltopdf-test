import path from "path";
import initRDKitModule from "./rdkit/RDKit_minimal";

export default async function getSVG() {
    const rdkit = await initNodeRDKit();
    var smiles = "CC(=O)Oc1ccccc1C(=O)O";
    var mol = rdkit.get_mol(smiles);
    var svg = mol.get_svg();
    return svg;
}

const initNodeRDKit = (() => {
    let rdkitLoadingPromise: any;

    return () => {
        /**
         * This is to be called from the server environment, since there's no window attached to it.
         * So we just directly return the RDKitModule object
         *
         *
         * Utility function ensuring there's only one call made to load RDKit
         * It returns a promise with the resolved RDKit API as value on success,
         * and a rejected promise with the error on failure.
         *
         * The RDKit API is also attached to the global object on successful load.
         */
        if (!rdkitLoadingPromise) {
            rdkitLoadingPromise = new Promise((resolve, reject) => {
                initRDKitModule({
                    locateFile: () => path.join(process.cwd(), "data/rdkit/RDKit_minimal.wasm")
                })
                    .then((RDKit) => {
                        resolve(RDKit);
                    })
                    .catch((e) => {
                        reject();
                    });
            });
        }

        return rdkitLoadingPromise;
    };
})();
