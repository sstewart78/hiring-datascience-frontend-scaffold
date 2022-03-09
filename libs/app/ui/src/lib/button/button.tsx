import { Navigate, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string,
  link: string
}

const StyledButton = tw.button`
  bg-black
  hover:bg-white
  text-white
  hover:text-black
  inline-block
  box-border
  border
  border-white
  border-solid
  rounded-md
  shadow
  text-sm
  font-semibold
  py-1
  px-2
  transition-all
  hover:cursor-pointer
  
`;

export function Button(props: ButtonProps) {
  const navigate = useNavigate();
  return (
    <StyledButton onClick={() => props.link !=='' && navigate(props.link)}>
      {props.text}
    </StyledButton>
  );
}

export default Button;
