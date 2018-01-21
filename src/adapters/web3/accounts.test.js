import * as web3 from './accounts';

describe('adapters/web3/accounts', () => {
  let mockGetInstance, mockEth, mockIsAddress;

  beforeEach(() => {
    mockEth = {};
    mockGetInstance = jest.fn(() => ({
      isAddress: mockIsAddress,
      eth: mockEth,
    }));
  });

  describe('isAddress', () => {
    it('should call the isAddress method on the instance and return the result', () => {
      mockIsAddress = jest.fn((hex) => `A${hex}`);

      const result = web3.isAddress('test', mockGetInstance);
      expect(result).toBe('Atest');
    });
  });

  describe('getBalance', () => {
    it('should reject if getting the block failed', async () => {
      mockEth.getBalance = (a, callback) => callback('rejected');

      await expect(web3.getBalance('test', mockGetInstance))
        .rejects.toEqual('rejected');
    });

    it('should resolve with the block number', async () => {
      mockEth.getBalance = (a, callback) => callback(null, 10);

      await expect(web3.getBalance('test', mockGetInstance))
        .resolves.toEqual(10);
    });
  });
});
