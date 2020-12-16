const enhancer = require('./enhancer.js');

describe('Sanity Checks:', () => {
    it('check 1', () => {
        expect(2 + 2).toBe(4);
    });
    test('check 2', () => {
        expect({}).toEqual({});
        expect({}).not.toBe({});
    });
});

describe('Repair Function Tests:', () => {
    beforeEach(() => {
        item = {
            name: "axe",
            durability: 75,
            enhancement: 10
        };
    });

    it('item has durability', () => {
        expect(item.durability).toBe(75);
    });
    it('repairs item to maximum durability', () => {
        enhancer.repair(item);
        expect(item.durability).toBe(100);
    });
});

describe('Succesful Enhancement Tests:', () => {
    beforeEach(() => {
        item = {
            name: "axe",
            durability: 75,
            enhancement: 10
        };
    });

    it('does not increase enhancement at 20', () => {
        item.enhancement = 20;
        enhancer.success(item);
        expect(item.enhancement).toBe(20);
    });
    it('increases enhancement score by 1', () => {
        enhancer.success(item);
        expect(item.enhancement).toBe(11);
    });
})