import { Button } from '../button/button';
import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface NavbarProps {
}

const Nav = tw.nav`
`;
const Ul = tw.ul`
  flex
  list-none
`;
const Li = tw.li`
`;

export function Navbar(props: NavbarProps) {

  return (
      <Nav>
        <Ul>
          <Li><Button text="Home" link="/" /></Li>
        </Ul>
      </Nav>
  );
}

export default Navbar;
