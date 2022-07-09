import React from 'react';
import Quote from "../Quote/Quote";

const QuotesCycle = ({quotes, onDelete}) => (
  <>
    {
      Object.keys(quotes).map(key => (
        <Quote author={quotes[key].author} text={quotes[key].text} key={key} onDelete={() => onDelete(key)} />
      ))
    }
  </>
);

export default QuotesCycle;