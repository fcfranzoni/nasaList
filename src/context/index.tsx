import React, { useCallback, useContext, useState, ReactNode } from "react";

interface NasaProps {
  children: ReactNode;
}

interface NasaContextData {
  neoClicked: string;
  datas: {};
  handleNeo(neoName: string): void;
  handleSetData(dataResponse: {}): void;
}

const NasaContext = React.createContext<NasaContextData>({} as NasaContextData);

function NasaProvider({ children }: NasaProps): JSX.Element {
  const [neoClicked, setNeoClicked] = useState("");
  const [datas, setDatas]: any = useState({});

  const handleSetData = useCallback((dataResponse) => {
    setDatas(dataResponse);
  }, []);

  const handleNeo = useCallback((name: string) => {
    setNeoClicked(name);
  }, []);

  return (
    <NasaContext.Provider
      value={{
        neoClicked,
        datas,
        handleNeo,
        handleSetData,
      }}
    >
      {children}
    </NasaContext.Provider>
  );
}

function useNasa(): NasaContextData {
  const context = useContext(NasaContext);
  return context;
}

export { NasaProvider, useNasa };
