import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router';
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator.js/QuizCreator';
import QuizList from './containers/QuizList/QuizList';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth}></Route>
          <Route path='/quiz-creator' component={QuizCreator}></Route>
          <Route path='/quiz/:id' component={Quiz}></Route>
          <Route path='/' component={QuizList}></Route>
        </Switch>
      
      </Layout>
    );
  }
}

export default App;
