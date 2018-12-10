import React from 'react';

class Entry extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <div>
        <input className="checkbox" type="checkbox" />
         {this.props.entry}
      </div>
    )
  }
}

export default Entry;