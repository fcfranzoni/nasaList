import { useNasa } from "../../../../context";
import * as Styles from "./sytles";

function ListNasa({ list }: any) {
  const { handleNeo } = useNasa();

  function handleClick(value: any) {
    handleNeo(value.id);
    alert(value.id);
  }

  return list.map((T: any, index: number) => {
    return (
      <Styles.Container key={index}>
        <Styles.Title>
          Data: {new Date(T[0]).toLocaleDateString()}
        </Styles.Title>
        <Styles.List>
          {T[1].map((values: any, valuesIndex: number) => {
            return (
              <Styles.ListItem
                key={valuesIndex}
                onClick={() => handleClick(values)}
              >
                {values.id} - {values.name}
              </Styles.ListItem>
            );
          })}
        </Styles.List>
      </Styles.Container>
    );
  });
}

export default ListNasa;
