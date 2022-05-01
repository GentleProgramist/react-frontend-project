import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './containers/programing/home'
import List from './containers/programing/list'
import Json from './containers/programing/json'
import Base64 from './containers/programing/base64'
import Regard from './containers/programing/regard'
import Cron from './containers/programing/cron'
import Binary from './containers/programing/binary'
import TextComparison from './containers/programing/text_comparison'
import ClassGenerator from './containers/programing/class_generator'
import SimpleSavingsCalculator from './containers/financial/simple_savings_calculator'
import SavingsCalculator from './containers/financial/savings_calculator'
import Calculator from './containers/financial/calculator'
import LoanCalculator from './containers/financial/loan_calculator'

export default function Routes() {
    return (
      <Router>
        <Route exact path='/' component={Home}>
        </Route>
        <Route exact path='/list' component={List}>
        </Route>
        <Route exact path='/json' component={Json}>
        </Route>
        <Route exact path='/base64' component={Base64}>
        </Route>
        <Route exact path='/regard' component={Regard}>
        </Route>
        <Route exact path='/cron' component={Cron}>
        </Route>
        <Route exact path='/binary' component={Binary}>
        </Route>
        <Route exact path='/textComparison' component={TextComparison}>
        </Route>
        <Route exact path='/classGenerator' component={ClassGenerator}>
        </Route>
        <Route exact path='/simpleSavingCalculator' component={SimpleSavingsCalculator}>
        </Route>
        <Route exact path='/savingCalculator' component={SavingsCalculator}>
        </Route>
        <Route exact path='/calculator' component={Calculator}>
        </Route>
        <Route exact path='/loanCalculator' component={LoanCalculator}>
        </Route>
      </Router>
    );
}
