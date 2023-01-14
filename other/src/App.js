import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CompanyAboutPage from './components/Company/Pages/CompanyAboutPage';
import CompanyHomePage from './components/Company/Pages/CompanyHomePage';
import FollowCompaniesPage from './components/Company/Pages/FollowCompaniesPage';
import MainPage from './components/Friend Request/Main_Page';
import GroupAboutPage from './components/Group/Pages/GroupAboutPage';
import GroupHomePage from './components/Group/Pages/GroupHomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<CompanyHomePage />} />
                <Route exact path="/company/about" element={<CompanyAboutPage />} />
                <Route exact path="/company/companies" element={<FollowCompaniesPage />} />
                <Route exact path="/group/home" element={<GroupHomePage />} />
                <Route exact path="/group/about" element={<GroupAboutPage />} />
                <Route exact path='/friend-request' element={<MainPage />} />
            </Routes>
        </Router>
    )
}

export default App;