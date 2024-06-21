Error: error:0308010C:digital envelope routines::unsupported
Fix by:
npm i -g npm-check-updates
ncu -u
npm install


Metaplex
-Is the Nft standard on solana

---------- DEPRICATED INFORMATION ----------

git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex-foundation/metaplex
-clone the repo

yarn install --cwd ~/metaplex-foundation/metaplex/js/
-install dependencies

ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/cany-machine-v2-cli.ts --version
-verify installation is complete (requires ts-node)

npm install -g ts-node
-install ts-node

---------- UPDATED INFORMATION ----------

MPL CANY MACHINE INSTALLATION

npm install @metaplex-foundation/mpl-candy-machine
-install mpl Candy Machine

import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine';
umi.use(mplCandyMachine());

UMI INSTALLATION

npm install @metaplex-foundation/umi
npm install @metaplex-foundation/umi-bundle-defaults \
