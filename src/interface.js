$(document).ready(function() {
  let thermostat = new Thermostat();
  $('#temp001').text('22');
  $('#temp002').text('18');

  $('#temp002').text(thermostat.getCurrentTemperature());
});
