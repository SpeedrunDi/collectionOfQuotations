import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import QuotesCycle from "../QuotesCycle/QuotesCycle";

const GetQuotes = ({category, onEdit, onDelete}) => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      document.getElementById('preloader').style.display = 'block';
      try {
        const {data} = await axios(`/quotes.json?orderBy="category"&equalTo="${category}"`);

        if (Object.keys(data).length !== 0) {
          setQuotes(data);
        } else {
          setQuotes(null);
        }
        document.getElementById('preloader').style.display = 'none';
      } catch (e) {
        console.error(e.message);
        document.getElementById('preloader').style.display = 'none';
      }
    };

    fetchData().catch(e => console.error(e.message));
  }, [category]);

  return (
    quotes ? <QuotesCycle quotes={quotes} onDelete={onDelete} onEdit={onEdit}/>
      : <p style={{textAlign: "center", fontSize: "24px"}}>No quotes yet</p>
  );
};

export default GetQuotes;