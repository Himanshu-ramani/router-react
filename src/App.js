import {Route , Switch,Redirect} from "react-router-dom"
import AllQuote from "./components/pages/AllQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuote from "./components/pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <Layout>
   <Switch>
     <Route path="/" exact>
    <Redirect to='/quotes' />
     </Route>
     <Route path="/quotes" exact>
      <AllQuote />
     </Route>
     <Route path='/quotes/:quoteId'>
      <QuoteDetail />
     </Route>
     <Route path='/new-quotes'>
      <NewQuote />
     </Route>
     <Route path='*'>
       <NotFound />
     </Route>
   </Switch>
   </Layout>
 
  );
}

export default App;
