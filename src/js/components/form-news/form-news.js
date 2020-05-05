import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './form-news.scss'

export default class FormNews extends Component {

    static propTypes = {
        updateNews: PropTypes.func.isRequired,
        searchNews: PropTypes.func,
    }

    static defaultProps = {
        searchNews: () => {},
    }

    state = {
        searchValue: '',
        selectedCountry: 'de',
        selectOptions: [
            { value: 'de', label: 'Germany' },
            { value: 'ru', label: 'Russia' },
            { value: 'it', label: 'Italy' }
        ]
    }

    onSearchNews = (event) => {
        event.preventDefault();

        const { searchNews, updateNews } = this.props;
        const { selectedCountry, searchValue } = this.state;

        if (searchValue.length == 0) {
            return updateNews(selectedCountry);
        }
        
        return searchNews(selectedCountry, searchValue);
    }

    onUpdateNews = ({ target }) => {
        const selectedCountry = target.value;
        const { updateNews } = this.props;

        this.setState({
            selectedCountry
        });

        return updateNews(selectedCountry);
    }

    onChangeSearchValue = ({ target }) => {
        const searchValue = target.value;

        this.setState({
            searchValue
        });
    }

    onClearSearchForm = () => {
        this.setState({
            searchValue: ''
        });
    }

    render() {
        const { selectOptions } = this.state;

        const optionsElement = selectOptions.map(({ value, label }) => {
            return (
                <option
                    key={value}
                    className="form-news-select__item"
                    value={value}>{label}
                </option>
            );
        });

        return (
            <form
                className="form-news"
                onSubmit={this.onSearchNews}
            >
                <select
                    className="form-news-select"
                    onChange={this.onUpdateNews}
                >
                    <>{optionsElement}</>
                </select>

                <div className="form-news__search-container">
                    <button
                        className="btn btn__search"
                        aria-label="Search"
                        type="submit"
                    >
                        <svg className="btn__icon" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                            <path d="M0,0h24v24H0V0z" fill="none"></path>
                        </svg>
                    </button>

                    <input
                        className="form-news__search"
                        aria-label="Search news input"
                        placeholder="Search news"
                        type="search"
                        value={this.state.searchValue}
                        onChange={this.onChangeSearchValue}
                    >
                    </input>

                    <button
                        className="btn btn__remove"
                        aria-label="Remove search value"
                        type="button"
                        onClick={this.onClearSearchForm}
                    >
                        <svg className="btn__icon" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            <path d="M0 0h24v24H0z" fill="none"></path>
                        </svg>
                    </button>
                </div>
            </form>
        );
    }
}
