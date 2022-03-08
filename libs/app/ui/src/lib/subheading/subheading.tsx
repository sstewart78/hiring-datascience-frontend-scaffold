import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface SubheadingProps {
  text: string,
}

const StyledSubheading = tw.h3`
  color: text-[chartreuse]
  text-left
`;

export function Subheading(props: SubheadingProps) {
  return (
    <StyledSubheading>
      {props.text}
    </StyledSubheading>
  );
}

export default Subheading;
