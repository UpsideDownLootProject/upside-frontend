import { ethers } from "ethers";

import UpsideDownLoot from '../lib/UpsideDownLoot.json';
import { CONTRACT_ADDRESS } from '../lib/constants';
import { Web3Provider } from '@ethersproject/providers'

export async function ownerOf(tokenId: number) {
  const provider = ethers.getDefaultProvider();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, UpsideDownLoot, provider);
  const owner = await contract.ownerOf(tokenId);
  console.log(owner);
  return owner;
}

export async function claimForLoot(provider: Web3Provider | undefined, tokenId: number, ownedLoot: number) {
  try {
    if (!provider) {
      throw new Error('No provider found');
    }

    const contract = new ethers.Contract(CONTRACT_ADDRESS, UpsideDownLoot, provider.getSigner());

    const txn = await contract.claimForLoot(tokenId, ownedLoot);

    await txn.wait();
  } catch (e) {
    throw e;
  }
}

export async function claim(provider: Web3Provider | undefined, tokenId: number) {
  try {
    if (!provider) {
      throw new Error('No provider found');
    }

    const contract = new ethers.Contract(CONTRACT_ADDRESS, UpsideDownLoot, provider.getSigner());

    const options = { value: ethers.utils.parseEther('0.025') }
    const txn = await contract.claim(tokenId, options);

    await txn.wait();
  } catch (e) {
    throw e;
  }
}