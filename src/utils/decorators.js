// https://github.com/danharper/fluxible-decorators-experiment/blob/master/decorators.js
import React from 'react';
import {connectToStores} from 'fluxible-addons-react';

/**
 * Decorates a Component to listen on given stores
 * @param stores
 * @returns {Function} a higher-order component
 */
export function useStores(stores) {
  if (!(stores instanceof Array)) {
    console.error('[useStores] Please supply the stores as an array');
  }

  return function (target) {
    const connector = connectToStores(target, stores, ::target.fromStores);
    connector.willTransitionTo = target.willTransitionTo;

    return connector;
  };
}

export function initialActions(...initialActions_) {
  if (initialActions_[0] instanceof Array) {
    console.error('[decorators.js:initialActions] ', 'Please supply the actions as single arguments, not wrapped in an array.');
  }

  return function(ComposedComponent) {
    ComposedComponent.initialActions = initialActions_;
    return ComposedComponent;
  };
}

export function provideContext(ComposedComponent) {
  ComposedComponent.contextTypes = Object.assign({
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  }, ComposedComponent.contextTypes);

  return ComposedComponent;
}

export function provideContextWithRouter(ComposedComponent) {
  ComposedComponent.contextTypes = Object.assign({
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired,
    router: React.PropTypes.func.isRequired
  }, ComposedComponent.contextTypes);

  return ComposedComponent;
}

export function provideContextWithTranslator(ComposedComponent) {
  ComposedComponent.contextTypes = Object.assign({
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired,
    translator: React.PropTypes.object.isRequired
  }, ComposedComponent.contextTypes);

  return ComposedComponent;
}

export function provideContextWithRouterAndTranslator(ComposedComponent) {
  ComposedComponent.contextTypes = Object.assign({
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired,
    router: React.PropTypes.func.isRequired,
    translator: React.PropTypes.object.isRequired
  }, ComposedComponent.contextTypes);

  return ComposedComponent;
}
