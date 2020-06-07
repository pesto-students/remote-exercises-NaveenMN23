import { alphabeticShift } from "./alphabeticShift";

describe("Alphabetic Shift Test Cases", () => {
  it("returns a shifted string", () => {
    expect(alphabeticShift("Pseudopseudohypoparathyroidism")).toEqual(
      "Qtfvepqtfvepizqpqbsbuizspjejtn"
    );

    expect(alphabeticShift("Floccinaucinihilipilification")).toEqual(
      "Gmpddjobvdjojijmjqjmjgjdbujpo"
    );

    expect(alphabeticShift("Floccinaucinihilipilification")).toEqual(
      "Gmpddjobvdjojijmjqjmjgjdbujpo"
    );

    expect(alphabeticShift("Antidisestablishmentarianism")).toEqual(
      "Boujejtftubcmjtinfoubsjbojtn"
    );

    expect(alphabeticShift("supercalifragilisticexpialidocious")).toEqual(
      "tvqfsdbmjgsbhjmjtujdfyqjbmjepdjpvt"
    );

    expect(alphabeticShift("Zupercalifragilisticexpializocious")).toEqual(
      "Avqfsdbmjgsbhjmjtujdfyqjbmjapdjpvt"
    );
  });
  it("returns false, if string contains invalid characters", () => {
    expect(alphabeticShift("Zuperca[ifragilisticexpializocious")).toEqual(
      false
    );
  });
});
