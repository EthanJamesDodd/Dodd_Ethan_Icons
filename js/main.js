// JavaScript Document

(() => {
  const tempClick = document.querySelector('#ThermoInner');
  const gearClick = document.querySelector("#Gear");
  const wholeGear = document.querySelector('#GearIcon');
  const mapClick = document.querySelector('#MapIcon');
  const wholeMap = document.querySelector('#MapMain');


  function tempChange(){
      tempClick.style.fill = "red";
    }

    function hoverGear(){
      wholeGear.classList.add('hoverGear');
    }

    function hoverMap(){
      wholeMap.classList.add('hoverMap');
    }

  tempClick.addEventListener('click', tempChange);
  gearClick.addEventListener('click', hoverGear);
  mapClick.addEventListener('click', hoverMap)

})();
