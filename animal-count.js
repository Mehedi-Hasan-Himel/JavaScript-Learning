// Village to Forest 0 - 10 kilo = per kilo 10 animals.

// Village to Forest 10 - 20 kilo = per kilo 50 animals.

// Village to Forest 20+  kilo = per kilo 100 animals.

function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensitySecond10Miles = 50;
  const animalDensityRestMiles = 100;
  if (miles <= 10) {
    const Count = miles * animalDensityFirst10Miles;
    return Count;
  } else if (miles <= 20) {
    const firstDenseAnimals = 10 * animalDensityFirst10Miles;

    const restMiles = miles - 10;

    const secondDenseAnimals = restMiles * animalDensitySecond10Miles;

    const totalAnimals = firstDenseAnimals + secondDenseAnimals;

    return totalAnimals;
  } else {
    const firstDenseAnimals = 10 * animalDensityFirst10Miles;

    const secondDenseAnimals = 10 * animalDensitySecond10Miles;

    const restMiles = miles - 20;

    const animalDensityRestMiles = restMiles * 100;

    const restDenseAnimals = restMiles * animalDensityRestMiles;

    const totalAnimals =
      firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
    return totalAnimals;
  }
}

const animals = animalCount(25);

console.log(animals);
