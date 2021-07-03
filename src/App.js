import styled, { ThemeProvider } from 'styled-components';
import Colors from './Colors';
import Article from './components/article';

const Container = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
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
