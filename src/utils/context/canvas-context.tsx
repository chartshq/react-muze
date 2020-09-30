import * as React from 'react';

const Context = React.createContext(null);

const CanvasProvider = ({ values, children }: { values: any; children: React.ReactNode }): JSX.Element => {
  return <Context.Provider value={...values}>{children}</Context.Provider>;
};

export { Context, CanvasProvider };
