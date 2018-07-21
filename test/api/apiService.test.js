import axios from 'axios';
import { fetchDataFromAPI, fetchPatternFromAPI } from '../../src/api/apiService';

describe('fetchDataFromAPI', () => {
  it('should call certain functions', async () => {
    axios.get = jest.fn().mockReturnValueOnce(Promise.resolve({ data: [] }));
    spyOn(Promise, 'resolve').and.callThrough();
    spyOn(axios, 'get').and.callThrough();
    await fetchDataFromAPI({ q: 'manny' });
    expect(Promise.resolve).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalled();
  });
});

describe('fetchDataFromAPI', () => {
  it('should call certain functions', async () => {
    axios.get = jest.fn().mockReturnValueOnce(Promise.resolve({ data: [] }));
    spyOn(Promise, 'resolve').and.callThrough();
    spyOn(axios, 'get').and.callThrough();
    await fetchPatternFromAPI({});
    expect(Promise.resolve).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalled();
  });
});
