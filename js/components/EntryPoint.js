import React, { PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Router, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import routes from 'routes';

import it from 'react-intl/locale-data/it';
import en from 'react-intl/locale-data/en';

import itMessages from 'locales/it';
import enMessages from 'locales/en';

const messages = {
  it: itMessages,
  en: enMessages,
};

addLocaleData(it);
addLocaleData(en);

export class EntryPoint extends React.Component {
  render() {
    const { locale } = this.props;

    return (
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
      >
        <Router history={browserHistory}>
          { routes }
        </Router>
      </IntlProvider>
    );
  }
}

EntryPoint.propTypes = {
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return { locale: state.ui.locale };
};

export default connect(mapStateToProps)(EntryPoint);
