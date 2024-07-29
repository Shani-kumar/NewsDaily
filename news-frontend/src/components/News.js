// import React, { Component } from 'react';
// import NewsItem from './NewsItem';

// export default class News extends Component {
//     constructor() {
//         super();
//         this.state = {
//             articles: [],
//             page: 1,
//             totalResults: 0,
//         };
//     }

//     async componentDidMount() {
//         this.fetchNews();
//     }

//     async componentDidUpdate(prevProps) {
//         if (this.props.searchQuery !== prevProps.searchQuery) {
//             this.fetchNews();
//         }
//     }

//     fetchNews = async () => {
//         let url;
//         if (this.props.searchQuery) {
//             url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         } else {
//             url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         }
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults
//         });
//     }

//     handlePrev = async () => {
//         this.setState({ page: this.state.page - 1 }, this.fetchNews);
//     }

//     handleNext = async () => {
//         this.setState({ page: this.state.page + 1 }, this.fetchNews);
//     }

//     render() {
//         return (
//             <div className='container my-3'>
//                 <h2>Today's Top Headlines...</h2>
//                 <div className='row'>
//                     {this.state.articles.map((element) => {
//                         return <div className='col-lg-3 col-md-6 col-sm-12' key={element.url}>
//                             <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url} />
//                         </div>
//                     })}
//                 </div>
//                 <div className='container d-flex justify-content-between'>
//                     <button disabled={this.state.page <= 1} onClick={this.handlePrev} type="button" className="btn btn-dark">&larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// News.defaultProps = {
//     category: "business",
//     country: "in",
//     pageSize: 20,
//     searchQuery: ""
// };





// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import SidebarNewsItem from './SidebarNewsItem';

// export default class News extends Component {
//     constructor() {
//         super();
//         this.state = {
//             articles: [],
//             page: 1,
//             totalResults: 0,
//         };
//     }

//     async componentDidMount() {
//         this.fetchNews();
//     }

//     async componentDidUpdate(prevProps) {
//         if (this.props.searchQuery !== prevProps.searchQuery) {
//             this.fetchNews();
//         }
//     }

//     fetchNews = async () => {
//         let url;
//         if (this.props.searchQuery) {
//             url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         } else {
//             url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         }
//         let data = await fetch(url);
//         let parsedData = await data.json();
        
//         // Filter articles where urlToImage is not null
//         let articlesWithImage = parsedData.articles.filter(article => article.urlToImage !== null);
        
//         // Check if we have fewer than 16 articles with images
//         if (articlesWithImage.length < 16) {
//             // Get articles with urlToImage null
//             let articlesWithoutImage = parsedData.articles.filter(article => article.urlToImage === null);
        
//             // Calculate how many more articles we need to reach 20
//             let remainingCount = 20 - articlesWithImage.length;
        
//             // Add enough articles without images to make up the difference
//             articlesWithImage = articlesWithImage.concat(articlesWithoutImage.slice(0, remainingCount));
//         }
        
//         // Ensure we have exactly 20 articles (if fewer were fetched overall)
//         articlesWithImage = articlesWithImage.slice(0, 20);
        
//         this.setState({
//             articles: articlesWithImage,
//             totalResults: parsedData.totalResults
//         });
        
        
//     }

//     handlePrev = async () => {
//         this.setState({ page: this.state.page - 1 }, this.fetchNews);
//     }

//     handleNext = async () => {
//         this.setState({ page: this.state.page + 1 }, this.fetchNews);
//     }

//     render() {
//         const mainArticle = this.state.articles[0];
//         const sidebarArticles = this.state.articles.slice(1, 8); // Display 5 articles in the sidebar
//         const remainingArticles = this.state.articles.slice(12); // Remaining articles

//         return (
//             <div className='container'>
//                 <h2> {this.props.searchQuery?this.props.searchQuery:this.props.category +" News"}</h2>
//                 <div className='main-article-container'>
//                     <div className='main-article'>
//                         {mainArticle && <NewsItem title={mainArticle.title?mainArticle.title.slice(0,45):""} description={mainArticle.description?mainArticle.description.slice(0,88):""} imageurl={mainArticle.urlToImage} newsUrl={mainArticle.url} />}
//                     </div>
//                     <div className='sidebar'>
//                         {sidebarArticles.map((article) => (
//                             <SidebarNewsItem
//                                 key={article.url}
//                                 title={article.title}
//                                 description={article.description}
//                                 imageurl={article.urlToImage}
//                                 newsUrl={article.url}
//                             />
//                         ))}
//                     </div>
//                 </div>
//                 <div className='remaining-articles row'>
//                     {remainingArticles.map((article) => (
//                         <div className='col-lg-3 col-md-6 col-sm-12' key={article.url}>
//                             <NewsItem title={article.title ? article.title.slice(0, 45) : ""} description={article.description ? article.description.slice(0, 88) : ""} imageurl={article.urlToImage} newsUrl={article.url} />
//                         </div>
//                     ))}
//                 </div>
//                 <div className='buttons-container'>
//                     <button disabled={this.state.page <= 1} onClick={this.handlePrev} type="button" className="btn btn-dark">&larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
//                 </div>
//                 {/* <footer className='footer'>
//                     &copy; {new Date().getFullYear()} NewsDaily. All rights reserved.
//                 </footer> */}
//             </div>
//         );
//     }
// }




// for next page issue


import React, { Component } from 'react';
import NewsItem from './NewsItem';
import SidebarNewsItem from './SidebarNewsItem';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
        };
    }

    async componentDidMount() {
        this.fetchNews();
    }

    async componentDidUpdate(prevProps) {
        if (this.props.searchQuery !== prevProps.searchQuery) {
            this.fetchNews();
        }
    }

    // fetchNews = async () => {
    //     let url;
    //     if (this.props.searchQuery) {
    //         url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     } else {
    //         url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     }
    //     try {
    //         let data = await fetch(url);
    //         let parsedData = await data.json(); 
            
    //         // Ensure articles is defined and is an array
    //         if (!parsedData.articles || !Array.isArray(parsedData.articles)) {
    //             console.error('Invalid articles data', parsedData);
    //             return;
    //         }
             
    //         // Filter articles where urlToImage is not null
    //         let articlesWithImage = parsedData.articles.filter(article => article.urlToImage !== null);
            
    //         // Check if we have fewer than 16 articles with images
    //         if (articlesWithImage.length < 16) {
    //             // Get articles with urlToImage null
    //             let articlesWithoutImage = parsedData.articles.filter(article => article.urlToImage === null);
            
    //             // Calculate how many more articles we need to reach 20
    //             let remainingCount = 20 - articlesWithImage.length;
            
    //             // Add enough articles without images to make up the difference
    //             articlesWithImage = articlesWithImage.concat(articlesWithoutImage.slice(0, remainingCount));
    //         }
            
    //         // Ensure we have exactly 20 articles (if fewer were fetched overall)
    //         articlesWithImage = articlesWithImage.slice(0, 20);
            
    //         this.setState({
    //             articles: articlesWithImage,
    //             totalResults: parsedData.totalResults
    //         });
    //     } catch (error) {
    //         console.error('Error fetching news:', error);
    //     }
    // }


    fetchNews = async () => {
        let url = `http://localhost:5001/api/news?searchQuery=${this.props.searchQuery}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        try {
            let response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            let parsedData = await response.json();
    
            // Ensure articles is defined and is an array
            if (!parsedData.articles || !Array.isArray(parsedData.articles)) {
                console.error('Invalid articles data', parsedData);
                return;
            }
    
            // Filter articles where urlToImage is not null
            let articlesWithImage = parsedData.articles.filter(article => article.urlToImage !== null);
    
            // Check if we have fewer than 16 articles with images
            if (articlesWithImage.length < 16) {
                // Get articles with urlToImage null
                let articlesWithoutImage = parsedData.articles.filter(article => article.urlToImage === null);
    
                // Calculate how many more articles we need to reach 20
                let remainingCount = 20 - articlesWithImage.length;
    
                // Add enough articles without images to make up the difference
                articlesWithImage = articlesWithImage.concat(articlesWithoutImage.slice(0, remainingCount));
            }
    
            // Ensure we have exactly 20 articles (if fewer were fetched overall)
            articlesWithImage = articlesWithImage.slice(0, 20);
    
            this.setState({
                articles: articlesWithImage,
                totalResults: parsedData.totalResults
            });
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    
    handlePrev = async () => {
        this.setState({ page: this.state.page - 1 }, this.fetchNews);
    }

    handleNext = async () => {
        this.setState({ page: this.state.page + 1 }, this.fetchNews);
    }

    render() {
        const mainArticle = this.state.articles[0];
        const sidebarArticles = this.state.articles.slice(1, 8); // Display 5 articles in the sidebar
        const remainingArticles = this.state.articles.slice(12); // Remaining articles

        const maxPage = Math.ceil(this.state.totalResults / this.props.pageSize);

        return (
            <div className='container'>
                <h2>{this.props.searchQuery ? this.props.searchQuery : this.props.category + " News"}</h2>
                <div className='main-article-container'>
                    <div className='main-article'>
                        {mainArticle && <NewsItem title={mainArticle.title ? mainArticle.title.slice(0, 45) : ""} description={mainArticle.description ? mainArticle.description.slice(0, 88) : ""} imageurl={mainArticle.urlToImage} newsUrl={mainArticle.url} />}
                    </div>
                    <div className='sidebar'>
                        {sidebarArticles.map((article) => (
                            <SidebarNewsItem
                                key={article.url}
                                title={article.title}
                                description={article.description}
                                imageurl={article.urlToImage}
                                newsUrl={article.url}
                            />
                        ))}
                    </div>
                </div>
                <div className='remaining-articles row'>
                    {remainingArticles.map((article) => (
                        <div className='col-lg-3 col-md-6 col-sm-12' key={article.url}>
                            <NewsItem title={article.title ? article.title.slice(0, 45) : ""} description={article.description ? article.description.slice(0, 88) : ""} imageurl={article.urlToImage} newsUrl={article.url} />
                        </div>
                    ))}
                </div>
                <div className='buttons-container'>
                    <button disabled={this.state.page <= 1} onClick={this.handlePrev} type="button" className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page >= maxPage} onClick={this.handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        );
    }
}

News.defaultProps = {
    category: "business",
    country: "in",
    pageSize: 20,
    searchQuery: ""
};
