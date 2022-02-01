import React, { useCallback, useContext, useState } from "react";

interface NasaContextData {
  neoClicked: string;
  handleNeo(neoName: string): void;
}

const NasaContext = React.createContext<NasaContextData>({} as NasaContextData);

const NasaProvider: React.FC = ({ children }) => {
  const [neoClicked, setNeoClicked] = useState('');

  const handleNeo = useCallback((name: string) => {
    setNeoClicked(name)
  }, []);

  return (
    <NasaContext.Provider
      value={{
        neoClicked,
        handleNeo,
      }}
    >
      {children}
    </NasaContext.Provider>
  );
};

function useNasa(): NasaContextData {
  const context = useContext(NasaContext);
  return context;
}

export { NasaProvider, useNasa };
