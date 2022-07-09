import React, {useState} from 'react';
import Categories from "../../components/Categories/Categories";
import GetQuotes from "../../components/GetQuotes/GetQuotes";
import {useEffect} from "react";
import axios from "axios";
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import QuotesCycle from "../../components/QuotesCycle/QuotesCycle";
import Loader from "../../components/UI/Loader/Loader";
import AddQuote from "../../components/AddQuote/AddQuote";
import './QuotesBlock.css';

const QuotesBlock = () => {
  const [category, setCategory] = useState(null);
  const [quotes, setQuotes] = useState(null);
  const [id, setId] = useState(null);

  const match = useRouteMatch();
  const history = useHistory();

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
      setCategory(null);
    }
  }, [match.isExact]);

  const getId = (id) => {
    setCategory(id);
  };

  const deleteQuote = async (id) => {
    document.getElementById('preloader').style.display = 'block';
    await axios.delete('quotes/' + id + '.json');

    const {data} = await axios('/quotes.json');

    setQuotes(data);

    history.replace('/');
    document.getElementById('preloader').style.display = 'none';
  };

  const editQuote = (id) => {
    history.push('/edit-quote/' + id);
    setId(id);
  }

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
            <Route path="/" exact render={() => quotes ?
              <QuotesCycle quotes={quotes}
                           onDelete={deleteQuote}
                           onEdit={editQuote}
              /> : <p style={{textAlign: "center", fontSize: "24px"}}>No quotes yet</p>}

            />
            <Route path={"/quotes/" + category} render={() => category &&
              <GetQuotes category={category}
                         onDelete={deleteQuote}
                         onEdit={editQuote}
              />}
            />
            <Route path={"/add-quote"} render={() => <AddQuote/>} />
            <Route path={"/edit-quote/" + id } render={() => id && <AddQuote  id={id}/>} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default QuotesBlock;