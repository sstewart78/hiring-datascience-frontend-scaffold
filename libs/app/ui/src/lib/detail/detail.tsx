import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DetailProps {}

const StyledDetail = styled.div`
  color: pink;
`;

export function Detail(props: DetailProps) {
  return (
    <StyledDetail>
      <h1>Welcome to Detail!</h1>
    </StyledDetail>
  );
}

export default Detail;
