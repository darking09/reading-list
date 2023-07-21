import { useEffect, useState } from "react";

const singularBaseText = " Libro disponible: ";
const pluralBaseText = " Libros disponibles: ";

export function useBooksAvailable(numberOfBooks : number) {
  const [textToReturn, setTextToReturn] = useState("");

  useEffect(() => {
    if (numberOfBooks === 1) {
      setTextToReturn(`${numberOfBooks} ${singularBaseText}`)
      return;
    }
    setTextToReturn(`${numberOfBooks} ${pluralBaseText}`);
  }, [numberOfBooks]);

  return {
    textToReturn
  };
}
