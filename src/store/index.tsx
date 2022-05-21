import React, { createContext, useMemo, useReducer } from 'react';

const store = createContext<{ state: any; dispatch: any }>({
  state: null,
  dispatch: null,
});

type stateType = {
  theme: string;
  userInfo: object;
};

const initialState: stateType = {
  theme: 'light',
  userInfo: {},
};

const reducer = (
  state: any,
  action: {
    type: string;
    value: any;
  },
) => ({
  ...state,
  ...action.value,
});

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );
  return <store.Provider value={value}>{children}</store.Provider>;
};

export { store, Store };
