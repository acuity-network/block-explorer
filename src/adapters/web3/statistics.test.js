import * as web3 from './statistics';

describe('adapters/web3/statistics', () => {
  let mockGetInstance, mockEth, mockNet;

  beforeEach(() => {
    mockNet = {
      getPeerCount: jest.fn(() => 42),
    };
    mockEth = {
      net: mockNet,
      getGasPrice: jest.fn(() => '4815162342')
    };
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
    }));
  });

  describe('getGasPrice', () => {
    it('should get the gas price from the web3 instance', () => {
      const result = web3.getGasPrice(mockGetInstance);

      expect(mockEth.getGasPrice).toBeCalled();
      expect(result).toBe('4815162342');
    });
  });

  describe('getPeerCount', () => {
    it('should get the peer count from the web3 instance', () => {
      const result = web3.getPeerCount(mockGetInstance);

      expect(mockNet.getPeerCount).toBeCalled();
      expect(result).toBe(42);
    });
  });
});
