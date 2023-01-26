import React from 'react';
import { Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const Authorizacion = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Cookies.get("user_session") ? (
                <Component {...props} />
            ) : (
                <redirect to="/" />
            )
        }
    />
);

export default Authorizacion;
