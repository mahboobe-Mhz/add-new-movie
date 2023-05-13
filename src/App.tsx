import Container from "./components/layOut/container";
import { MovieProvider } from "./context/contextAdd";
import { DataProvider } from "./context/contextData";

function App() {
  return (
    <MovieProvider>
      <DataProvider>
        <Container />
      </DataProvider>
    </MovieProvider>
  );
}

export default App;
