require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember unveil harvest glory bottom trouble'; 
let testAccounts = [
"0x5ffd186b2f58fd9a22acde8efc93a02734f58d96450b2c72bfe419d7bd61e484",
"0x0e846aac05023c8e878db05b162da7e37f439e1eaa854211d68c8e983e167be3",
"0x7c9ae642f6b72cab4ee90f146d28b3a92dbb01f6c793b6e8c3a7f072e30115c9",
"0xfb0cb4f53a11d9072d81bf7f5d17673a0230bd8956353f0a93c802e5ffbccfab",
"0x56b512d0c8f99117593098ccf9295c2968c074ea7a6d487d44f69a3bfa1ffe94",
"0x2e2e7d0479c12443dfe67c9aa6a09c2b281dc070550dac45ae7c0dc8ed7a0090",
"0xfdff3783d93ad7cfe6bf77b0144e4fd8f38dc2c060e2e1003454419d41a076ac",
"0x033ef12addec00a653abb6efd9a486505ed35c6bad9fbe742a070d59bef374e9",
"0x724326686b38d598b52d593efc755714db7373f1ad568480dec9f41a2d15e5b6",
"0x36871ca9c186428fcd3110ccbc824ba2422c40d5d73355e62541233d5545e49b"
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
            version: '^0.5.11'
        }
    }
};
