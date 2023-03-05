import React from 'react'
import Homesvg from '../svgs/Homesvg'
import Profilesvg from '../svgs/Profilesvg'
import Visualizesvg from '../svgs/Visualizesvg'
import Datasvg from '../svgs/Datasvg'
import DataTrainsvg from '../svgs/DataTrainsvg'
import DataTestsvg from '../svgs/DataTestsvg'
const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className="sidebar_container__elements">

                <div className='sideBar_element'><Homesvg /><span>Home</span></div>
                <div className='sideBar_element'><Profilesvg /><span>Profile</span></div>
                <div className='sideBar_element'><Visualizesvg /><span>Visualize</span></div>
                <div className='sideBar_element'><Datasvg /><span>Data</span></div>
                <div className='sideBar_element'><DataTrainsvg /><span>Train</span></div>
                <div className='sideBar_element'><DataTestsvg /><span>Test</span></div>
                <div className='sideBar_element'><Homesvg /><span>Evaluate</span></div>
                <div className='sideBar_element'><Homesvg /><span>Data Anotation</span></div>

            </div>
        </div>
    )
}

export default Sidebar