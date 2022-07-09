import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import QuotesCycle from "../QuotesCycle/QuotesCycle";

const GetQuotes = ({category}) => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios(`/quotes.json?orderBy="category"&equalTo="${category}"`);

      setQuotes(data);
    };

    fetchData().catch(e => console.error(e.message));
  }, [category]);

  return quotes && (
    <QuotesCycle quotes={quotes}/>
  );
};

export default GetQuotes;