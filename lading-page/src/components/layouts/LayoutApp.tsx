import React from 'react';
import PropTypes from 'prop-types';
import { Routes } from '../../routes';
import { Link, Route } from 'react-router-dom';

LayoutApp.propTypes = {

};

function LayoutApp(props) {
    return (
        <>
            <div className="layout">
                {
                    Routes.map((route: any) => {
                        const { id, component: Component, exact } = route;
                        return (
                            <Route
                                key={id}
                                exact={exact}
                                path={id}
                                render={
                                    (routeProps: any) => (
                                        <Component {...routeProps} />
                                    )
                                }
                            />
                        );
                    })
                }
            </div>
        </>



    );
}

export default LayoutApp;