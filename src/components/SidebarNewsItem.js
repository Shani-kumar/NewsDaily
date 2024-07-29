import React from 'react';
import PropTypes from 'prop-types';

const SidebarNewsItem = ({ title, description, imageurl, newsUrl }) => {
    const defaultImageUrl = "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg";
    return (
        <div className='news-item'>
            <img src={imageurl ? imageurl : defaultImageUrl} alt={title} />
            
            <div className='news-item-content'>
            <a href={newsUrl} target='_blank' rel='noopener noreferrer' className='news-item-readmore btn '>
                <h5 className='news-item-title'>{title.slice(0, 45)}</h5>
                <p className='news-item-description'>{description ? description.slice(0, 88) : ""}</p>
              </a>
            </div>
        </div>
    );
}

SidebarNewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageurl: PropTypes.string,
    newsUrl: PropTypes.string.isRequired
};

SidebarNewsItem.defaultProps = {
    description: "No Description Available",
    imageurl: "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
};

export default SidebarNewsItem;
