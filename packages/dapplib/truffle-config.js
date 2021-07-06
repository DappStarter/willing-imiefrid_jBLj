require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note pizza pudding grace crime olympic silly'; 
let testAccounts = [
"0x1c7a02b8aed67d91d95cb585f5e947b5674ad12c0948a7a4df7fea7a07a6d3ea",
"0xb72d561c00b36c381d23f303908ef5feda53a99b7828c70150d8f0e4903cd068",
"0x84d4d182d689cbd00a2e2db7cdd4cd3d052a3ab8f0b45ed92ebcb8fd4beb456a",
"0xba357b003b90bfd3b9e68d282bc0f125fadb299937cbe6361395f244a65be5ec",
"0x097557991c05ffa4acbfa6f6007273f690d6256748b9a77e185aaddac1e0012d",
"0x1ffc721f79f8de5a4ad51f99a43371cd21f26c89faf99d46ff1b76580d7de65c",
"0xb011f3a04bf601b85477a7ca12a6e3a0faa40a3052f8a432cba8a528773a309a",
"0x5ec9cdd8be672ebb1233b8271016fedd25584f132a5d9995d524388ce48a7f28",
"0x3ac0dd89259e527aaf90cdf0fa0edccc02af6fcead14c145e8c4dac885e1237c",
"0x94598a950be82c907224988c2d134c776ac4166afdc6deda301214df241f6e72"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

