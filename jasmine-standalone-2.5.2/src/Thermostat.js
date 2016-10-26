'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this._temperature = this.DEFAULT_TEMP;
  this._powerSaving = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.PSM_ON_MAX = 25;
  this.PSM_OFF_MAX = 32;
  this.MEDIUM_USAGE = 18;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.temperatureUp = function() {
  if (this._powerSaving) {
    this._temperature =  this._temperature  < this.PSM_MAX ? this._temperature + 1 : 25;
  } else {
    this._temperature =  this._temperature  < this.PSM_OFF_MAX ? this._temperature + 1 : 32;
  }
};

Thermostat.prototype.temperatureDown = function() {
  this._temperature =  this._temperature  >  this.MINIMUM_TEMPERATURE ? this._temperature - 1 : 10;

};

Thermostat.prototype.isOnPowerSaving = function (){
  this._powerSaving = !this._powerSaving;
};

Thermostat.prototype.reset = function () {
  this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.usage = function () {
  if (this._temperature < this.MEDIUM_USAGE) {
    return "Low-usage";
  }
  if (this._temperature >= this.MEDIUM_USAGE && this._temperature < this.PSM_ON_MAX) {
    return "Medium-usage";
  }
    return "High-usage";
};

$( document ).ready(function() {
    var thermo = new Thermostat();

    $( "#temp_up" ).click(function( event ) {
      thermo.temperatureUp();
      alert (thermo.temperature());
    });

    $( "#temp_down" ).click(function( event ) {
      thermo.temperatureDown();
      alert (thermo.temperature());
    });

    $( "#reset" ).click(function( event ) {
      thermo.reset();
      alert (thermo.temperature());
    });

    $( "#power_saving" ).click(function( event ) {
      alert (thermo.isOnPowerSaving());
    });
});
