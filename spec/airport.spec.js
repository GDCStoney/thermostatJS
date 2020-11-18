describe("Airport", function() {
  it("should add plane to hanger", function() {
    let airport = new Airport("Gatwick", new Weather);
    const plane = new Plane('Test plane', airport)
    plane.destination = airport;
    plane.land();
    expect(airport.hanger).toContain(plane);
  });
});
