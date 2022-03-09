import tw from 'twin.macro';
import { useQuery } from '@apollo/client';
import { LOAD_DATA } from '@hiring-datascience-frontend-scaffold/app/queries'
import { useLocation } from 'react-router-dom';
import { Subheading} from '../subheading/subheading'

/* eslint-disable-next-line */
export interface DetailProps {
}

const StyledDetail = tw.div`
  text-center
  w-full
`;

const Table = tw.table`
  w-full
  text-left
  text-sm
  border
  border-white
  border-solid
`;
const Tr = tw.tr`bg-[#341f1f]`;

const A = tw.a`
  text-white
  font-bold
  no-underline
`;

type Record = {
  __typename: string,
  name: string,
  title: string
}

export function Detail(props: DetailProps) {
  const location = useLocation();
   // will need all the data for graphing
  const { error, loading, data } = useQuery(LOAD_DATA);
  if (error) {
    return <div>`Error . ${error}`</div>;
  }
  if (loading) {
    return <div>Loading....</div>
  }

  let recordName = "";
  if (location.state) {
    recordName = '';
  }
 

  recordName = location.pathname.replace(/-/g, "").replace(/\s/g,'').split("/")[2];

  const allData = data.allPeople.people
    .concat(data.allPlanets.planets)
    .concat(data.allStarships.starships);

  let record = allData.find((x: Record) => x.name.replace(/-/g, "").replace(/\s/g,'') === recordName.replace(/-/g, "").replace(/\s/g,''));

  if (!record) {
    recordName = recordName.replace(/-/g, "").replace(/\s/g,'');
    record = allData.find((x: Record) => x.name.replace(/-/g, "").replace(/\s/g,'') === recordName);
  };

  return (
    <StyledDetail>
      <Subheading text={'Viewing details for: "' + record.name + '"'} />
      {(record.__typename === 'Person') ? 
        <Table>
          <tbody>
          <Tr key="Name"><td>Name: </td><td>{record.name}</td></Tr>
          <Tr key="Name"><td>Birth Year: </td><td>{record.birthYear}</td></Tr>
          <Tr key="Name"><td>Eye Color: </td><td>{record.eyeColor}</td></Tr>
          <Tr key="Name"><td>Gender: </td><td>{record.gender}</td></Tr>
          <Tr key="Name"><td>Hair Color: </td><td>{record.hairColor}</td></Tr>
          <Tr key="Name"><td>Mass: </td><td>{record.mass}</td></Tr>
          <Tr key="Name"><td>Skin Color: </td><td>{record.skinColor}</td></Tr>
          <Tr key="Name"><td>Homeworld: </td><td>{record.homeworld ? <A href={`/planet/${record.homeworld.name.replace(/\s/g,'-')}`}>{record.homeworld.name}</A> : ''}</td></Tr>
          <Tr key="Name"><td>Species: </td><td>{record.species ? record.species.name : ''}</td></Tr>
          <Tr key="Name"><td>Starships: </td><td>{record.starshipConnection.starships.map((x: Record) => <A href={`/starships/${x.name.replace(/\s/g,'-')}`}>{x.name} &nbsp;</A> )  }</td></Tr>
          <Tr key="Name"><td>Vehicles: </td><td>{record.vehicleConnection.vehicles.map((x: Record) => x.name).join(", ")}</td></Tr>
          </tbody>
        </Table>
      : (record.__typename === 'Planet') ? 
        <Table>
            <tbody>
            <Tr key="Name"><td>Name: </td><td>{record.name}</td></Tr>
            <Tr key="Name"><td>Population: </td><td>{record.population}</td></Tr>
            <Tr key="Name"><td>Climates: </td><td>{record.climates.join(", ")}</td></Tr>
            <Tr key="Name"><td>Diameter: </td><td>{record.diameter}</td></Tr>
            <Tr key="Name"><td>Gravity: </td><td>{record.gravity}</td></Tr>
            <Tr key="Name"><td>Orbital Period: </td><td>{record.orbitalPeriod}</td></Tr>
            <Tr key="Name"><td>Rotation Period: </td><td>{record.rotationPeriod}</td></Tr>
            <Tr key="Name"><td>Surface Water: </td><td>{record.surfaceWater}</td></Tr>
            <Tr key="Name"><td>Terrains: </td><td>{record.terrains.join(", ")}</td></Tr>
            <Tr key="Name"><td>Residents: </td><td>{record.residentConnection.residents.map((x: Record) => <A href={`/people/${x.name.replace(/\s/g,'-')}`}>{x.name} &nbsp;</A>)}</td></Tr>
            <Tr key="Name"><td>Films: </td><td>{record.filmConnection.films.map((x: Record) => x.title).join(", ")}</td></Tr>
            </tbody>
          </Table>
      : (record.__typename === 'Starship') ?
          <Table>
            <tbody>
              <Tr><td>Name: </td><td>{record.name}</td></Tr>
              <Tr><td>Model: </td><td>{record.model}</td></Tr>
              <Tr><td>Cost In Credits: </td><td>{record.costInCredits}</td></Tr>
              <Tr><td>Manufacturers: </td><td>{record.manufacturers.join(", ")}</td></Tr>
              <Tr><td>Max Atmosphering Speed: </td><td>{record.maxAtmospheringSpeed}</td></Tr>
              <Tr><td>Starship Class: </td><td>{record.starshipClass}</td></Tr>
              <Tr><td>Length: </td><td>{record.length}</td></Tr>
              <Tr><td>Cargo Capacity: </td><td>{record.cargoCapacity}</td></Tr>
              <Tr><td>Consumables: </td><td>{record.consumables}</td></Tr>
              <Tr><td>Passengers: </td><td>{record.passengers}</td></Tr>
              <Tr><td>Crew: </td><td>{record.crew}</td></Tr>
              <Tr><td>Hyperdrive Rating: </td><td>{record.hyperdriveRating}</td></Tr>
              <Tr><td>MGLT: </td><td>{record.MGLT}</td></Tr>
              <Tr><td>Pilots: </td><td>{record.pilotConnection.pilots.map((x: Record) => <A href={`/people/${x.name.replace(/\s/g,'-')}`}>{x.name} &nbsp;</A>)}</td></Tr>
              <Tr><td>Films: </td><td>{record.filmConnection.films.map((x: Record) => x.title).join(", ")}</td></Tr>
            </tbody>
          </Table> : ''
      }
      
    </StyledDetail>
  );
}

export default Detail;
