import tw from 'twin.macro';
import { Header, Search, Detail, Footer } from '@hiring-datascience-frontend-scaffold/app/ui';
import { Route, Routes } from 'react-router-dom';

//import { LOAD_PEOPLE } from '@hiring-datascience-frontend-scaffold/app/queries/queries';

const StyledApp = tw.div`
  bg-black 
  text-green-50 
  px-10
`;

export function App() {

  return (
    <>
      <Header title="Imperial Computer Network" />
      <StyledApp>
          <Routes>
            <Route path="/people/:name" element={<Detail />} />
            <Route path="/planets/:name" element={<Detail />} />
            <Route path="/starships/:name" element={<Detail />} />
            <Route path="/" element={<Search />} />
          </Routes>
      </StyledApp>
      <Footer text="Imperial software version 78678353.235" />
    </>
  );
}

export default App;
