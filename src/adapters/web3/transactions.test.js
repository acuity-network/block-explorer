import * as web3 from './transactions';

describe('adapters/web3/transactions', () => {
  let mockGetInstance, mockEth;

  beforeEach(() => {
    mockEth = {};
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
    }));
  });

  describe('getTransaction', () => {
    it('should reject if getting the transaction failed', async () => {
      mockEth.getTransaction = (t, callback) => callback('rejected');

      await expect(web3.getTransaction('test', mockGetInstance))
        .rejects.toEqual('rejected');
    });

    it('should resolve with the transaction', async () => {
      mockEth.getTransaction = (a, callback) => callback(null, ({ a: 3 }));

      await expect(web3.getTransaction('test', mockGetInstance))
        .resolves.toEqual({ a: 3 });
    });
  });
});
