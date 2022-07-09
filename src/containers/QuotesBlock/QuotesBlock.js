import React, {useState} from 'react';
import Categories from "../../components/Categories/Categories";
import GetQuotes from "../../components/GetQuotes/GetQuotes";
import {useEffect} from "react";
import axios from "axios";
import {Route, Switch} from "react-router-dom";
import QuotesCycle from "../../components/QuotesCycle/QuotesCycle";
import addQuote from "../../components/AddQuote/AddQuote";
import './QuotesBlock.css';

const QuotesBlock = () => {
  const [category, setCategory] = useState(null);
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios('/quotes.json');

      setQuotes(data);
    };

    fetchData().catch(e => console.error(e.message));
  }, []);

  const getId = (id) => {
    setCategory(id);
  };

  return (
    <div className="container quotesBlock">
      <div className="category">
        <Categories onClick={getId} />
      </div>
      <div className="quotes">
        <h2 className="quotesTitle">{category ? category : "All"}</h2>
        <Switch>
          <Route path="/" exact render={() => quotes && <QuotesCycle quotes={quotes}/>} />
          <Route path={"/quotes/" + category} render={() => category && <GetQuotes category={category}/>} />
          <Route path={"/add-quote"} component={addQuote} />
        </Switch>
      </div>
    </div>
  );
};

export default QuotesBlock;