'use strict';

describe('Thermostat', () => {
  it('defaults to 20 degrees on start', () => {
    expect(thermostat.currentTemperature).toEqual(20);
  });
});
