/*
  Mocking data for electrumx unit tests
*/

'use strict'

const utxos = [
  {
    height: 604392,
    tx_hash: '7774e449c5a3065144cefbc4c0c21e6b69c987f095856778ef9f45ddd8ae1a41',
    tx_pos: 0,
    value: 1000
  },
  {
    height: 630834,
    tx_hash: '4fe60a51e0d8f5134bfd8e5f872d6e502d7f01b28a6afebb27f4438a4f638d53',
    tx_pos: 0,
    value: 6000
  }
]

const balance = {
  confirmed: 7000,
  unconfirmed: 0
}

const txHistory = [
  {
    height: 601861,
    tx_hash: '6181c669614fa18039a19b23eb06806bfece1f7514ab457c3bb82a40fe171a6d'
  }
]

const mempool = [
  {
    tx_hash: '45381031132c57b2ff1cbe8d8d3920cf9ed25efd9a0beb764bdb2f24c7d1c7e3',
    height: 0,
    fee: 24310
  }
]

module.exports = {
  utxos,
  balance,
  txHistory,
  mempool
}
