import {getCorrdinates} from './geoData';

describe("Test:function 'Corrdinates()'", () => {
    test('Its defined', () => {
        expect(getCorrdinates).toBeDefined();
    });
  
    test('It is a function', () => {
        expect(typeof getCorrdinates).toBe("function");
    });
  });