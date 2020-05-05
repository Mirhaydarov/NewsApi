import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewsTemplate from '../news-template';

import './random-news.scss';

const propTypes = {
    arrayNews: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            urlToImage: PropTypes.string
        })
    )
};

const defaultProps = {
    arrayNews: PropTypes.arrayOf(
        PropTypes.shape({
            urlToImage: '',
        })
    )
};

export default class RandomNews extends Component {

    state = {
        arrayNews: [],
    }

    componentDidMount() {
        this.updateNews();
        this.interval = setInterval(this.updateNews, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps) {
        const { arrayNews } = this.props;

        if (arrayNews != prevProps.arrayNews) {
            this.updateNews();
        }
    }

    updateNews = () => {
        const { arrayNews } = this.props;

        this.setState({
            arrayNews: this.sliceNews(arrayNews),
            loading: false,
        })
    }

    sliceNews(arrayNews) {
        const startPosition = Math.round(Math.random() * 19);
        const endPosition = startPosition + 1;

        const news = [...arrayNews.slice(startPosition, endPosition)];
        return news;
    }

    render() {
        const { arrayNews } = this.state;

        return (
            <section className="random-news">
                <div className="random-news__wrap wrap">
                    <NewsTemplate arrayNews={arrayNews} />
                </div>
            </section>
        );
    };
}

RandomNews.propTypes = propTypes;
RandomNews.defaultProps = defaultProps;
