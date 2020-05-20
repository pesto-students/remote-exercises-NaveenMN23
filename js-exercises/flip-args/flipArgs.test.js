import { flipArgs } from './flipArgs';

describe('flip the given args', () => {
    it('should get the correct result when no args passed', () => {
        const functionToIncrementValue = x => x.map((element) => element*1);
        let flipped = flipArgs(functionToIncrementValue)
        expect(flipped()).toEqual([]);
    });
    it('should get the correct result when args passed', () => {
        const functionToIncrementValue = x => x.map((element) => element*1);
        let flipped = flipArgs(functionToIncrementValue)
        expect(flipped(7,2,4,1,3)).toEqual([3,1,4,2,7]);
    });
    it('should get the correct result when args passed for names', () => {
        const functionToIncrementValue = x => x.map((element) => element);
        let flipped = flipArgs(functionToIncrementValue)
        expect(flipped("first name","last name")).toEqual(["last name","first name"]);
    });
    it('should get the correct result when args passed', () => {
        const functionToIncrementValue = x => x.map((element) => element+1);
        let flipped = flipArgs(functionToIncrementValue)
        expect(flipped(7,2,4,1,3)).toEqual([4,2,5,3,8]);
    });
});
