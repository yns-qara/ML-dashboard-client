import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/RightViews/Home'
import Profile from './components/RightViews/Profile'
import Data from './components/RightViews/Data'
import DataAnnotation from './components/RightViews/DataAnnotation'
import Evaluate from './components/RightViews/Evaluate'
import Test from './components/RightViews/Test'
import Train from './components/RightViews/Train'
import Visualize from './components/RightViews/Visualze'
import { useState } from 'react';
function App() {

  const [home, setHome] = useState(true)
  const [profile, setProfile] = useState(false)
  const [visualize, setVisualize] = useState(false)
  const [data, setData] = useState(false)
  const [tratin, setTratin] = useState(false)
  const [test, setTest] = useState(false)
  const [evaluate, setEvaluate] = useState(false)
  const [dataAnnotation, setDataAnnotation] = useState(false)
  
  
  const switchToHome = () => {
    setHome(true);
    setProfile(false);
    setVisualize(false);
    setData(false);
    setTratin(false);
    setTest(false);
    setEvaluate(false);
    setDataAnnotation(false);
  }
  const switchToProfile = () => {
    setHome(false);
    setProfile(true);
    setVisualize(false);
    setData(false);
    setTratin(false);
    setTest(false);
    setEvaluate(false);
    setDataAnnotation(false);
  }
  const switchToVisualization = () => {
    setHome(false);
    setProfile(false);
    setVisualize(true);
    setData(false);
    setTratin(false);
    setTest(false);
    setEvaluate(false);
    setDataAnnotation(false);
  }
  const switchToData = () => {
    setHome(false);
    setProfile(false);
    setVisualize(false);
    setData(true);
    setTratin(false);
    setTest(false);
    setEvaluate(false);
    setDataAnnotation(false);
  }
  const switchToTrain = () => {
    setHome(false);
    setProfile(false);
    setVisualize(false);
    setData(false);
    setTratin(true);
    setTest(false);
    setEvaluate(false);
    setDataAnnotation(false);
  }
  const switchToTest = () => {
    setHome(false);
    setProfile(false);
    setVisualize(false);
    setData(false);
    setTratin(false);
    setTest(true);
    setEvaluate(false);
    setDataAnnotation(false);
  }
  const switchToEvaluate = () => {
    setHome(false);
    setProfile(false);
    setVisualize(false);
    setData(false);
    setTratin(false);
    setTest(false);
    setEvaluate(true);
    setDataAnnotation(false);
  }
  const switchToAnnotation = () => {
    setHome(false);
    setProfile(false);
    setVisualize(false);
    setData(false);
    setTratin(false);
    setTest(false);
    setEvaluate(false);
    setDataAnnotation(true);
  }

  return (
    <div className="App">
      <Sidebar
      
      switchToHome = {switchToHome}
      switchToProfile = {switchToProfile}
      switchToVisualization = {switchToVisualization}
      switchToData = {switchToData}
      switchToTrain = {switchToTrain}
      switchToTest = {switchToTest}
      switchToEvaluate = {switchToEvaluate}
      switchToAnnotation = {switchToAnnotation}

      />
      <div className="right_container">
          {
            home &&
            <Home />
          }
          {
            profile &&
            <Profile />
          }
          {
            visualize &&
            <Visualize />
          }
          {
            data &&
            <Data />
          }
          {
            tratin &&
            <Train />
          }
          {
            test &&
            <Test />
          }
          {
            evaluate &&
            <Evaluate />
          }
          {
            dataAnnotation &&
            <DataAnnotation />
          }

      </div>
    </div>
  );
}

export default App;
