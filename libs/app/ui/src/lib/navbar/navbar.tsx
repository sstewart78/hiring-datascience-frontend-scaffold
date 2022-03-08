import { Button } from '../button/button';
import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface NavbarProps {

}

const StyledNavbar = tw.div`
`;

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
    <StyledNavbar>
      <Nav>
        <Ul>
          <Li><Button text="Home" link="/" /></Li>
        </Ul>
      </Nav>
    </StyledNavbar>
  );
}

export default Navbar;
