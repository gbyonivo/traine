import * as Selectors from '../../src/selectors';

const state = {
  dataReducer: {
    errorFetchingData: null,
    isFetchingData: false,
    data: {},
    pattern: {},
    errorFetchingPattern: null,
    isFetchingPattern: false
  }
};

describe('Select Data', () => {
  it('should return data in state', () => {
    expect(Selectors.selectData(state)).toMatchObject([]);
  });
});

describe('SelectIsFetchingPattern', () => {
  it('should return isFetching pattern in state', () => {
    expect(Selectors.selectIsFetchingPattern(state)).toEqual(state.dataReducer.isFetchingPattern);
  });
});

describe('SelectPattern', () => {
  it('should return Pattern', () => {
    expect(Selectors.selectPattern(state)).toMatchObject(state.dataReducer.pattern);
  });
});
