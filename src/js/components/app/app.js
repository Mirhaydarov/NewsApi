import React, { Component } from 'react';

import Header from '../header';
import NewsService from '../../service/news-service';
export default class App extends Component {
    newsService = new NewsService();

    state = {
        news: [],
        hasError: false,
        loading: true,
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
                    loading: false,
                });
            })
            .catch((hasError) => {
                this.setState({
                    hasError,
                    loading: false,
                });
            });
    };

    searchNews = (country = 'de', query) => {
        this.newsService
            .everything(country, query)
            .then((news) => {
                this.setState({
                    news,
                    loading: false,
                    hasError: false,
                });
            })
            .catch((hasError) => {
                this.setState({
                    hasError,
                    loading: false,
                });
            });
    };

    render() {
        return (
            <React.Fragment>
                <Header
                    updateNews={this.updateNews}
                    searchNews={this.searchNews}
                />
            </React.Fragment>
        );
    }
}
