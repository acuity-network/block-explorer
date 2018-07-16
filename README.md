# Mix Block Explorer

The MIX block explorer works with any Ethereum-based blockchains. It is built in [React](https://github.com/facebook/react) with [Redux](https://github.com/reduxjs/redux) and uses the [Web3 API](https://github.com/ethereum/web3.js).

## Installation
1. Install [nodejs](https://nodejs.org/en/download/package-manager/) and [yarn](https://yarnpkg.com/lang/en/docs/install/) (if you haven’t already)
2. Run `yarn` to install the project dependencies
3. `yarn start` runs the app on `localhost:3000`
4. To run the test suite enter `yarn test`

There is no blockchain setup needed as this block explorer connects to the [MIX blockchain](https://www.mix-blockchain.org) as fallback. If you want you can use a Web3 browser extension (such as [Metamask](https://metamask.io/)) to connect to other blockchains.

## Contributions
Contributions and feedback are always welcome!

We have no particular guidelines for contributions (yet) but please do write tests and make sure they all pass and that there are no eslint errors or warnings before committing. We write tests for:
- action creators
- adapters
- helpers
- middleware
- reducers
- selectors

Thanks for your input and feel free to get in touch if you have questions!
