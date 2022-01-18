import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../hooks/use-http";

const NewQuote = () => {
  const { sendRequest, status } = useHttp();
  const history = useHistory();
  useEffect(() => {
    if (status === "completed"){
        history.push('/quotes')
    }
  }, [status,history])
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
