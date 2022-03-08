import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface ContentProps {

}

const StyledContent = tw.main`
pt-1.5
px-6
pb-8
`;
const Ul = tw.ul`
  list-none
  list-outside
  text-base
  pl-2
`;

export function Content(props: ContentProps) {
  return (
    <StyledContent>
<h1>Luke Skywalker</h1>
          <Ul>
            <li>Born: 456</li>
            <li>Hair color: Black</li>
            <li>Eye Color: Blue</li>
            <li>Homeworld: Tattooine</li>
          </Ul>
    </StyledContent>
  );
}

export default Content;
