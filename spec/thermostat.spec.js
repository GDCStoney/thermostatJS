'use strict';

describe('Thermostat', () => {
  let thermostat;
  beforeEach( () => {
    thermostat = new Thermostat;
  });

  it('US1 - defaults to 20 degrees on start', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('US2 - allows the user to increase the temperature', () => {
    expect(thermostat.up()).toBeGreaterThan(20);
  });

  it('US3 - allows the user to decrease the temperature', () => {
    expect(thermostat.down()).toBeLessThan(20);
  });

  it('US4 - minimum setting of 10 DegC', () => {
    let i;
    for(i=1; i<=12; i++) {
      thermostat.down();
    };

    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('US7 1- Basic thermostat - max temp 32 DegC', () => {
    let i;
    for(i=1; i<=25; i++) {
      thermostat.up();
    };

    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('US8 1- Reset function - default temp=20DegC', () => {
    let i;
    for(i=1; i<=15; i++) {
      thermostat.up();
    };
    thermostat.reset();

    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
