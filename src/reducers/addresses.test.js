import * as t from '@/actions/types';
import reducer, * as selectors from './addresses';

describe('reducers/addresses', () => {
  it('should ignore unrecognized actions', () => {
    const mockAction = {
      type: 'test/TEST_ACTION',
    };
    const state = reducer('test', mockAction);

    expect(state).toEqual('test');
  });

  it('should save addresses to the store', () => {
    const mockAction = {
      type: t.FETCH_ADDRESS_SUCCESS,
      payload: {
        address: 'test',
        balance: 10,
        transactionCount: 2,
      },
    };
    const state = reducer(undefined, mockAction);

    expect(state).toHaveProperty('test');
    expect(state.test).toHaveProperty('address', 'test');
    expect(state.test).toHaveProperty('balance', 10);
    expect(state.test).toHaveProperty('transactionCount', 2);
  });

  it('should update addresses if the data changed', () => {
    const mockAction = {
      type: t.FETCH_ADDRESS_SUCCESS,
      payload: {
        address: 'test',
        balance: 15,
        transactionCount: 3,
      },
    };
    const mockState = {
      test: {
        address: 'test',
        balance: 10,
        transactionCount: 2,
      },
    };
    const state = reducer(mockState, mockAction);

    expect(state.test).toHaveProperty('address', 'test');
    expect(state.test).toHaveProperty('balance', 15);
    expect(state.test).toHaveProperty('transactionCount', 3);
  });
});

describe('selectors/addresses', () => {
  describe('getAddress', () => {
    it('should return the correct address from state', () => {
      const mockState = {
        addresses: {
          test: {
            balance: 10,
          },
        },
      };

      const address = selectors.getAddress(mockState, 'test');

      expect(address).toHaveProperty('balance', 10);
    });
  });

  describe('getAddressForDisplay', () => {
    const mockAddress = '0x12345678';
    const mockState = {
      location: {
        payload: {
          address: mockAddress,
        },
      },
    };
    const mockGetAddress = jest.fn((state, address) => ({ address, balance: 235, transactionCount: 2 }));
    const mockFromWei = jest.fn(amount => amount * 10);
    const mockMethods = { getAddress: mockGetAddress, fromWei: mockFromWei };

    it('should use the address from location to get the current address', () => {
      selectors.getAddressForDisplay(mockState, mockAddress, mockMethods);

      expect(mockGetAddress).toBeCalled();
      expect(mockGetAddress).toBeCalledWith(mockState, '0x12345678');
    });

    it('should transform the Wei balance to Ether', () => {
      selectors.getAddressForDisplay(mockState, mockAddress, mockMethods);

      expect(mockFromWei).toBeCalled();
      expect(mockFromWei).toBeCalledWith('235', 'ether');
    });

    it('should return an object with address display data', () => {
      const value = selectors.getAddressForDisplay(mockState, mockAddress, mockMethods);

      expect(value).toHaveProperty('address', '0x12345678');
      expect(value).toHaveProperty('balanceInWei', '235');
      expect(value).toHaveProperty('balanceInEther', '2350.000');
      expect(value).toHaveProperty('transactionCount', 2);
    });
  });
});
