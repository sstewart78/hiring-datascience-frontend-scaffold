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
`;

const Table = tw.table`
  w-full md:w-1/2
  text-left
  border
  border-white
  border-solid
`;
const Tr = tw.tr`

`;
type Person = {
  __typename: string,
  name: string,
  birthYear: string,
  eyeColor: string,
  gender: string,
  hairColor: string,
  height: string,
  id: number,
  mass: string,
  skinColor: string,
  homeworld: string[],
  starshipConnection: object,
  vehicleConnection: object,
  vehicles: string[],
  species: string[],
}
type Planet = {
  __typename: string,
  name: string,
}
type Starship = {
  __typename: string,
  name: string,

}

export function Detail(props: DetailProps) {
  const location = useLocation();
  const { error, loading, data } = useQuery(LOAD_DATA);
  if (error) {
    return <div>`Error . ${error}`</div>;
  }
  if (loading) {
    return <div>Loading....</div>
  }
  
  const record = location.state;
  console.log(record);

  return (
    <StyledDetail>
      <Subheading text={'Viewing details for: "Fluke Flywalker"'} />
      <Table>
        <tr><td>Name: </td><td>Fluke Flywalker</td></tr>
        <tr><td>Hair Color: </td><td>Brown</td></tr>
        <tr><td>Eye Color: </td><td>Blue</td></tr>
        <tr><td>Skin Color: </td><td>Blinding</td></tr>
        <tr><td>Homeworld: </td><td>Fly Planet</td></tr>
        <tr><td>Species: </td><td>Fly</td></tr>
      </Table>
      
    </StyledDetail>
  );
}

export default Detail;
