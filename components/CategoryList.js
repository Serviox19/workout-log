import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, List, ListItem, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { categoriesFetch } from '../actions/CategoryActions';
import { Actions } from 'react-native-router-flux';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.props.categoriesFetch();
    this.state = {
      loading: true,
      categories: props.categories || ''
    };
  }

  renderListItem() {
    const categories = this.state.categories;
    if (categories === null) {
      return (
        <Text style={{ textAlign: 'center' }}>Add Categories</Text>
      )
    } else {
      return Object.keys(categories).map(function(key, index) {
        return (
          <ListItem
            key={key}
            onPress={() => Actions.categoryExercises(
              {title: `${categories[key].name} Exercises`, id: key, category: categories[key].name})}>
            <Body>
              <Text>{categories[key].name}</Text>
            </Body>
            <Right>
              <Icon ios='ios-arrow-forward' android='arrow-right' />
            </Right>
          </ListItem>
        );
      });
    }
  }



  render() {
    const { loading } = this.state;
    return (
      <View>
        <List
          button={true}>
          {this.renderListItem()}
        </List>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const categories = state.categories.types;

  return { categories };
}

export default
connect(mapStateToProps, { categoriesFetch })(CategoryList);
