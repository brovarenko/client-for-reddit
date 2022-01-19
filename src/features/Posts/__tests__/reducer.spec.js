import uut from '../reducer';

const initialState = {
    isLoading: false,
    isError: false,
    posts: []
};

describe('store/topics/reducer', () => {

  it('should have initial state', () => {
    expect(uut()).toEqual(initialState);
  });
  
});