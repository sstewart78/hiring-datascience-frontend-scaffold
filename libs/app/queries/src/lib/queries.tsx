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
      height
      id
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
      id
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
      created
      edited
    }
    totalCount
  }
  allStarships {
    totalCount
    starships {
      name
      id
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
      created
      edited
    }
  }
}
`;
