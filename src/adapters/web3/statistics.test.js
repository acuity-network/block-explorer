import * as web3 from './statistics';

describe('adapters/web3/statistics', () => {
  let mockGetInstance, mockEth;

  beforeEach(() => {
    mockEth = {};
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
    }));
  });

  describe('getPeerCount', () => {
    it('should reject if getting the peer count failed', async () => {
      mockEth.getPeerCount = callback => callback('rejected');

      await expect(web3.getPeerCount(mockGetInstance))
        .rejects.toEqual('rejected');
    });

    it('should resolve with the peer count', async () => {
      mockEth.getPeerCount = callback => callback(null, 10);

      await expect(web3.getPeerCount(mockGetInstance))
        .resolves.toEqual(10);
    });
  });

  describe('getGasPrice', () => {
    it('should reject if getting the gas price failed', async () => {
      mockEth.getGasPrice = callback => callback('rejected');

      await expect(web3.getGasPrice(mockGetInstance))
        .rejects.toEqual('rejected');
    });

    it('should resolve with the gas price', async () => {
      mockEth.getGasPrice = callback => callback(null, 10);

      await expect(web3.getGasPrice(mockGetInstance))
        .resolves.toEqual(10);
    });
  });
});
