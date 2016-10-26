'use strict';

describe ("testing temperature", function (){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ("default temperature is set to 20degrees", function() {
    expect(thermostat.temperature()).toBe(20);
  });

  it ("calling up increase temperature", function () {
    thermostat.temperatureUp();
    expect(thermostat.temperature()).toBe(21);
  });

  it ("calling up decrease temperature", function () {
    thermostat.temperatureDown();
    expect(thermostat.temperature()).toBe(19);
  });

  it ("can't go below 10degrees", function(){
    for (var i = 1; i < 11; i++) {
      thermostat.temperatureDown();
    };
    expect(thermostat.temperature()).toBe(10);
  });

  it ("can't go above 25 degrees", function(){
    for (var i = 1; i < 6; i++) {
      thermostat.temperatureUp();
    };
    expect(thermostat.temperature()).toBe(25);
  });

  it ("resets to 20degress", function(){
    thermostat.temperatureUp();
    thermostat.reset();
    expect(thermostat.temperature()).toBe(20);
  });

  describe ("power saving off", function() {

    it ("can't go above 32 degrees", function(){
      thermostat.isOnPowerSaving();
      for(var i =1; i< 14; i++) {
        thermostat.temperatureUp();
      };
      expect(thermostat.temperature()).toBe(32);

    });
  });

  describe ("checking usage", function() {
    it ("expects to be Medium, temp = <25", function() {
      expect(thermostat.usage()).toBe("Medium-usage");
    });
    it ("expects to be Low, temp = <18", function() {
      for(var i =1; i< 5; i++) {
        thermostat.temperatureDown();
      };
      expect(thermostat.usage()).toBe("Low-usage");
    });
    it ("expects to be high, temp => 25", function() {
      thermostat.isOnPowerSaving();
      for(var i =1; i< 6; i++) {
        thermostat.temperatureUp();
      };
      expect(thermostat.usage()).toBe("High-usage");
    });
  });

});
