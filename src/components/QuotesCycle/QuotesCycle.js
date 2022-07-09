import React from 'react';
import Quote from "../Quote/Quote";

const QuotesCycle = ({quotes}) => (
  <>
    {
      Object.keys(quotes).map(key => (
        <Quote author={quotes[key].author} text={quotes[key].text} key={key} />
      ))
    }
  </>
);

export default QuotesCycle;