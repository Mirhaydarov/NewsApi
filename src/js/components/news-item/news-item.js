import React from 'react';
import PropTypes from 'prop-types';

import NewsTemplate from '../news-template';

import './news-item.scss';

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

function NewsItem({ arrayNews }) {
    return (
        <main className='news'>
            <div className='wrap'>
                <div className='news__container'>
                    <NewsTemplate arrayNews={arrayNews} />
                </div>
            </div>
        </main>
    );
}

NewsItem.propTypes = propTypes;
NewsItem.defaultProps = defaultProps;

export default NewsItem;
