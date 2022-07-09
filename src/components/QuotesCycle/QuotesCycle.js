import React from 'react';
import Quote from "../Quote/Quote";

const QuotesCycle = ({quotes, onDelete, onEdit}) => (
  <>
    {
      Object.keys(quotes).reverse().map(key => (
        <Quote author={quotes[key].author}
               text={quotes[key].text}
               key={key}
               onDelete={() => onDelete(key)}
               onEdit={() => onEdit(key)}
        />
      ))
    }
  </>
);

export default QuotesCycle;