<script lang="ts">
import Web3 from 'web3';
import { EthereumProvider } from '@walletconnect/ethereum-provider'
export default {
  setup() {
    const chain_conf: any = {
      EVM_NODE_ID: import.meta.env.VITE_EVM_NODE_ID,
      EVM_NODE_HTTPS: import.meta.env.VITE_EVM_NODE_HTTPS,
      EVM_NODE_WSS: import.meta.env.VITE_EVM_NODE_WSS,
      EVM_NODE_CHAIN_ID: import.meta.env.VITE_EVM_NODE_CHAIN_ID,
      ethAccount: {}
    }

    let web3

    const login = async function(){
      const provider = await EthereumProvider.init({
        projectId: '0183a45f658feff9f04a07e04c0b8c60', // required
        chains: [chain_conf.EVM_NODE_CHAIN_ID], // required
        showQrModal: true, // requires @walletconnect/modal
        rpcMap: {
          [chain_conf.EVM_NODE_CHAIN_ID]: chain_conf.EVM_NODE_HTTPS+"/"+chain_conf.EVM_NODE_ID
        }
      })
      await provider.enable();

      web3 = new Web3(provider)
      const accounts = await web3.eth.getAccounts();
      chain_conf.ethAccount = accounts[0];
      return chain_conf.ethAccount
      
    }
    return {
      login,
    }
  }
}
</script>

<template>

  <div id="search">
      <button @click="login()">CONNECT</button>
    </div>
</template>