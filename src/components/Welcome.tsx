import * as React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import api from '../api/api';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
`;

const PhotoItem = styled.Image`
  height: 480px;
  width: 640px;
`;

export default class Welcome extends React.Component<object, object> {
  state = {
    photos: [],
  };

  componentDidMount() {
    api.getPhotos().then(photos =>
      this.setState({
        photos,
      }),
    );
  }

  renderItem = ({ item }) => <PhotoItem source={{ uri: item.photo }} />;

  render() {
    return (
      <Container>
        <Instructions>Koality Picker</Instructions>
        <FlatList
          data={this.state.photos}
          renderItem={this.renderItem}
          resizeMode="contain"
        />
      </Container>
    );
  }
}
