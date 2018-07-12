import * as web3 from './helpers';

describe('adapters/web3/helpers', () => {
  let mockGetInstance, mockFromWei, mockIsAddress, mockIsHexStrict, mockUtils;

  beforeEach(() => {
    mockFromWei = jest.fn(() => '42');
    mockIsAddress = jest.fn((hex) => `A${hex}`);
    mockIsHexStrict = jest.fn(() => true);
    mockUtils = {
      fromWei: mockFromWei,
      isAddress: mockIsAddress,
      isHexStrict: mockIsHexStrict,
    };
    mockGetInstance = jest.fn(() => ({
      utils: mockUtils,
    }));
  });

  describe('fromWei', () => {
    it('should call the fromWei method on the instance', () => {
      const result = web3.fromWei('42', 'gwei', mockGetInstance);

      expect(mockFromWei).toBeCalledWith('42', 'gwei');
      expect(result).toBe('42');
    });

  });

  describe('isAddress', () => {
    it('should call the isAddress method on the instance and return the result', () => {
      const result = web3.isAddress('test', mockGetInstance);

      expect(mockIsAddress).toBeCalledWith('test');
      expect(result).toBe('Atest');
    });
  });

  describe('isHexStrict', () => {
    it('should call the isHexStrict method on the instance and return the result', () => {
      const result = web3.isHexString('0x481516', mockGetInstance);

      expect(mockIsHexStrict).toBeCalledWith('0x481516');
      expect(result).toBe(true);
    });
  });
});
