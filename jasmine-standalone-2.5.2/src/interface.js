$( document ).ready(function() {
    var thermo = new Thermostat();

    document.getElementById("current_temp").innerHTML=thermo.temperature();

    $( "#temp_up" ).click(function( event ) {
      thermo.temperatureUp();
      document.getElementById("current_temp").innerHTML=thermo.temperature();
    });

    $( "#temp_down" ).click(function( event ) {
      thermo.temperatureDown();
      document.getElementById("current_temp").innerHTML=thermo.temperature();
    });

    $( "#reset" ).click(function( event ) {
      thermo.reset();
      document.getElementById("current_temp").innerHTML=thermo.temperature();
    });

    $( "#power_saving" ).click(function( event ) {
      alert (thermo.isOnPowerSaving());
    });


});
