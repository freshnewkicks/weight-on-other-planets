      const planetData = {
        earth: 1.0,
        mars: 0.38,
        mercury: 0.38,
        venus: 0.91,
        uranus: 0.92,
        saturn: 1.06,
        neptune: 1.19,
        jupiter: 2.34,
        moon: 0.165
      }; 

      function getResult(){
        let get = document.getElementById('weight').value;
        

        let earthResult = Math.floor( get * planetData.earth);
        let marsResult = Math.floor( get * planetData.mars);
        let mercuryResult = Math.floor(get * planetData.mercury);
        let venusResult = Math.floor(get * planetData.venus);
        let uranusResult = Math.floor( get * planetData.uranus);
        let saturnResult = Math.floor( get * planetData.saturn);
        let neptuneResult = Math.floor(get * planetData.neptune);
        let jupiterResult = Math.floor(get * planetData.jupiter);
        let moonResult = Math.floor(get * planetData.moon);

        let displayEarth = document.getElementById('result-earth');
        displayEarth.innerHTML = earthResult;

        let displayMars = document.getElementById('result-mars');
        displayMars.innerHTML = marsResult;

        let displayMercury = document.getElementById('result-mercury');
        displayMercury.innerHTML = mercuryResult;

        let displayVenus = document.getElementById('result-venus');
        displayVenus.innerHTML = venusResult;

        let displayUranus = document.getElementById('result-uranus');
        displayUranus.innerHTML = uranusResult;

        let displaySaturn = document.getElementById('result-saturn');
        displaySaturn.innerHTML = saturnResult;

        let displayNeptune = document.getElementById('result-neptune');
        displayNeptune.innerHTML = neptuneResult;

        let displayJupiter = document.getElementById('result-jupiter');
        displayJupiter.innerHTML = jupiterResult;

        let displayMoon = document.getElementById('result-moon');
        displayMoon.innerHTML = moonResult;
      };