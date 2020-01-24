import React from 'react'


const networks = {
  1: 'Ethereum Main Network',
  2: 'Morden Test network',
  3: 'Ropsten Test Network',
  4: 'Rinkeby Test Network',
  5: 'Goerli Test Network',
  42: 'Kovan Test Network',
}

export default ({ provider, account, network }) => (
  <div id="content" style={{ color: 'green' }}>
    Connected at <strong>{ Date.now() }</strong> with <strong>{ account }</strong> in <strong>{ networks[network] }</strong>
  </div>
)
