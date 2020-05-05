import React from 'react';
import PropTypes from 'prop-types';

import imageNotFound from './image/image-not-found.jpg';

import './news-template.scss';

const propTypes = {
    arrayNews: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            urlToImage: PropTypes.string,
        })
    ),
};

const defaultProps = {
    arrayNews: PropTypes.arrayOf(
        PropTypes.shape({
            urlToImage: '',
        })
    ),
};

function NewsTemplate({ arrayNews }) {
    return arrayNews.map((news) => {
        const { title, description, url, urlToImage } = news;

        const isDescription = description || title;
        const isImage = urlToImage || imageNotFound;

        return (
            <article className='news-card' key={title}>
                <div className='news-card__box'>
                    <img
                        className='news-card__image'
                        src={isImage}
                        alt={title}
                        width='445'
                        height='300'
                    />
                    <div className='news-card__title-wrap'>
                        <h2 className='news-card__title'>{title}</h2>
                    </div>
                </div>
                <p className='news-card__desc'>{isDescription}</p>
                <div className='news-card__action-box'>
                    <a
                        className='news-card__action'
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Read more
                    </a>
                </div>
            </article>
        );
    });
}

NewsTemplate.propTypes = propTypes;
NewsTemplate.defaultProps = defaultProps;

export default NewsTemplate;
