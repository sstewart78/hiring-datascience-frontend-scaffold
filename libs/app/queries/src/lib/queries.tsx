import { gql } from '@apollo/client';

export const LOAD_DATA = gql`
query GetAll {
  allPeople {
    people {
      name
      birthYear
      eyeColor
      gender
      hairColor
      mass
      skinColor
      homeworld {
        name
      }
      starshipConnection {
        starships {
          name
        }
      }
      vehicleConnection {
        vehicles {
          name
        }
      }
      species {
        name
      }
    }
    totalCount
  }
  allPlanets {
    planets {
      name
      population
      climates
      diameter
      gravity
      orbitalPeriod
      rotationPeriod
      surfaceWater
      terrains
      residentConnection {
        residents {
          name
        }
      }
      filmConnection {
        films {
          title
        }
      }
    }
    totalCount
  }
  allStarships {
    totalCount
    starships {
      name
      model
      manufacturers
      costInCredits
      maxAtmospheringSpeed
      starshipClass
      length
      cargoCapacity
      consumables
      passengers
      crew
      hyperdriveRating
      MGLT
      pilotConnection {
        pilots {
          name
        }
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
}
`;
