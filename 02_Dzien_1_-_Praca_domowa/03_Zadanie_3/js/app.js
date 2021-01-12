const planets = [
  {
    name: "Merkury",
    numberOfMoons: 0
  },
  {
    name: "Wenus",
    numberOfMoons: 0
  },
  {
    name: "Ziemia",
    numberOfMoons: 1
  },
  {
    name: "Mars",
    numberOfMoons: 2
  },
  {
    name: "Jowisz",
    numberOfMoons: 63
  },
  {
    name: "Saturn",
    numberOfMoons: 60
  },
  {
    name: "Uran",
    numberOfMoons: 27
  },
  {
    name: "Neptun",
    numberOfMoons: 13
  }
];

function sortPlanet(planets) {
  return planets.sort(function (planet1, planet2) {
    return planet1.numberOfMoons - planet2.numberOfMoons;
  });
}

for (let i = 0; i <planets.length; i++) {
  console.log(planets[i].name + " " + planets[i].numberOfMoons);
}

const sortedPlanets=sortPlanet(planets);
for (let i = 0; i <sortedPlanets.length; i++) {
  console.log(sortedPlanets[i].name + " " + sortedPlanets[i].numberOfMoons);
}