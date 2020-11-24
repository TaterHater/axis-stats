import { RouteComponentProps } from "@reach/router";
import React, { FunctionComponent } from "react";
import "./App.css";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
} from "reactfire";

interface Props extends RouteComponentProps {}

const App: FunctionComponent<Props> = (_props) => {
  const gameRef = useFirestore().collection("games");
  const games: any[] = useFirestoreCollectionData(
    gameRef.orderBy('FirstName')
  );
  return (
    <div className="App">
      {games.map((m) => (
        <p>
          {m.FirstName} {m.LastName}
        </p>
      ))}
    </div>
  );
}

export default App;
