import React from 'react';
import Counter from '../components/Counter';
import StarsList from '../components/StarsList';
import { getStars } from '../actions/Stars';
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
        <h1>Home</h1>
        <Counter />

        <h2>Starred by joshhunt</h2>
        {this.props.stars && <StarsList stars={this.props.stars} />}
      </div>
    );
  }

}
