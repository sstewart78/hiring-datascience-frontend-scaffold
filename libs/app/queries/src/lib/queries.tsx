import { gql } from '@apollo/client';

export const LOAD_DATA = gql`
query GetAll {
  allPeople {
    people {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      mass
      skinColor
      homeworld {
        id
        name
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
      species {
        id
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
          id
          name
        }
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
    totalCount
  }
  allStarships {
    totalCount
    starships {
      id
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
          id
          name
        }
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
}
`;
