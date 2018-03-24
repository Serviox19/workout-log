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
    this.state = { loading: true };
  }

  componentDidMount() {
    console.log(this.props.categories);
  }

  renderListItem() {
    const categories = this.props.categories.types;
    if (categories == null) {
      return (
        <Text style={{ textAlign: 'center' }}>Add Categories</Text>
      )
    } else {
      return Object.keys(categories).map(function(data) {
        return (
          <ListItem
            onPress={() => Actions.categoryList(
              {id: data, category: categories[data].name})}>
            <Body>
              <Text>{categories[data].name}</Text>
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
  const categories = state.categories;

  return { categories };
}

export default
connect(mapStateToProps, { categoriesFetch })(CategoryList);
