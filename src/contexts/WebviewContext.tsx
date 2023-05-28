import { createContext, useContext } from 'react';

export const WebviewContext = createContext({});

export function WebviewProvider({ value, children }: any) {
  return (
    <WebviewContext.Provider value={value}>
      {children}
    </WebviewContext.Provider>
  );
}

export function useWebview() {
  return useContext(WebviewContext);
}