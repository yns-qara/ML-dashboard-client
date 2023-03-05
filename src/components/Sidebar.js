import React from 'react'
import Homesvg from '../svgs/Homesvg'
import Profilesvg from '../svgs/Profilesvg'
import Visualizesvg from '../svgs/Visualizesvg'
import Datasvg from '../svgs/Datasvg'
import DataTrainsvg from '../svgs/DataTrainsvg'
import DataTestsvg from '../svgs/DataTestsvg'
const Sidebar = ({ switchToHome, switchToProfile, switchToVisualization, switchToData, switchToTrain, switchToTest, switchToEvaluate, switchToAnnotation }) => {
    return (
        <div className="sidebar_container">
            <div className="sidebar_container__elements">

                <div className='sideBar_element' onClick={switchToHome}><Homesvg /><span>Home</span></div>
                <div className='sideBar_element' onClick={switchToProfile}><Profilesvg /><span>Profile</span></div>
                <div className='sideBar_element' onClick={switchToVisualization}><Visualizesvg /><span>Visualize</span></div>
                <div className='sideBar_element' onClick={switchToData}><Datasvg /><span>Data</span></div>
                <div className='sideBar_element' onClick={switchToTrain}><DataTrainsvg /><span>Train</span></div>
                <div className='sideBar_element' onClick={switchToTest}><DataTestsvg /><span>Test</span></div>
                <div className='sideBar_element' onClick={switchToEvaluate}><Homesvg /><span>Evaluate</span></div>
                <div className='sideBar_element' onClick={switchToAnnotation}><Homesvg /><span>Data Anotation</span></div>

            </div>
        </div>
    )
}

export default Sidebar