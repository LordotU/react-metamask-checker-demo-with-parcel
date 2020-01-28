import React from 'react'
import MetamaskChecker from 'react-metamask-checker'

import Content from './Content'
import Err from './Err'
import Loader from './Loader'


const renderChecked = (provider, account, network) =>
  <Content provider={provider} account={account} network={network} />
const renderDefault = () =>
  <Loader />
const renderErrored = error =>
  <Err message={error.message || 'Unexpected error'} />

const onCheckError = error =>
  console.error('onCheckError', error)
const onCheckSuccess = (provider, account, network) =>
  console.info('onCheckSuccess', provider, account, network)

export default () => {
  return (
    <MetamaskChecker
      // account="" // account should be selected
      // network="" // network should be selected
      onCheckError={onCheckError}
      onCheckSuccess={onCheckSuccess}
      renderChecked={renderChecked}
      renderDefault={renderDefault}
      renderErrored={renderErrored}
    />
  )
}
