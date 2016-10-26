'use strict';

function Thermostat() {
  this._temperature = 20;
  this._powersaving = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.temperatureUp = function() {
  if (this._powerSaving) {
    this._temperature =  this._temperature  < 25 ? this._temperature + 1 : 25;
  } else {
    this._temperature =  this._temperature  < 32 ? this._temperature + 1 : 32;
  }
};

Thermostat.prototype.temperatureDown = function() {
  this._temperature =  this._temperature  > 10 ? this._temperature - 1 : 10;

};

Thermostat.prototype.powerSaving = function (){
  this._powersaving = !this._powersaving;
};

Thermostat.prototype.reset = function () {
  this._temperature = 20
};

Thermostat.prototype.usage = function () {
  if (this._temperature < 18) {
    return "Low-usage";
  }
  else if (this._temperature < 25 ) {
    return "Medium-usage";
  }
    return "High-usage";
};
