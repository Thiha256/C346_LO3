import React from 'react';
import {View, Text,Image,ScrollView} from 'react-native';

import Movie from './components/Movie';


class AllMovies extends React.Component{
  render(){
    return(
        <ScrollView>
          <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"}  icon_color={'red'} poster={require('./img/doctor-sleep.jpg')}/>
            <Movie title={"MIDWAY"} year={2022} icon_name={"person-rifle"} icon_color={'green'} poster={require('./img/midway.jpg')}/>
            <Movie title={'Gerfield'} year={2024} icon_name={"wifi"} icon_color={'blue'} poster={{uri:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/01/garfield_movie_ver2_xlg.jpg'}}/>
        </ScrollView>
    );
  };
}

export default AllMovies;

