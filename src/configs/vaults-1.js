import {
  vaultControlerABI,
  vaultStrategyABI,
  vaultERC20ABI,
  vaultABI,
} from '../contracts/';

const vaults = [
  {
    id: 'TKN1',
    name: 'WBTC - cWBTC',
    symbol: 'WBTC',
    platform:'compound',
    description: 'Migrate your WBTC LP into cWBTC LP',
    vaultSymbol: 'WBTC',
    erc20address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    vaultContractAddress: '0xc0b938725dFbC4c630BC8F68FcFfbEaaD6672c48',
    vaultStrategyAddress: '0xEC7841F6fc8177C33F5008Ee48cEaA2349035C23',
    erc20ABI: vaultERC20ABI,
    vaultContractABI: vaultABI,
    vaultStrategyABI: vaultStrategyABI,
    apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
    apyFetch: 'https://api.compound.finance/api/v2/ctoken?addresses=0xccF4429DB6322D5C611ee964527D42E5d685DD6a',
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 11210773,
    measurement: 1e18,
    depositDisabled: false,
    price_id: 'wbtc',
    network:"ETH"
  },
  // {
  //   id: 'TKN2',
  //   name: 'DAI - yDAI',
  //   symbol: 'DAI',
  //   description: 'Migrate your DAI LP into yDAI LP',
  //   vaultSymbol: 'DAI',
  //   erc20address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  //   vaultContractAddress: '0xdFba189c88e792A8c5322705A9b5c2035d6C1af4',
  //   vaultStrategyAddress: '0xA428E766315424C0Ab20549a734fE6aA78653366',
  //   erc20ABI: vaultERC20ABI,
  //   vaultContractABI: vaultABI,
  //   vaultStrategyABI: vaultStrategyABI,
  //   apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 11210773,
  //   measurement: 1e18,
  //   depositDisabled: false,
  //   price_id: 'dai'
  // },
  {
    id: 'TKN3',
    name: 'WBTC - RenBTC',
    symbol: 'WRenBTC',
    description: 'Migrate your WBTC LP into RenBTC LP',
    vaultSymbol: 'WTBC',
    pool:'ren',
    erc20address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    vaultContractAddress: '0x6Bb8d1A7ee1e4499A79E7E81684A6085cdFC17ee',
    vaultStrategyAddress: '0xb5F32Ed22986eB3c6fEB4df370a2ad2b11B5c7bd',
    erc20ABI: vaultERC20ABI,
    vaultContractABI: vaultABI,
    vaultStrategyABI: vaultStrategyABI,
    apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
    apyFetch:'https://api.curve.fi/api/getApys',
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 11210773,
    measurement: 1e18,
    depositDisabled: false,
    price_id: 'wbtc',
    network:"ETH"
  },
  {
    id: 'TKN4',
    name: 'curve-fi-ydai-yusdc-yusdt-ytusd',
    symbol: 'CRV',
    description: 'Migrate your CRV LP into yCRV LP',
    vaultSymbol: 'CRV',
    pool:'iearn',
    erc20address: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
    vaultContractAddress: '0x10d50D4B1B069d47151E6dE3734232FE75b18628',
    vaultStrategyAddress: '0x706a6d84d103Cda3A352b76b5a2b248E18Dc4112',
    erc20ABI: vaultERC20ABI,
    vaultContractABI: vaultABI,
    vaultStrategyABI: vaultStrategyABI,
    apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
    apyFetch:'https://api.curve.fi/api/getApys',
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 11210773,
    measurement: 1e18,
    depositDisabled: false,
    price_id: 'curve-fi-ydai-yusdc-yusdt-ytusd',
    network:"ETH"
  }
];

export default vaults;
