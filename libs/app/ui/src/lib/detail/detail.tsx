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
const Td = tw.td`
  px-2
  border-0 border-b border-white border-solid
`;
const Tr = tw.tr`bg-[#341f1f]`;

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
  console.log(record);
  return (
    <StyledDetail>
      <Subheading text={'Viewing details for: "' + record.name + '"'} />
      <Table>
        <tbody>
          {
            Object.keys(record)
            .filter((x) => x !== "__typename")
            .map(key => (
              <Tr key={key}>
                {key !== "__typename"}
                <Td>{key === "starshipConnection" ? 'starships' 
                : key === "vehicleConnection" ? 'vehicles'
                : key === "pilotConnection" ? 'pilots'
                : key === "filmConnection" ? 'films'
                : key === "residentConnection" ? 'films'
                : key}</Td><Td>
                {typeof(record[key]) === "string" || typeof(record[key]) === "number" 
                ? record[key] 
                : ''
                }
              {
                  (key === "homeworld" && record.homeworld) ? record.homeworld.name 
                : (key === "species" && record.species) ? record.species.name
                : key === "manufacturers" && record.manufacturers ? record.manufacturers.join(", ")
                : key === "climates" && record.climates ? record.climates.join(", ")
                : key === "terrains" && record.climates ? record.climates.join(", ")
                : key === "residentConnection" ? record.residentConnection.residents.map((x: Record) => x.name).join(", ")
                : key === "starshipConnection" ? record.starshipConnection.starships.map((x: Record) => x.name).join(", ")
                : key === "vehicleConnection" ? record.vehicleConnection.vehicles.map((x: Record) => x.name).join(", ")
                : key === "pilotConnection" ? record.pilotConnection.pilots.map((x: Record) => (x.name)).join(", ")
                : key === "filmConnection" ? record.filmConnection.films.map((x: Record) => x.title).join(", ")
                : ''
              }
                </Td> 
                
              </Tr>
            ))
          }
        </tbody>
      </Table>
    </StyledDetail>
  );
}

export default Detail;
