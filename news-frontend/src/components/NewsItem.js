import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewsItem extends Component {
    render() {
        const { title, description, imageurl, newsUrl } = this.props;
        const defaultImageUrl = "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg";
        return (
            <div className='my-3'>
                <div className="card shadow-sm" style={{ width: "100%", height: "100%" }}>
                    <img src={imageurl ? imageurl : defaultImageUrl} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageurl: PropTypes.string,
    newsUrl: PropTypes.string
};

NewsItem.defaultProps = {
    title: "No Title Available",
    description: "No Description Available",
    imageurl: "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg",
    newsUrl: "#"
};
