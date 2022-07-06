import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Main } from "./presentation/pages/Main/Main";

library.add(faChevronDown);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header>
       */}
      <Main />
    </div>
  );
}

export default App;
