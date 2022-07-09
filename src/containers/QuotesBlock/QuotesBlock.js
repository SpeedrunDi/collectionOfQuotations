import React, {useState} from 'react';
import Categories from "../../components/Categories/Categories";
import GetQuotes from "../../components/GetQuotes/GetQuotes";
import {useEffect} from "react";
import axios from "axios";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import QuotesCycle from "../../components/QuotesCycle/QuotesCycle";
import addQuote from "../../components/AddQuote/AddQuote";
import './QuotesBlock.css';
import Loader from "../../components/UI/Loader/Loader";

const QuotesBlock = () => {
  const [category, setCategory] = useState(null);
  const [quotes, setQuotes] = useState(null);

  const match = useRouteMatch();

  useEffect(() => {
    if (match.isExact === true) {
      try {
        const fetchData = async () => {
          const {data} = await axios('/quotes.json');

          setQuotes(data);
        };

        fetchData().catch(e => console.error(e.message));
      } catch (e) {
        console.error(e.message);
      }
    }
  }, [match.isExact]);

  const getId = (id) => {
    setCategory(id);
  };

  const deleteQuote = async (id) => {
    document.getElementById('preloader').style.display = 'block';
    await axios.delete('quotes/' + id + '.json');

    const fetchData = async () => {
      const {data} = await axios('/quotes.json');

      setQuotes(data);
    };

    fetchData().catch(e => console.error(e.message));
    document.getElementById('preloader').style.display = 'none';
  };

  return (
    <>
      <Loader/>
      <div className="container quotesBlock">
        <div className="category">
          <Categories onClick={getId} />
        </div>
        <div className="quotes">
          <h2 className="quotesTitle">{category ? category : "All"}</h2>
          <Switch>
            <Route path="/" exact render={() => quotes && <QuotesCycle quotes={quotes} onDelete={deleteQuote}/>} />
            <Route path={"/quotes/" + category} render={() => category && <GetQuotes category={category}/>} />
            <Route path={"/add-quote"} component={addQuote} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default QuotesBlock;