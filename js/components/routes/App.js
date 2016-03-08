import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { switchLocale } from 'actions/ui';

export class App extends React.Component {
  handleLocaleSwitch(locale, e) {
    e.preventDefault();
    this.props.dispatch(switchLocale({ locale }));
  }

  renderLocaleSwitcher(locale) {
    return (
      <li key={locale}>
        <a href="#" onClick={this.handleLocaleSwitch.bind(this, locale)}>
          Switch to {locale.toUpperCase()}
        </a>
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul>
          { ['it', 'en'].map(this.renderLocaleSwitcher.bind(this)) }
        </ul>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
