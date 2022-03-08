import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import { useQuery } from '@apollo/client';
import { LOAD_DATA } from '@hiring-datascience-frontend-scaffold/app/queries'
import { Button } from '../button/button';
import { Subheading} from '../subheading/subheading'

/* eslint-disable-next-line */
export interface SearchProps {}

const StyledSearch = tw.div`
  text-white
  text-center
`;
const P = tw.p`
  w-[90%]
  text-left
  text-green-50
`;
// table styling
const Table = tw.table`
table-auto
  text-sm
  border-collapse
  w-full
  border
  border-solid
  border-white
  text-black
  bg-gray-300
  text-left
`;
const Thead = tw.thead`
  bg-black
  text-white
  font-extrabold
  text-base
  text-left
  px-3
`;
const Th = tw.th`
  bg-black
  text-white
  pl-1
`;
const Tr = tw.tr`
  border
  border-solid
  border-black
  bg-gray-200
  text-black
  hover:bg-black
  hover:text-white
  hover:cursor-pointer
`;
const Td = tw.td`
  py-1
  px-3
`;
const Input = tw.input`
  w-full
  text-black
  text-lg
  p-1
`;
const Checkbox = tw.input`
`;
const Label =  tw.label`
  text-white
  text-sm
  mx-1
`;

// Generic type for all "Person", "Planet", and "Starship"
type Record = {
  __typename: string,
  name: string
}

export function Search(props: SearchProps) {
  const navigate = useNavigate();
  const [filter, filterSet] = useState("");
  const [includePlanets, includePlanetsSet] = useState(true);
  const [includePeople, includePeopleSet] = useState(true);
  const [includeStarships, includeStarshipsSet] = useState(true);
  const { error, loading, data } = useQuery(LOAD_DATA);

  if (error) {
    return <div>`Error . ${error}`</div>;
  }
  if (loading) {
    return <div>Loading....</div>
  }

  // merge all the data so that sorting and filtering work correctly
  const allData = data.allPeople.people
    .concat(data.allPlanets.planets)
    .concat(data.allStarships.starships).sort((a: Record, b: Record) => {

      return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : 1;
    });

  // calculate the total number of records using the totalCount method from the api
  const totalRecords = allData.length;

  function handleClick(x: Record) {
    x.__typename === 'Person' ? navigate(`/people/${x.name.replace(/\s/g,'-')}`, { state: {x}})
    : x.__typename === 'Planet' ? navigate(`/planets/${x.name.replace(/\s/g,'-')}`, { state: {x}}) 
    : navigate(`/starships/${x.name.replace(/\s/g,'-')}`, { state: {x}});
  }

  // for the checkboxes
  function handleChange(val: string) {
    val === 'People' ? includePeopleSet(!includePeople)
      : 
    val === 'Planets' ? includePlanetsSet(!includePlanets)
      : // val === 'Starships'
      includeStarshipsSet(!includeStarships);
  };

  const typeFilter : string[] = [];
  includePeople && typeFilter.push('Person'); 
  includePlanets && typeFilter.push('Planet');
  includeStarships && typeFilter.push('Starship');

  console.log(includeStarships);
  return (
    <StyledSearch>
      <P>You have accessed the central data hub for Imperial intelligence Operations. Please enter your search criteria below:</P>
      <Input type="text" value={filter} onChange={(e) => filterSet(e.target.value.toLowerCase())} />
      <Checkbox type="checkbox" defaultChecked={includePeople} value="People" onChange={(e) => handleChange(e.target.value)} />
      <Label htmlFor="people">People</Label>
      <Checkbox type="checkbox" defaultChecked={includePlanets} value="Planets" onChange={(e) => handleChange(e.target.value)} />
      <Label htmlFor="people">Planets</Label>
      <Checkbox type="checkbox" defaultChecked={includeStarships} value="Starships" onChange={(e) => handleChange(e.target.value)} />
      <Label htmlFor="people">Starships</Label>
      <Subheading text={totalRecords + ' record(s) found:'} />
      <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <tbody>
          {allData
          .filter((x: Record) => x.name.toLowerCase().includes(filter))
          .filter((x: Record) => typeFilter.find((el) => el === x.__typename))
          //.filter((x: Record) => includePlanets && x.__typename === 'Planet')
          //.filter((x: Record) => includeStarships && x.__typename === 'Starship')
          //.slice(0,20)
          .map((x: Record) => (

                  <Tr key={x.name} onClick={() => handleClick(x)}>
              
                  
                <Td>{x.name}</Td>
                <Td>{x.__typename}</Td>
                <Td><Button text="Details..." link="" /></Td>
              </Tr>
            ))}
          </tbody> 
      </Table>
    </StyledSearch>
  );
}

export default Search;
