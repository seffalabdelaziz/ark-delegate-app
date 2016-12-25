import React, { Component } from 'react';
import {
  Image,
  ListView,
  Tile,
  Title,
  Subtitle,
  TouchableOpacity,
  Screen,
  Divider,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

import { connect } from 'react-redux';
import { navigatePush } from '../../Redux';

class RestaurantsList extends Component {
  static propTypes = {
    onButtonPress: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getRestaurants() {
    return [{
      "name": "Gaspar Brasserie",
      "address": "185 Sutter St, San Francisco, CA 94109",
      "description": "Gaspar is a delightful French restaurant in San Francisco’s Financial District that is inspired by the romantic, bustling Paris of old.\n\nLocated near famed Union Square, our richly-designed interiors make you feel as if you are truly in Paris and provide the perfect setting for enjoying our exquisite classic and modern French fare such as Duck Leg Confit and always popular Steak Frites.\n\nGaspar is a delightful French restaurant in San Francisco’s Financial District that is inspired by the romantic, bustling Paris of old. Located near famed Union Square, our richly-designed interiors make you feel as if you are truly in Paris and provide the perfect setting for enjoying our exquisite classic and modern French fare such as Duck Leg Confit and always popular Steak Frites.",
      "url": "gasparbrasserie.com",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-1.jpg" },
      "mail": "info@gasparbrasserie.com"
    }, {
      "name": "Chalk Point Kitchen",
      "address": "527 Broome St, New York, NY 10013",
      "description": "Situated in the heart of SoHo, at 527 Broome Street (between Thompson and Sullivan) Chalk Point Kitchen is a 60 seat “market to table” owned by Lower East Side restaurateur, Matt Levine and his indieFORK team.",
      "url": "",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-2.jpg" },
      "mail": ""
    }, {
      "name": "Kyoto Amber Upper East",
      "address": "225 Mulberry St, New York, NY 10012",
      "description": "",
      "url": "",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-3.jpg" },
      "mail": ""
    }, {
      "name": "Sushi Academy",
      "address": "",
      "description": "",
      "url": "",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-4.jpg" },
      "mail": ""
    }, {
      "name": "Sushibo",
      "address": "",
      "description": "",
      "url": "",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-5.jpg" },
      "mail": ""
    }, {
      "name": "Mastergrill",
      "address": "",
      "description": "",
      "url": "",
      "image": { "url": "https://shoutem.github.io/restaurants/restaurant-6.jpg" },
      "mail": ""
    }]
  }

  renderRow(restaurant) {
    const { onButtonPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onButtonPress(restaurant)}>
        <Image
          styleName="large-banner"
          source={{ uri: restaurant.image.url }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
          </Tile>
        </Image>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Screen>
        <NavigationBar title="All Restaurants" />

        <ListView
          data={this.getRestaurants()}
          renderRow={restaurant => this.renderRow(restaurant)}
        />
      </Screen>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (restaurant) => {
    dispatch(navigatePush({
      key: 'DelegatePicker',
      title: 'DelegatePicker',
    }, { restaurant }));
  },
});

export default connect(
	undefined,
	mapDispatchToProps
)(RestaurantsList);

