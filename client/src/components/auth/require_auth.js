import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        // this.context.router.push('/');
        // <Redirect push to="/"/>
        this.context.router.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        // this.context.router.push('/');
        this.context.router.history.push('/')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
