import { useMemo, useState } from "react";
import { debounce } from "lodash";
import InputForm from "../components/InputForm";
import NotFound from "../components/NotFound";
import "../styles/pages/index.scss";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isWordFound, setIsWordFound] = useState(true);

  const searchOnSubmitHandler = (e) => {
    e.preventDefault();
  };

  const searchQueryHandler = (query) => {
    (async function () {
      if (!query) {
        setIsWordFound(true);
        return;
      }

      const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      const queryResponse = await fetch(API + query);
      const queryData = await queryResponse.json();

      const hasErrored = !!queryData.message;

      if (hasErrored) {
        setIsWordFound(false);
        return;
      }

      setIsWordFound(true);

      const wordData = queryData[0];
    })();
  };

  const debouncedSearchQueryHandler = useMemo(
    () => debounce(searchQueryHandler, 600),
    []
  );

  return (
    <div className="app">
      <h1 className="app-name">What Word Is This?</h1>

      <InputForm
        onSubmitHandler={searchOnSubmitHandler}
        onChangeHandler={debouncedSearchQueryHandler}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {searchQuery && !isWordFound && <NotFound />}
    </div>
  );
}

export default App;
