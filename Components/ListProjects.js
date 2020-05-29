
import React, { Component } from "react";

import projets from '../Helpers/ProjectsData'
import {FlatList,StyleSheet, SafeAreaView} from 'react-native';
import ProjectItem from "./ProjectItem";
class ListProjects extends React.Component {

    investir = () => {
       // console.log(this.props.navigation.navigate)
         this.props.navigation.navigate("Investir")

    }
    render() {
        console.log(this.props.navigation.state.params)

        return (

            <FlatList
                style={styles.list}
                data={projets}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <ProjectItem projet={item} investir={this.investir}/>}


            />


        );
    }

}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 50,
    }
})
export default (ListProjects);


