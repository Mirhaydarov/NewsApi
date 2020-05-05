import React, { Component } from 'react';

import Header from '../header';
import RandomNews from '../random-news';
import NewsItem from '../news-item';
import ErrorBoundary from '../error-boundary';
import ErrorIndicator from '../error-indicator';
import NewsService from '../../service/news-service';

export default class App extends Component {
    newsService = new NewsService();

    state = {
        news: [],
        hasError: false,
    };

    componentDidMount() {
        this.updateNews();
    }

    updateNews = (country = 'de') => {
        this.newsService
            .getNews(country)
            .then((news) => {
                this.setState({
                    news,
                    hasError: false,
                });
            })
            .catch((hasError) => {
                this.setState({
                    hasError
                });
            });
    };

    searchNews = (country = 'de', query) => {
        this.newsService
            .everything(country, query)
            .then((news) => {
                this.setState({
                    news,
                    hasError: false,
                });
            })
            .catch((hasError) => {
                this.setState({
                    hasError
                });
            });
    };

    render() {
        const { news, hasError } = this.state;

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <Header
                    updateNews={this.updateNews}
                    searchNews={this.searchNews}
                />
                <RandomNews arrayNews={news} />
                <NewsItem arrayNews={news} />
            </ErrorBoundary>
        );
    }
}
