export declare enum Network {
    mainnet = "mainnet",
    testnet = "testnet",
    regtest = "regtest"
}
export declare enum AddressType {
    p2pkh = "p2pkh",
    p2sh = "p2sh",
    p2wpkh = "p2wpkh",
    p2wsh = "p2wsh",
    p2tr = "p2tr"
}
export declare type AddressInfo = {
    bech32: boolean;
    network: Network;
    address: string;
    type: AddressType;
};
export declare const getAddressInfo: (address: string) => AddressInfo;
export declare const validate: (address: string, network?: Network) => boolean;
export default validate;
