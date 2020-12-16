const enhancer = require('./enhancer.js');

describe('Sanity Checks:', () => {
    it('check 1', () => {
        expect(2 + 2).toBe(4);
    });
    test('check 2', () => {
        expect({}).toEqual({})
        expect({}).not.toBe({})
    })
})