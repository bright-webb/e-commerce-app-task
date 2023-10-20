import React from 'react';
import PropTypes from 'prop-types';
import { HomeWrapper } from './Home.styled';

const Home = () => (
 <HomeWrapper data-testid="Home">
    hello from here
 </HomeWrapper>
);

Home.propTypes = {};

Home.defaultProps = {};

export { Home };
