import * as web3 from './addresses';

describe('adapters/web3/addresses', () => {
  let mockGetInstance, mockEth;

  beforeEach(() => {
    mockEth = {
      getBalance: jest.fn(() => '1234'),
      getTransactionCount: jest.fn(() => '42'),
    };
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
    }));
  });

  describe('getBalance', () => {
    it('should get the balance from the web3 instance', () => {
      const result = web3.getBalance('test', mockGetInstance);

      expect(mockEth.getBalance).toBeCalledWith('test');
      expect(result).toBe('1234');
    });
  });

  describe('getTransactionCount', () => {
    it('should get the transaction count from the web3 instance', () => {
      const result = web3.getTransactionCount('test', mockGetInstance);

      expect(mockEth.getTransactionCount).toBeCalledWith('test');
      expect(result).toBe('42');
    });
  });
});
