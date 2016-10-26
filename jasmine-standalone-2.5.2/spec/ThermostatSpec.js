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
    expect(thermostat.temperature()).toBe(25);
  });

  it ("calling up decrease temperature", function () {
    thermostat.temperatureDown();
    expect(thermostat.temperature()).toBe(15);
  });

  it ("can't go below 10degrees", function(){
    for (var i = 1; i < 4; i++) {
      thermostat.temperatureDown();
      };
    expect(thermostat.temperature()).toBe(10)

  });
  
});
