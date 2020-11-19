'use strict';

class Thermostat{
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20;
    this.maximumTemperature = 32;
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if(++this.temperature > this.maximumTemperature) {
      this.temperature = this.maximumTemperature;
    };
    return this.temperature;
  };

  down() {
    if (--this.temperature < this.MINIMUM_TEMPERATURE) {
      this.temperature = this.MINIMUM_TEMPERATURE;
    };
    return this.temperature;
  };

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
    return 'System reset to defaults';
  };
};
