import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface FooterProps {
  text: string
}

const StyledFooter = tw.div`
  text-white
  bg-black
  px-12
  py-4
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
        {props.text}
    </StyledFooter>
  );
}

export default Footer;
