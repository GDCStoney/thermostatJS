describe("Weather", function() {
  it("should return a weather state", function() {

    expect(new Weather).toBeDefined();
  });

  it('should return stormy if random locked to 0', () => {
    spyOn(Math, 'random').and.returnValue(0);
    const airport_weather = new Weather;
    expect(airport_weather.look()).toEqual('Stormy');
  });

  it('should return snowy if random locked to 3', () => {
    spyOn(Math, 'random').and.returnValue(3/7);
    const airport_weather = new Weather;
    expect(airport_weather.look()).toEqual('Snowy');
  });
});
