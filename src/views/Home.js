import React from 'react';
import Counter from 'components/Counter';
import StarsList from 'components/StarsList';
import { getStars } from 'actions/stars';
import { connect } from 'react-redux';

@connect((state) => ({
  stars: state.stars.items,
}), {
  getStars
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    if (!props.stars) props.getStars('joshhunt');
  }

  render() {
    return (
      <div>
        <h1>Starred by joshhunt</h1>
        {this.props.stars && <StarsList stars={this.props.stars} />}
      </div>
    );
  }

}
