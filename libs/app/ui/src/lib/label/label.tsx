import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface LabelProps {
  text:string,
  htmlFor: string
}

const StyledLabel = tw.label`
  text-white
  text-sm
  mx-1
`;

export function Label(props: LabelProps) {
  return (
    <StyledLabel htmlFor={props.htmlFor}>
      {props.text}
    </StyledLabel>
  );
}

export default Label;
