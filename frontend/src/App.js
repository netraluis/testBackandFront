import './App.css';
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components.jsx";
import FormPage from "./pages/formpage/formpage.component";
import ExpedientDetail from "./components/expedient-detail/expedient-detail.component";
import SubstitutDetail from "./components/substitut-detail/substitut-detail.component";
import FormExpedient from "./components/form-expedients/form-expedients.component";
import FormSubstitute from "./components/form-substitutes/form-substitutes.component"

function App() {
  return (
    <div>
      <Header />
   
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/expedient/:id" component={ExpedientDetail} />
        <Route path="/substitut/:id" component={SubstitutDetail} />
        <Route path="/form/expedient" component={FormExpedient}/>
        <Route path="/form/substitute" component={FormSubstitute}/>
      </Switch>
   
    </div>
  );
}

export default App;
