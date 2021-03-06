import React from 'react';
import PropTypes from 'prop-types';

import FormNews from '../form-news';
import ErrorBoundary from '../error-boundary';

import './header.scss';

const propTypes = {
    updateNews: PropTypes.func.isRequired,
    searchNews: PropTypes.func,
};

const defaultProps = {
    searchNews: () => {},
};

function Header({ updateNews, searchNews }) {
    return (
        <ErrorBoundary>
            <header className='header'>
                <a className='header-logo' href='#'>
                    News App
                </a>
                <nav className='header__nav'>
                    <FormNews
                        updateNews={updateNews}
                        searchNews={searchNews}
                    />
                </nav>
            </header>
        </ErrorBoundary>
    );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
