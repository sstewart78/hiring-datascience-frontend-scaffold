import tw from 'twin.macro';


/* eslint-disable-next-line */
export interface HeadingProps {
  text: string
}

const StyledHeading = tw.h2`
`;

export function Heading(props: HeadingProps) {
  return (
    <StyledHeading>
      {props.text}
    </StyledHeading>
  );
}

export default Heading;
