import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface WelcomeProps {
  text: string,
}

const StyledWelcome = tw.p`
  w-[90%]
  text-left
  text-[#d3e4f5]
`;

export function Welcome(props: WelcomeProps) {
  return (
    <StyledWelcome>
      {props.text}
    </StyledWelcome>
  );
}

export default Welcome;
