import * as web3 from './transactions';

describe('adapters/web3/transactions', () => {
  let mockGetInstance, mockEth;

  beforeEach(() => {
    mockEth = {
      getTransaction: jest.fn((hash) => `T${hash}`),
    };
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
    }));
  });

  describe('getTransactions', () => {
    it('should return an empty array if no transaction hashes are given', async () => {
      const transactions = await web3.getTransactions(undefined, mockGetInstance);

      expect(transactions).toEqual([]);
    });

    it('should return the transactions for all given hashes', async () => {
      const mockHashes = ['0x2', '0x5', '0x10'];
      const expectedTransactions = ['T0x2', 'T0x5', 'T0x10'];
      const transactions = await web3.getTransactions(mockHashes, mockGetInstance);

      expect(transactions).toEqual(expectedTransactions);
    });

    it('should filter out transactions that failed to load', async () => {
      const mockCallback = jest
        .fn()
        .mockImplementationOnce((hash) => `T${hash}`)
        .mockImplementationOnce(() => null)
        .mockImplementationOnce((hash) => `T${hash}`);
      mockEth.getTransaction = mockCallback;

      const mockHashes = ['0x2', '0x5', '0x10'];
      const expectedTransactions = ['T0x2', 'T0x10'];
      const transactions = await web3.getTransactions(mockHashes, mockGetInstance);

      expect(transactions).toEqual(expectedTransactions);
    });
  });
});
