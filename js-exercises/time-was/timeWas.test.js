import { timeWas } from "./timeWas";

describe("timeWas", () => {
  // now -- 2018-01-24T17:51:30+00:00 (ISO 8601)
  const NOW = 1516816290;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  // overrides Date.now()
  Date.now = jest.fn(() => NOW);

  it("should mock Date.now()", () => {
    expect(Date.now()).toBe(NOW);
  });

  it('should be "just now"', () => {
    expect(timeWas(NOW, NOW)).toBe("just now");
    expect(timeWas(NOW - 1, NOW)).toBe("just now");
  });

  it('should be "5 seconds ago"', () => {
    expect(timeWas(NOW - 5 * SECONDS, NOW)).toBe("5 seconds ago");
  });

  it('should be "32 seconds ago"', () => {
    expect(timeWas(NOW - 32 * SECONDS, NOW)).toBe("32 seconds ago");
  });

  it('should be "1 minute ago"', () => {
    expect(timeWas(NOW - 1 * MINUTES, NOW)).toBe("1 minute ago");
  });

  it('should be "5 minutes ago"', () => {
    expect(timeWas(NOW - 5 * MINUTES, NOW)).toBe("5 minutes ago");
  });

  it('should be "15 minutes ago"', () => {
    expect(timeWas(NOW - 15 * MINUTES, NOW)).toBe("15 minutes ago");
  });

  it('should be "2 hours ago"', () => {
    expect(timeWas(NOW - 2 * HOURS, NOW)).toBe("2 hours ago");
  });

  it('should be "3 days ago"', () => {
    expect(timeWas(NOW - 3 * DAYS, NOW)).toBe("3 days ago");
  });

  it('should be "4 weeks ago"', () => {
    expect(timeWas(NOW - 4 * WEEKS, NOW)).toBe("4 weeks ago");
  });

  it('should be "5 months ago"', () => {
    expect(timeWas(NOW - 5 * MONTHS, NOW)).toBe("5 months ago");
  });

  it('should be "6 years ago"', () => {
    expect(timeWas(NOW - 6 * YEARS, NOW)).toBe("6 years ago");
  });

  it("should be 10 seconds ago", () => {
    const n = 1514764800; // Monday, January 1, 2018 12:00:00 AM
    expect(timeWas(n - 10 * SECONDS, n)).toBe("10 seconds ago");
  });
});
