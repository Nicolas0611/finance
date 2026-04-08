import { ErrorBoundary } from "./components/ErrorBoundary";
import { RoutesDirectory } from "./routes/RoutesDirectory";

function App() {
  return (
    <ErrorBoundary>
      <RoutesDirectory />
    </ErrorBoundary>
  );
}

export default App;
