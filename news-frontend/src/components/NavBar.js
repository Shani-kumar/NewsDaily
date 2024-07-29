// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";

// const NavBar = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         // Navigate to the search page with the search query as a URL parameter
//         navigate(`/search?query=${searchQuery}`);
//         setSearchQuery(''); // Clear the input
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">NewsDaily</Link>
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     data-bs-toggle="collapse" 
//                     data-bs-target="#navbarSupportedContent" 
//                     aria-controls="navbarSupportedContent" 
//                     aria-expanded="false" 
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/business">Business</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/entertainment">Entertainment</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/general">General</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/health">Health</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/science">Science</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/sports">Sports</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/technology">Technology</Link>
//                         </li>
//                     </ul>
//                     <form className="d-flex" onSubmit={handleSearch}>
//                         <input
//                             className="form-control me-2"
//                             type="search"
//                             placeholder="Search"
//                             aria-label="Search"
//                             value={searchQuery}
//                             onChange={handleChange}
//                         />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;






// import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// class NavBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchQuery: ''
//         };
//     }

//     handleChange = (e) => {
//         this.setState({ searchQuery: e.target.value });
//         // const newSearchQuery = e.target.value;
//         // this.setState({ searchQuery: newSearchQuery }, () => {
//         //     this.props.setSearchQuery(this.state.searchQuery);
//         // });
//     };

//     handleSearch = (e) => {
//         e.preventDefault();
//         // Call the setSearchQuery prop function to update the search query in App.js
//         this.props.setSearchQuery(this.state.searchQuery);
//         this.setState({ searchQuery: '' }); // Clear the input
//     };

//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">NewsDaily</Link>
//                     <button 
//                         className="navbar-toggler" 
//                         type="button" 
//                         data-bs-toggle="collapse" 
//                         data-bs-target="#navbarSupportedContent" 
//                         aria-controls="navbarSupportedContent" 
//                         aria-expanded="false" 
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/business">Business</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/entertainment">Entertainment</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/general">General</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/health">Health</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/science">Science</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/sports">Sports</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/technology">Technology</Link>
//                             </li>
//                         </ul>
//                         <form className="d-flex" onSubmit={this.handleSearch}>
//                             <input
//                                 className="form-control me-2"
//                                 type="search"
//                                 placeholder="Search"
//                                 aria-label="Search"
//                                 value={this.state.searchQuery}
//                                 onChange={this.handleChange}
//                             />
//                             <Link className="btn btn-outline-success" to="/search" >Search</Link>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// }

// export default NavBar;


import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ setSearchQuery }) => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(searchInput); // Update the search query in the parent component
        navigate("/search"); // Navigate to the search page
        setSearchInput(''); // Clear the input
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsDaily</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchInput}
                            onChange={handleChange}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
