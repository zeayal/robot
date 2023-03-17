import { ethers } from "ethers";

// If no %%url%% is provided, it connects to the default
// http://localhost:8545, which most nodes use.
const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com')

async function main( ) {
    const res = await provider.getBlockNumber();
    console.log('res', res);
}

main()