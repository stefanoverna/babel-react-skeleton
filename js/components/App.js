import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export default function App({ booted }) {
  return (
    <div>
      { booted ? 'Booted!' : 'Loading...' }
    </div>
  );
}

App.propTypes = {
  booted: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return { booted: state.ui.booted };
};

export default connect(mapStateToProps)(App);
