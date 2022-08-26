import { map, filter, join } from "lodash";

const joinArrayToWords = (words: Array<any>): string => {
  const isSecondOrder = words.length === 2;
  const sentence = join(
    map(
      filter(words, (word) => word !== ""),
      (data, index) => {
        const order = index + 1;
        const { length } = words;

        if (length > 2) {
          const isLastOrder = length === order;
          const isSecondLastOrder = length - 1 === order;
          return `${data}${isSecondLastOrder ? " &" : ""}${
            isLastOrder ? "" : `${isSecondLastOrder ? "" : ","}`
          }`;
        }
        return data;
      }
    ),
    `${isSecondOrder ? " & " : " "}`
  );

  return sentence;
};

export default joinArrayToWords;
