import { defineChain } from "viem";

export const dispatch = defineChain({
    id: 779672,
    name: 'Dispatch L1',
    network: 'dispatch',
    nativeCurrency: {
        decimals: 18,
        name: 'DIS',
        symbol: 'DIS',
    },
    rpcUrls: {
        default: {
            http: ['https://subnets.avax.network/dispatch/testnet/rpc']
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://subnets-test.avax.network/dispatch' },
    },
    // Custom variables
    iconUrl: "/chains/logo/779672.png"
});