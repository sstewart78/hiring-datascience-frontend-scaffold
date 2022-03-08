import {gql } from '@apollo/client';

export const LOAD_PEOPLE = gql`
query Query {
  allPeople {
    people {
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        homeworld {
            name
        }
    } 
    
  }
}
`;
export const LOAD_PLANETS = gql`
  query GetAllPlanets {
    name
    diameter
    rotation_period
    orbital_period
    gravity
    population
    climate
    terrain
    surface_water
    residents 
    films
    url
  }
`;
export const LOAD_STARSHIPS = gql`
  query GetAllStarships {
    name
    model
    starship_class
    manufacturer
    cost_in_credits
    length
    crew
    passengers
    max_atmosphering_speed
    hyperdrive_rating
    MGLT
    cargo_capacity
    consumables
    films
    pilots
    url
  }
`;