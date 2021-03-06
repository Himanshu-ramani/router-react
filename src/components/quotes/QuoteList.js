import { Fragment } from 'react';
import { useHistory ,useLocation ,} from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuoetes = ( quotes , ascending) =>{
  return quotes.sort((quoteA, quoteB)=>{
    if(ascending) {
      return quoteA.id  > quoteB.id ? 1 : -1;
    }else{
      return quoteA.id < quoteB ? 1 : -1
    }
  })
}
const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const isShortingAscending = queryParams.get("sort") === "asc"
  const sortedQuotes = sortQuoetes(props.quotes , isShortingAscending)
  const changeShortingHandler = () =>{
    history.push('/quotes?sort=' + (isShortingAscending ? 'desc' : 'asc'))
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeShortingHandler}>Sort {isShortingAscending ? "Descending" : "Ascending"}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
