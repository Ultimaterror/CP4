import { createContext, useContext, useMemo, useState } from "react";

const ReloadContext = createContext();

export default ReloadContext;

export function ReloadContextProvider({ children }) {
  const [reload, setReload] = useState(false);
  const foo = useMemo(
    () => ({
      reload,
      setReload,
    }),
    [reload]
  );

  return (
    <ReloadContext.Provider value={foo}>
      {children}
    </ReloadContext.Provider>
  );
}

export const useReloadContext = () => useContext(ReloadContext);
