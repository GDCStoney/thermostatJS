'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20;
    this.MAXIMUM_TEMP_POWERSAVE_ON = 25;
    this.MAXIMUM_TEMP_POWERSAVE_OFF = 32;
    this.ENERGY_BAND_LIMIT_LOW = 17;
    this.ENERGY_BAND_LIMIT_MEDIUM = 25;
    this.powerSaveMode = true;
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if(this.isInPowerSaveMode()) {
      if(++this.temperature > this.MAXIMUM_TEMP_POWERSAVE_ON) {
        this.temperature = this.MAXIMUM_TEMP_POWERSAVE_ON;
      };
    } else {
      if(++this.temperature > this.MAXIMUM_TEMP_POWERSAVE_OFF) {
        this.temperature = this.MAXIMUM_TEMP_POWERSAVE_OFF;
      };
    };
    return this.temperature;
  };

  down() {
    if (--this.temperature < this.MINIMUM_TEMPERATURE) {
      this.temperature = this.MINIMUM_TEMPERATURE;
    };
    return this.temperature;
  };

  isInPowerSaveMode() {
    return this.powerSaveMode;
  };

  switchPowerSaveMode() {
    this.powerSaveMode = !this.powerSaveMode;
    return this.powerSaveMode;
  };

  reset() {
    this.powerSaveMode = true;
    this.temperature = this.DEFAULT_TEMPERATURE;
    return 'System reset to defaults';
  };

  getEnergyUsageBand() {
    if(this.getCurrentTemperature() <= this.ENERGY_BAND_LIMIT_LOW) {
      return 'low';
    } else if(this.getCurrentTemperature() <= this.ENERGY_BAND_LIMIT_MEDIUM) {
      return 'medium';
    } else {
      return 'high';
    };
  };
};
