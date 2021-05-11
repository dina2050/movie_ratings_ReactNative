import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import {styles} from "../../App";

export class OneFilm extends React.Component {


    render() {
            return (
                <View>
                    <View>
                        <Image source={{uri: this.props.data.imageLink}} style={styles.imageStyle}/>
                        <View style={styles.ratingAndTitleStyleView}>
                            <Text style={styles.titleStyle}>{this.props.data.filmTitle}</Text>
                            <Text style={styles.ratingStyle}>{this.props.data.Default_Rating}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>{this.props.data.resume}</Text>
                        <Text style={{color: '#0000ff'}}>{this.props.data.imdbLink}</Text>
                    </View>
                </View>

            );
        }

}


