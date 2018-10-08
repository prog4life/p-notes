import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <span>{'Page not found! You can go to '}</span>
    <Link to="/">
      {'Notes'}
    </Link>
    <span>{' or '}</span>
    <Link to="/todos">
      {'Todos'}
    </Link>
  </div>
);

export default NotFoundPage;