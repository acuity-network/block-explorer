import * as web3 from './accounts';

describe('adapters/web3/accounts', () => {
  let mockGetInstance, mockEth, mockIsAddress;

  beforeEach(() => {
    mockEth = {};
    mockIsAddress = jest.fn();
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
      isAddress: mockIsAddress,
    }));
  });

  describe('isAddress', () => {
    it('should call the isAddress method on the instance and return the result', () => {
      mockIsAddress.mockImplementation((hex) => `A${hex}`);

      const result = web3.isAddress('test', mockGetInstance);
      expect(result).toBe('Atest');
    });
  });
});
