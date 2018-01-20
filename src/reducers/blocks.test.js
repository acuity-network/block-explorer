import * as t from '../actions/types';
import reducer, * as selectors from './blocks';

describe('reducers/blocks', () => {
  it('should ignore unrecognized actions', () => {
    const mockAction = {
      type: 'test/TEST_ACTION',
    };
    const state = reducer('test', mockAction);

    expect(state).toEqual('test');
  });

  it('should add the new blocks to the state', () => {
    const mockState = {
      byNumber: { a: 0, d: 4, c: 3 },
      blocksLoaded: [4, 5, 6],
    };
    const mockAction = {
      type: t.FETCH_BLOCKS,
      payload: {
        byNumber: { a: 1, b: 2, c: 3 },
        blocksLoaded: [1, 2, 3],
      },
    };
    const expectedByNumber = { a: 1, b: 2, c: 3, d: 4 };
    const expectedBlocksLoaded = [6, 5, 4, 3, 2, 1];

    const state = reducer(mockState, mockAction);

    expect(state).toHaveProperty('byNumber', expectedByNumber);
    expect(state).toHaveProperty('blocksLoaded', expectedBlocksLoaded);
  });

  it('should remove duplicates from blocksLoaded', () => {
    const mockState = {
      byNumber: {},
      blocksLoaded: [1, 3, 5],
    };
    const mockAction = {
      type: t.FETCH_BLOCKS,
      payload: {
        byNumber: {},
        blocksLoaded: [1, 2, 3],
      },
    };
    const expectedBlocksLoaded = [5, 3, 2, 1];

    const state = reducer(mockState, mockAction);

    expect(state).toHaveProperty('blocksLoaded', expectedBlocksLoaded);
  });
});

describe('selectors/blocks', () => {
  describe('getLatestBlocks', () => {
    it('should return the amount of latest block from state', () => {
      const mockState = {
        blocks: {
          blocksLoaded: [6, 5, 4, 3, 2, 1],
          byNumber: { 6: 'a', 5: 'b', 4: 'c', 3: 'd', 2: 'e', 1: 'f' },
        },
      };
      const expectedBlocks = ['a', 'b'];

      const blocks = selectors.getLatestBlocks(mockState, 2);

      expect(blocks).toHaveLength(2);
      expect(blocks).toEqual(expectedBlocks);
    });
  });

  describe('getSingleBlock', () => {
    it('should return a single block by number', () => {
      const mockState = {
        blocks: {
          byNumber: { 5: 'a', 4: 'b' },
        },
      };

      const block = selectors.getSingleBlock(mockState, 5);

      expect(block).toEqual('a');
    });
  });
});
