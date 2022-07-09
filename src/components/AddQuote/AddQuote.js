import React, {useState} from 'react';
import axios from "axios";
import Backdrop from "../UI/Backdrop/Backdrop";
import {useHistory} from "react-router-dom";
import Button from "../UI/Button/Button";
import {CATEGORIES} from "../../constant";
import './AddQuote.css';

const AddQuote = () => {
  const [newQuote, setNewQuote] = useState({
    author: '',
    text: '',
    category: '',
  });
  const [show] = useState(true);

  const history = useHistory();

  const onChange = (e) => {
    const {id, value} = e.target;

    setNewQuote(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSend = async (e) => {
    e.preventDefault();

    if (newQuote.category === "select" || !newQuote.category) {
      alert('Select the exact category!');
      return;
    }

    if (!newQuote.author || !newQuote.text) {
      alert("Enter text in the fields!");
      return;
    }

    document.getElementById('preloader').style.display = 'block';
    try {
      await axios.post('/quotes.json',{
        author: newQuote.author,
        category: newQuote.category,
        text: newQuote.text
      });

      history.replace('/');
      document.getElementById('preloader').style.display = 'none';
    } catch (e) {
      document.getElementById('preloader').style.display = 'none';
      console.error(e.message);
    }
  };

  return (
    <>
      <Backdrop show={show} clicked={() => history.goBack()}/>
      <div className="addQuoteBlock">
        <h2 className="addQuoteTitle">{'Add new quote'}</h2>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={onChange}>
            {
              CATEGORIES.map((category, index) => (
                <option value={category.id} key={category.id + index}>
                  {category.id ? category.title : 'select'}
                </option>
              ))
            }
          </select>
        </div>
        <div>
          <label htmlFor="author" className="label">Author</label>
          <input type="text" className="input" id="author" value={newQuote.title} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="text" className="label">Quote text</label>
          <textarea className="textarea" id="text" value={newQuote.text} onChange={onChange} rows="4" />
        </div>
        <Button onClick={onSend} type="submit">{'Send'}</Button>
      </div>
    </>
  );
};

export default AddQuote;