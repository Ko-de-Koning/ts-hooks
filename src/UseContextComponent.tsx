import { useContext, useState } from "react";

import UserContext from "./store";
import { UserState } from "./store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, userSet] = useState<UserState>({
    first: "Jane",
    last: "Jansen",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          userSet({
            first: "Jopie",
            last: "Cruijff",
          })
        }
      >
        Change context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
