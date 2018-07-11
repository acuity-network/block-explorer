import * as web3 from './blocks';

describe('adapters/web3/blocks', () => {
  let mockGetInstance, mockEth;

  beforeEach(() => {
    mockEth = {
      getBlockNumber: jest.fn(() => '4815162342'),
      getBlock: jest.fn((number) => `B${number}`),
    };
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
    }));
  });

  describe('getLatestBlockNumber', () => {
    it('should get the latest block number from the web3 instance', () => {
      const result = web3.getLatestBlockNumber(mockGetInstance);

      expect(mockEth.getBlockNumber).toBeCalled();
      expect(result).toBe('4815162342');
    });
  });

  describe('getBlocks', () => {
    it('should return an empty array if no block numbers are given', async () => {
      const blocks = await web3.getBlocks(undefined, mockGetInstance);

      expect(blocks).toEqual([]);
    });

    it('should return the blocks for all given numbers', async () => {
      const mockNumbers = [2, 5, 10];
      const expectedBlocks = ['B2', 'B5', 'B10'];
      const blocks = await web3.getBlocks(mockNumbers, mockGetInstance);

      expect(blocks).toEqual(expectedBlocks);
    });

    it('should filter out blocks that failed to load', async () => {
      const mockCallback = jest
        .fn()
        .mockImplementationOnce((number) => `B${number}`)
        .mockImplementationOnce(() => null)
        .mockImplementationOnce((number) => `B${number}`);
      mockEth.getBlock = mockCallback;

      const mockNumbers = [2, 5, 10];
      const expectedBlocks = ['B2', 'B10'];
      const blocks = await web3.getBlocks(mockNumbers, mockGetInstance);

      expect(blocks).toEqual(expectedBlocks);
    });
  });
});
