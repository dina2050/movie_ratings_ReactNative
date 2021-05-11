import React from "react";
import {Button, FlatList, Image, Text, View} from "react-native";
import Film from "./Film";
import {films} from "../../movies.json";
import {styles} from "../../App";
import {AddFilm} from "./AddFilm";

export class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked:false
        };

    }
    addANewMovie(){
        this.setState({
            isClicked:true
        })
    }
    render() {
        if(this.state.isClicked === true){
            return (<AddFilm />)
        }
        return (

                <View style={styles.container}>
                    <Text style={styles.mainTitleStyle}>Movies</Text>
                    <FlatList
                        renderItem={(obj) => <Film key={obj.item.key} {...obj.item} />}
                        data = {films}
                    />
                    <Button title="addMovie" onPress={this.addANewMovie.bind(this)}>Stop</Button>
                </View>
        );
    }
}
