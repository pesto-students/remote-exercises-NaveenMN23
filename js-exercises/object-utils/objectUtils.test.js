import { map, filter, invert, merge, all, some } from "./objectUtils";

describe("object utils", () => {
  it("Map takes an object and transforms the (key, value) pair according to the callback function", () => {
    const convertStringToUpperCase = (inputString) => {
      return inputString.toUpperCase();
    };
    const convertSalaryToINR = (inputValue) => {
      return inputValue * 70;
    };
    const inputValue = [
      { name: "Test User 1", salary: 10000 },
      { name: "Test User 2", salary: 9000 },
      { name: "Test User 3", salary: 12000 },
      { name: "Test User 4", salary: 15000 },
      { name: "Test User 5", salary: 7000 },
    ];
    expect(
      map(inputValue, convertStringToUpperCase, convertSalaryToINR)
    ).toStrictEqual([
      ["TEST USER 1", 700000],
      ["TEST USER 2", 630000],
      ["TEST USER 3", 840000],
      ["TEST USER 4", 1050000],
      ["TEST USER 5", 490000],
    ]);
  });
  it("Filters on the basis of keys or values", () => {
    const searchValue = 10000;
    const inputValue = [
      { name: "Test User 1", salary: 10000 },
      { name: "Test User 2", salary: 9000 },
      { name: "Test User 3", salary: 12000 },
      { name: "Test User 4", salary: 15000 },
      { name: "Test User 5", salary: 7000 },
    ];
    expect(filter(inputValue, searchValue)).toStrictEqual([
      { name: "Test User 1", salary: 10000 },
      { name: "Test User 3", salary: 12000 },
      { name: "Test User 4", salary: 15000 },
    ]);
  });
  it("Invert key value pairs", () => {
    const inputValue = { 1: "Test", 2: "New", 3: "Test" };
    expect(invert(inputValue)).toStrictEqual({ Test: ["1", "3"], New: ["2"] });
  });
  it("Merge Objects", () => {
    const inputObject1 = { 1: "Test", 2: "New", 3: "Test" };
    const inputObject2 = { name: "Test User 1", salary: "10000" };
    const inputObject3 = {
      firstName: "Test",
      middleName: "User",
      lastName: "1",
    };
    expect(merge(inputObject1, inputObject2, inputObject3)).toStrictEqual({
      1: "Test",
      2: "New",
      3: "Test",
      name: "Test User 1",
      salary: "10000",
      firstName: "Test",
      middleName: "User",
      lastName: "1",
    });
  });
  it("Return true if all the elements less than specific value", () => {
    const isBelowThreshold = (currentValue) => currentValue > 50;
    const inputArray = [60, 80, 90, 70, 80];
    expect(all(inputArray, isBelowThreshold)).toBe(true);
  });
  it("Return false if all the elements less than specific value", () => {
    const isBelowThreshold = (currentValue) => currentValue > 50;
    const inputArray = [50, 40, 90, 70, 80];
    expect(all(inputArray, isBelowThreshold)).toBe(false);
  });
  it("Return true if some elements are less than specific value", () => {
    const isBelowThreshold = (currentValue) => currentValue > 50;
    const inputArray = [50, 40, 90, 70, 80];
    expect(some(inputArray, isBelowThreshold)).toBe(true);
  });
  it("Return false if none of the elements matches the condition", () => {
    const isBelowThreshold = (currentValue) => currentValue > 50;
    const inputArray = [10, 20, 30, 40, 20];
    expect(some(inputArray, isBelowThreshold)).toBe(false);
  });
});
