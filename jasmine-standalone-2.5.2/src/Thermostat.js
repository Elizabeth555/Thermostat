'use strict';

function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.temperatureUp = function() {
  this._temperature += 5;
};

Thermostat.prototype.temperatureDown = function() {
  this._temperature =  this._temperature  > 10 ? this._temperature - 5 : 10;

};
