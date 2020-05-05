'use strict'

export default class NewsService {
    _address = 'https://newsapi.org/v2';
    _apiKey = '2494269a205b40a6b6790eedff4305f8';

    async topHeadlines(country = 'de') {
        const res = await fetch(
            `${this._address}/top-headlines?country=${country}&page=1&apiKey=${this._apiKey}`
        );

        if (!res.ok) {
            throw new Error(
                `received ${res.status}`
            );
        }

        return await res.json();
    }

    async everything(country = 'de', query) {
        const res = await fetch(
            `${this._address}/everything?q=${query}&language=${country}&apiKey=${this._apiKey}`
        );

        if (!res.ok) {
            throw new Error(
                `received ${res.status}`
            );
        }

        const transformResult = await res.json();
        return transformResult.articles.map(this._transformNews);
    }

    async getNews(country) {
        const res = await this.topHeadlines(country);
        return res.articles.map(this._transformNews);
    }

    _transformNews(news) {
        return {
            title: news.title,
            description: news.description,
            url: news.url,
            urlToImage: news.urlToImage,
            publishedAt: news.publishedAt
        };
    }
}
