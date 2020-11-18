describe("Plane", function () {
  it("responds to land", function() {
    let airport = new Airport("Test", new Weather);
    spyOn(airport, 'land');
    let plane = new Plane('Landed', airport);
    expect(airport.land).toHaveBeenCalled();
  });

  it('does not take off when stormy', () => {
    const airport01 = new Airport('Airport01', new Weather);
    const airport02 = new Airport('Airport02', new Weather);
    const plane = new Plane('Test Plane', airport01);
    plane.destination = airport02;

    spyOn(airport01.weather, "look").and.returnValue('Stormy');

    expect(plane.takeOff(airport02)).toContain('Weather is Stormy');
  });
});
