import styled, { ThemeProvider } from 'styled-components';
import Colors from './Colors';
import Article from './components/article';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 3vw;
`;

export default function App() {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <Article />
      </Container>
    </ThemeProvider>
  );
}
