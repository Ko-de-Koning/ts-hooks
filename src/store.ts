import { createContext } from "react";

const initialState = {
  first: "Jack",
  last: "Harington",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
