import { ERC20Token } from "@pancakeswap/sdk";
import { ChainId } from "@pancakeswap/chains";

// For StoryBook
export const cakeToken = new ERC20Token(
  ChainId.BSC,
  "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://pancakeswap.finance/"
);

export const bscToken = new ERC20Token(
  ChainId.BSC,
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  18,
  "BNB",
  "BNB",
  "https://www.binance.com/"
);
