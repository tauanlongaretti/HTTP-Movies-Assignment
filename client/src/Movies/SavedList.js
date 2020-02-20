import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 48px;
  font-weight: 600;
  border-radius: 10px;
  color: gray;
  
  :hover {
    color: white;
    background-color: gray;
    padding: 8px;
    margin-right: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3),
    0 6px 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <StyledNavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="saved-movie">{movie.title}</span>
            </StyledNavLink>
          );
        })}
        <div className="home-button">
          <StyledLink to="/">Home</StyledLink>
        </div>
      </div>
    );
  }
}
