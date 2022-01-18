import React,{Fragment} from 'react'
import Comments from "../comments/Comments"
import { useParams ,Route ,Link} from 'react-router-dom'
import HighlightedQuote from "../quotes/HighlightedQuote"
const DUMMY_QUOTES  = [
    {id:"q1" , author:"himanshu" , text:"react having fun!"},
    {id:"q2" , author:"himanshuRamani" , text:"react make great website!"},
]
const QuoteDetail = () => {
    const params = useParams()
    // console.log(params);
    const  quote  =DUMMY_QUOTES.find(quote =>quote.id === params.quoteId)
    if (!quote) {
        return<p>No quote found</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>

            <div className='centered'>
                <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`} >
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail
