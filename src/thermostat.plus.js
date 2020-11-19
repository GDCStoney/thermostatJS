'use strict';

class ThermostatPlus extends Thermostat {
  constructor () {
    super();
    this.maximumTemperature = 25;
    this.ENERGY_BAND_LIMIT_LOW = 17;
    this.ENERGY_BAND_LIMIT_MEDIUM = 25;
    this.powerSaveMode = true;
  };

  isInPowerSaveMode() {
    return this.powerSaveMode;
  };

  switchPowerSaveMode() {
    this.powerSaveMode = !this.powerSaveMode;
    if (this.isInPowerSaveMode()) {
      this.maximumTemperature = 25;
      if(this.getCurrentTemperature() > this.maximumTemperature) {
        this.temperature = this.maximumTemperature;
      };
    } else {
      this.maximumTemperature = 32;
    };
    return this.powerSaveMode;
  };

  reset() {
    if (!this.isInPowerSaveMode()) {
      this.switchPowerSaveMode();
    };
    super.reset();
  };

  getEnergyUsageBand() {
    if (this.getCurrentTemperature() <= this.ENERGY_BAND_LIMIT_LOW) {
      return 'low';
    } else if(this.getCurrentTemperature() <= this.ENERGY_BAND_LIMIT_MEDIUM) {
      return 'medium';
    } else {
      return 'high';
    };
  };
};
