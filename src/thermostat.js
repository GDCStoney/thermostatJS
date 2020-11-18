'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.powerSaveMode = true;
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if(this.isInPowerSaveMode()) {
      if(++this.temperature > 25) {
        this.temperature = 25;
      };
    } else {
      if(++this.temperature > 32) {
        this.temperature = 32;
      };
    };
    return this.temperature;
  };

  down() {
    if (--this.temperature < 10) { this.temperature = 10; };
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
    if(this.getCurrentTemperature() <= 17) {
      return 'low';
    } else if(this.getCurrentTemperature() <=25) {
      return 'medium';
    } else {
      return 'high';
    };
  };
};
