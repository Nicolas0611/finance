import { RoutesDirectory } from "./routes/RoutesDirectory";
import { ErrorBoundary } from "./components";

function App() {
  return (
    <ErrorBoundary>
      <RoutesDirectory />
    </ErrorBoundary>
  );
}

export default App;
