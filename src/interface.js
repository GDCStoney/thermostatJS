$(document).ready(function() {
  let thermostat = new Thermostat();
  $('#basicStatus').text(thermostat.getCurrentTemperature());
  $('#basicTop').click(() => {
    thermostat.up();
    $('#basicStatus').text(thermostat.getCurrentTemperature());
  });

  $('#basicBottom').click(() => {
    thermostat.down();
    $('#basicStatus').text(thermostat.getCurrentTemperature());
  });

  $('#basicStatus').dblclick(() => {
    thermostat.reset();
    $('#basicStatus').text(thermostat.getCurrentTemperature());
  });

  let thermostatPlus = new ThermostatPlus();

  const setEnergyBand = () => {
    switch (thermostatPlus.getEnergyUsageBand()) {
      case 'low':
        $('.plusButtons').prop('classList').add('usageLow');
        $('.plusButtons').prop('classList').remove('usageMedium');
        $('.plusButtons').prop('classList').remove('usageHigh');
        break;
      case 'medium':
        $('.plusButtons').prop('classList').remove('usageLow');
        $('.plusButtons').prop('classList').add('usageMedium');
        $('.plusButtons').prop('classList').remove('usageHigh');
        break;
      case 'high':
        $('.plusButtons').prop('classList').remove('usageLow');
        $('.plusButtons').prop('classList').remove('usageMedium');
        $('.plusButtons').prop('classList').add('usageHigh');
        break;
      default:
        alert('No usage Info');
    };
  };

  $('#plusStatus').text(thermostat.getCurrentTemperature());
  $('#plusPowerSaveStatus').prop('checked',thermostatPlus.isInPowerSaveMode());
  setEnergyBand();

  $('#plusTop').click(() => {
    thermostatPlus.up();
    setEnergyBand();
    $('#plusStatus').text(thermostatPlus.getCurrentTemperature());
  });

  $('#plusBottom').click(() => {
    thermostatPlus.down();
    setEnergyBand();
    $('#plusStatus').text(thermostatPlus.getCurrentTemperature());
  });

  $('#plusStatus').dblclick(() => {
    thermostatPlus.reset();
    $('#plusStatus').text(thermostatPlus.getCurrentTemperature());
    $('#plusPowerSaveStatus').prop('checked', thermostatPlus.isInPowerSaveMode());
  });

  $('#plusPowerSaveStatus').click(() => {
    thermostatPlus.switchPowerSaveMode();
    $('#plusStatus').text(thermostatPlus.getCurrentTemperature());
    $('#plusPowerSaveStatus').prop('checked', thermostatPlus.isInPowerSaveMode());
    setEnergyBand();  
  });
});
