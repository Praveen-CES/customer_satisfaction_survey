
import AddQuestions from './components/AddQuestions';
import ViewQuestions from './components/ViewQuestions';
import CreateSurvey from './components/CreateSurvey';
import GenerateReport from './components/GenerateReport';
import Report from './components/Report';
import  Questionnaire  from "./components/Questionnaire";
import Login from "./components/Login";

const routes = [
    {
      path: "/AddQuestions",
      exact: true,
      main: () => <AddQuestions />
    },
    {
      path: "/ViewQuestions",
      main: () => <ViewQuestions />
    },
    {
      path: "/Createsurvey",
      main: () => <CreateSurvey />
    },
    {
      path: "/GenerateReport",
      main: () => <GenerateReport />
    },
    {
      path: "/Report",
      main: () => <Report />
    },
    {
      path: "/Questionnaire",
      main: () => <Questionnaire />
    },
    {
      path: "/Login",
      main: () => <Login />
    }
  ];

  export default routes;