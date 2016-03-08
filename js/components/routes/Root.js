import React from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';

export class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bootTime: new Date(),
    };
  }

  render() {
    return (
      <div>
        <FormattedMessage
          id="app.root.booted"
          values={{
            time: <FormattedRelative value={this.state.bootTime} />,
          }}
        />
      </div>
    );
  }
}

export default Root;
