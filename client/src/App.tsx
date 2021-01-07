import {Route} from 'react-router-dom';
import Main from "./pages/desktop/Main";
import styled from "styled-components";
function App() {
  return (
    <Wrap>
      <Route path="/" exact component={Main} />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width:100%;
  height:100vh;
`