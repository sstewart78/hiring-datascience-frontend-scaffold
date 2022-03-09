import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import { useQuery } from '@apollo/client';
import { LOAD_DATA } from '@hiring-datascience-frontend-scaffold/app/queries'
import { Button } from '../button/button';
import { Subheading} from '../subheading/subheading'
import { Label } from '../label/label';
import { Welcome } from '../welcome/welcome';

/* eslint-disable-next-line */
export interface SearchProps {}

const StyledSearch = tw.div`
  text-white
  text-center
`;
// table styling
const Table = tw.table`
  table-auto
  text-xs
  border-collapse
  w-full
  border
  border-solid
  border-white
  text-black
  bg-[#d3e4f5]
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
  bg-[#d3e4f5]
  text-black
  hover:bg-black
  hover:text-white
  hover:cursor-pointer
`;
const Td = tw.td`
  px-3
`;
const Input = tw.input`
  w-full
  text-black
  text-lg
  p-1
  bg-gray-200 
  hover:bg-white 
  hover:border-gray-300 
  focus:outline-none 
  focus:bg-white
  focus:border-gray-300
`;
const Checkbox = tw.input` 
  ml-8
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
  const [totalRecords, totalRecordsSet] = useState(0);
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

  // set up the checkbox filters
  const typeFilter : string[] = [];
  includePeople && typeFilter.push('Person'); 
  includePlanets && typeFilter.push('Planet');
  includeStarships && typeFilter.push('Starship');

  return (
    <StyledSearch>
      <Welcome text="You have accessed the central data hub for Imperial intelligence Operations. Please enter your search criteria below: " />
      <Input type="text" value={filter} onChange={(e) => filterSet(e.target.value.toLowerCase())} />
      <Checkbox type="checkbox" defaultChecked={includePeople} value="People" onChange={(e) => handleChange(e.target.value)} />
      <Label htmlFor="people" text="People" />
      <Checkbox type="checkbox" defaultChecked={includePlanets} value="Planets" onChange={(e) => handleChange(e.target.value)} />
      <Label htmlFor="planets" text="Planets" />
      <Checkbox type="checkbox" defaultChecked={includeStarships} value="Starships" onChange={(e) => handleChange(e.target.value)} />
      <Label htmlFor="starships" text="Starships" />
      <Subheading text={'Record(s) found:'} />
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
          .map((x: Record) => (
                <Tr key={x.name} onClick={() => handleClick(x)}>
                <Td>{x.name}</Td>
                <Td>{x.__typename}</Td>
                <Td><Button text="Details" link="" /></Td>
              </Tr>
            )) }
          </tbody> 
      </Table>
    </StyledSearch>
  );

}

export default Search;
