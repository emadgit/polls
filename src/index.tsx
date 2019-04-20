import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import  './index.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Home  from './modules/Home/Components/Home';
import { QuestionList } from './modules/QuestionList/Containers/QuestionList';
import  QuestionDetail from './modules/QuestionDetail/Components/QuestionDetail';
import  Navbar  from './sharedComponents/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';



// import './index.css'

class App extends Component {
  render() {
    return (
        <Router>
      <Grid container spacing={24}>
      <Grid item sm={4} xs={5} md={2} className="primaryColor">
        <Navbar />
      </Grid> 
      <Grid item sm={8} xs={7} md={10} className="whiteColor secondaryColor">
      <Route exact path="/" component={Home} />
      <Route exact path="/questions" component={QuestionList} />
      <Route path="/questions/:id" component={QuestionDetail} />

      </Grid> 
      </Grid>
    </Router>
    )
  }
}

render(<App />, document.getElementById('root'))