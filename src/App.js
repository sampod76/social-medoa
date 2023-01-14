import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExperienceMain from './Components/Experienc/ExperienceMain';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import JobListMain from './Components/Joblist/JobListMain';



const App = () => {
  return (
    <div className=''>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/joblist' element={<JobListMain />} />

        <Route path='/exper' element={<ExperienceMain />} />
      </Routes>
    </div>
  );
};

export default App;