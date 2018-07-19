import axios from 'axios';
import { fetchDataFromAPI } from '../../src/api/apiService';

describe('fetchDataFromAPI', () => {
  it('should call certain functions', async () => {
    axios.get = jest.fn().mockReturnValueOnce(Promise.resolve({ data: [] }));
    spyOn(Promise, 'resolve').and.callThrough();
    spyOn(axios, 'get').and.callThrough();
    const actual = await fetchDataFromAPI({ q: 'manny' });
    expect(Promise.resolve).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalled();
  });
});
