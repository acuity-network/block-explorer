import * as web3 from './init';

describe('adapters/web3/init', () => {
  let mockGetInstance, mockEth, mockIsAddress;

  beforeEach(() => {
    mockEth = {};
    mockIsAddress = jest.fn();
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
      isAddress: mockIsAddress,
    }));
  });

  describe('getWeb3Instance', () => {
    it('should return undefined for an initial web3', () => {
      const instance = web3.getWeb3Instance();

      expect(instance).not.toBeDefined();
    });
  });

  describe('initializeWeb3', () => {
    it('should initialize web3 from the current provider', () => {
      const mockWindow = {
        web3: {
          currentProvider: 'testProvider',
        },
      };
      const mockConstructor = jest.fn();
      class mockPackage {
        constructor(provider) {
          mockConstructor(provider);
        }
      }
      web3.initializeWeb3(mockWindow, mockPackage);

      expect(mockConstructor).toBeCalledWith('testProvider');
    });
  });
});
