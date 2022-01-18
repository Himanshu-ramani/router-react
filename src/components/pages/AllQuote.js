import React,{useEffect} from "react";
import QuoteList from "../quotes/QuoteList"
import NewQuote from "./NewQuote";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from '../lib/api'
import LoadingSpinner from "../UI/LoadingSpinner";
const DUMMY_QUOTES  = [
    {id:"q1" , author:"himanshu" , text:"react having fun!"},
    {id:"q2" , author:"himanshuRamani" , text:"react make great website!"},
]
const AllQuote = () => {
 const {sendRequest ,status , data: loadedQuotes , error} = useHttp(getAllQuotes,true)
 useEffect(() => {
  sendRequest()
 }, [sendRequest])
 if (status === "pending") {
   return (
     <div className="centered">
       <LoadingSpinner />
     </div>
   )
 }
 if (error) {
   return <p className="centered"> {error}</p>
 }
 if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
  return <NoQuotesFound />   
}
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuote;
