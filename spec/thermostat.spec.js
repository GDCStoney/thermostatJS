'use strict';

describe('Thermostat', () => {
  let thermostat;
  beforeEach( () => {
    thermostat = new Thermostat();
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

  it('US5 1- thermostat in powerSaveMode by default', () => {
    expect(thermostat.isInPowerSaveMode()).toBeTruthy();
  });

  it('US5 2- user able to switch thermostat powerSaveMode on/off', () => {
    thermostat.switchPowerSaveMode();

    expect(thermostat.isInPowerSaveMode()).toBeFalsy();
    thermostat.switchPowerSaveMode();

    expect(thermostat.isInPowerSaveMode()).toBeTruthy();
    thermostat.switchPowerSaveMode();

    expect(thermostat.isInPowerSaveMode()).toBeFalsy();
  });

  it('US6 - thermostat in powerSaveMode - max temp 25 DegC', () => {
    let i;
    for(i=1; i<=15; i++) {
      thermostat.up();
    };

    expect(thermostat.isInPowerSaveMode()).toBeTruthy();
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('US7 - thermostat NOT in powerSaveMode - max temp 32 DegC', () => {
    thermostat.switchPowerSaveMode();
    let i;
    for(i=1; i<=15; i++) {
      thermostat.up();
    };

    expect(thermostat.isInPowerSaveMode()).toBeFalsy();
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('US8 - Reset function [temp=20DegC, PowerSaveMode ON]', () => {
    thermostat.switchPowerSaveMode();
    let i;
    for(i=1; i<=15; i++) {
      thermostat.up();
    };
    thermostat.reset();

    expect(thermostat.isInPowerSaveMode()).toBeTruthy();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("US9 1- returns 'Low' energyUsage for temperature <18", () => {
    let i;
    for(i=1; i<=5; i++) {
      thermostat.down();
    };

    expect(thermostat.getCurrentTemperature()).toBeLessThan(18);
    expect(thermostat.getEnergyUsageBand()).toEqual('low');
  });

  it("US9 2- returns 'medium' energyUsage for temperature <=25", () => {
    let i;
    for(i=1; i<=5; i++) {
      thermostat.up();
    };

    expect(thermostat.getCurrentTemperature()).toBeGreaterThan(17);
    expect(thermostat.getCurrentTemperature()).toBeLessThan(26);
    expect(thermostat.getEnergyUsageBand()).toEqual('medium');
  });

  it("US9 3- returns 'high' energyUsage for temperature >25", () => {
    thermostat.switchPowerSaveMode();
    let i;
    for(i=1; i<10; i++) {
      thermostat.up();
    };

    expect(thermostat.getCurrentTemperature()).toBeGreaterThan(25);
    expect(thermostat.getEnergyUsageBand()).toEqual('high');
  });

});
