'use strict';

describe('Thermostat with Energy Manager', () => {
  let thermostatPlus;
  beforeEach( () => {
    thermostatPlus = new EnergyManager;
  });

  it('US5 1- thermostatPlus in powerSaveMode by default', () => {
    expect(thermostatPlus.isInPowerSaveMode()).toBeTruthy();
  });

  it('US5 2- user able to switch thermostatPlus powerSaveMode on/off', () => {
    thermostatPlus.switchPowerSaveMode();

    expect(thermostatPlus.isInPowerSaveMode()).toBeFalsy();
    thermostatPlus.switchPowerSaveMode();

    expect(thermostatPlus.isInPowerSaveMode()).toBeTruthy();
    thermostatPlus.switchPowerSaveMode();

    expect(thermostatPlus.isInPowerSaveMode()).toBeFalsy();
  });

  it('US6 - thermostatPlus in powerSaveMode - max temp 25 DegC', () => {
    let i;
    for(i=1; i<=15; i++) {
      thermostatPlus.up();
    };

    expect(thermostatPlus.isInPowerSaveMode()).toBeTruthy();
    expect(thermostatPlus.getCurrentTemperature()).toEqual(25);
  });

  it('US7 2- thermostatPlus NOT in powerSaveMode - max temp 32 DegC', () => {
    thermostatPlus.switchPowerSaveMode();
    let i;
    for(i=1; i<=15; i++) {
      thermostatPlus.up();
    };

    expect(thermostatPlus.isInPowerSaveMode()).toBeFalsy();
    expect(thermostatPlus.getCurrentTemperature()).toEqual(32);
  });

  it('US8 2- thermostatPlus Reset function - default temp=20DegC, powerSaveMode ON', () => {
    thermostatPlus.switchPowerSaveMode();
    let i;
    for(i=1; i<=15; i++) {
      thermostatPlus.up();
    };
    thermostatPlus.reset();

    expect(thermostatPlus.isInPowerSaveMode()).toBeTruthy();
    expect(thermostatPlus.getCurrentTemperature()).toEqual(20);
  });

  it("US9 1- thermostatPlus returns 'Low' energyUsage for temperature <18", () => {
    let i;
    for(i=1; i<=5; i++) {
      thermostatPlus.down();
    };

    expect(thermostatPlus.getCurrentTemperature()).toBeLessThan(18);
    expect(thermostatPlus.getEnergyUsageBand()).toEqual('low');
  });

  it("US9 2- thermostatPlus returns 'medium' energyUsage for temperature <=25", () => {
    let i;
    for(i=1; i<=5; i++) {
      thermostatPlus.up();
    };

    expect(thermostatPlus.getCurrentTemperature()).toBeGreaterThan(17);
    expect(thermostatPlus.getCurrentTemperature()).toBeLessThan(26);
    expect(thermostatPlus.getEnergyUsageBand()).toEqual('medium');
  });

  it("US9 3- thermostatPlus returns 'high' energyUsage for temperature >25", () => {
    thermostatPlus.switchPowerSaveMode();
    let i;
    for(i=1; i<10; i++) {
      thermostatPlus.up();
    };

    expect(thermostatPlus.getCurrentTemperature()).toBeGreaterThan(25);
    expect(thermostatPlus.getEnergyUsageBand()).toEqual('high');
  });
});
