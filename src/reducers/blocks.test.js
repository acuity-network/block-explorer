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
      blocks: { a: 0, d: 4, c: 3 },
      blockNumbers: [4, 5, 6],
    };
    const mockAction = {
      type: t.FETCH_BLOCKS_SUCCESS,
      payload: {
        blocks: { a: 1, b: 2, c: 3 },
        blockNumbers: [1, 2, 3],
      },
    };
    const expectedBlocks = { a: 1, b: 2, c: 3, d: 4 };
    const expectedBlockNumbers = [6, 5, 4, 3, 2, 1];

    const state = reducer(mockState, mockAction);

    expect(state).toHaveProperty('blocks', expectedBlocks);
    expect(state).toHaveProperty('blockNumbers', expectedBlockNumbers);
  });
});

describe('selectors/blocks', () => {
  describe('getLatestBlocks', () => {
    let expectedBlocks;
    const mockState = {
      blocks: {
        blockNumbers: [6, 5, 4, 3, 2, 1],
        blocks: { 6: 'a', 5: 'b', 4: 'c', 3: 'd', 2: 'e', 1: 'f' },
      },
    };

    it('should return the latest blocks from state up to the specified amount', () => {
      expectedBlocks = ['a', 'b'];

      const blocks = selectors.getLatestBlocks(mockState, 2);

      expect(blocks).toHaveLength(2);
      expect(blocks).toEqual(expectedBlocks);
    });

    it('should not return more than the existing amount of blocks', () => {
      expectedBlocks = ['a', 'b', 'c', 'd', 'e', 'f'];

      const blocks = selectors.getLatestBlocks(mockState, 40);

      expect(blocks).toHaveLength(6);
      expect(blocks).toEqual(expectedBlocks);
    });
  });

  describe('getSingleBlock', () => {
    it('should return a single block by number', () => {
      const mockState = {
        blocks: {
          blocks: { 5: 'a', 4: 'b' },
        },
      };

      const block = selectors.getSingleBlock(mockState, 5);

      expect(block).toEqual('a');
    });
  });
});
