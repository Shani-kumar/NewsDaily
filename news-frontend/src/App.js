// import './App.css';
// import React, { Component } from 'react';
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     useLocation,
// } from "react-router-dom";

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

// function SearchWrapper() {
//     const query = useQuery();
//     const searchQuery = query.get("query");
//     return <News key="search" apikey = {this.apikey} country="in" category="general" searchQuery={searchQuery} />;
// }

// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             searchQuery: ''
//         };
//     }

//     setSearchQuery = (query) => {
//         this.setState({ searchQuery: query });
//     };

//     render() {
//         return (
//             <>
//                 <Router>
//                     <NavBar setSearchQuery={this.setSearchQuery} />
//                     <Routes>
//                         <Route path="/" element={<News key="general" apikey = {this.apikey} country="us" category="general" />} />
//                         <Route path="/business" element={<News key="business" apikey = {this.apikey} country="in" category="business" />} />
//                         <Route path="/entertainment" element={<News key="entertainment" apikey = {this.apikey} country="in" category="entertainment" />} />
//                         <Route path="/general" element={<News key="general" apikey = {this.apikey} country="in" category="general" />} />
//                         <Route path="/health" element={<News key="health" apikey = {this.apikey} country="in" category="health" />} />
//                         <Route path="/science" element={<News key="science" apikey = {this.apikey} country="in" category="science" />} />
//                         <Route path="/sports" element={<News key="sports" apikey = {this.apikey} country="in" category="sports" />} />
//                         <Route path="/technology" element={<News key="technology" apikey = {this.apikey} country="in" category="technology" />} />
//                         <Route path="/search" element={<SearchWrapper />} />
//                     </Routes>
//                 </Router>
//             </>
//         );
//     }
// }

// final code

import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Footer from './components/Footes';

function SearchWrapper({ searchQuery,apikey }) {
    console.log(searchQuery);
    return <News key={searchQuery} apikey={apikey} country="us" category="general" searchQuery={searchQuery} />;
}

export default class App extends Component {
    apikey = process.env.REACT_APP_NEWS_API
    constructor() {
        super();
        this.state = {
            searchQuery: ''
        };
    }

    setSearchQuery = (query) => {
        this.setState({ searchQuery: query });
        console.log(this.state.searchQuery);
    };

    render() {
        const { searchQuery } = this.state;
        return (
            <Router>
                <NavBar setSearchQuery={this.setSearchQuery}  />
                <Routes>
                    <Route path="/" element={<SearchWrapper searchQuery={"News"} apikey = {this.apikey}/>} />
                    <Route path="/business" element={<News key="business" apikey = {this.apikey} country="us" category="business" />} />
                    <Route path="/entertainment" element={<News key="entertainment" apikey = {this.apikey} country="in" category="entertainment" />} />
                    <Route path="/general" element={<News key="general" apikey = {this.apikey} country="us" category="general" />} />
                    <Route path="/health" element={<News key="health" apikey = {this.apikey} country="us" category="health" />} />
                    <Route path="/science" element={<News key="science" apikey = {this.apikey} country="us" category="science" />} />
                    <Route path="/sports" element={<News key="sports" apikey = {this.apikey} country="us" category="sports" />} />
                    <Route path="/technology" element={<News key="technology" apikey = {this.apikey} country="us" category="technology" />} />
                    <Route path="/search" element={<SearchWrapper searchQuery={searchQuery} apikey = {this.apikey}/>} />
                </Routes>
                <Footer/>
            </Router>
        );
    }
}
