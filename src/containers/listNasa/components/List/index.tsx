import { useNasa } from "../../../../context";

function ListNasa({ list }: any) {
  function handleClick(value: any) {
    handleNeo(value.id);
  }

  const { neoClicked, handleNeo } = useNasa();

  return list.map((T: any, index: number) => {
    return (
      <div key={index}>
        Data: {T[0]} - Clicked? {neoClicked}
        {T[1].map((values: any, valuesIndex: number) => {
          return (
            <li key={valuesIndex} onClick={() => handleClick(values)}>
              {values.id} - Indice: {valuesIndex}
            </li>
          );
        })}
      </div>
    );
  });
}

export default ListNasa;
