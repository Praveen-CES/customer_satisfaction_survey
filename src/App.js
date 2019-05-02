import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import AddQuestion from './components/AddQuestions';
import ViewQuestions from './components/ViewQuestions';
import CreateSurvey from './components/CreateSurvey';
import GenerateReport from './components/GenerateReport';
import Header from './components/Header';

class App extends Component {
  render(){
  return (
   
        <div>
          <Header title = {header}/>
          <AddQuestion />
          <ViewQuestions />
          <CreateSurvey />
          <GenerateReport />
        </div>
      );
    }
}

export default App;
