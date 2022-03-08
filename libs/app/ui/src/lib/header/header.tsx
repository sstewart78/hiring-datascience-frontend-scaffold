import { Navbar} from '../navbar/navbar';
import { Heading } from '../heading/heading';
import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string,
}

const StyledHeader = tw.div`
    text-[chartreuse]
    flex 
    flex-row 
    flex-nowrap 
    justify-evenly 
    items-end
    px-8
    text-center
`;

export function Header(props: HeaderProps) {

  return (
    <StyledHeader>
      <Heading text={props.title}></Heading>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
