import React,{Component} from 'react';
import {connect} from 'react-redux';

class Squad extends Component{
    strength(){
        let strength=0;
        this.props.heroes.forEach(hero=> strength+=hero.strength);
        return strength;
    }
    intelligent(){
        let intelligent=0;
        this.props.heroes.forEach(hero=> intelligent+=hero.intelligence);
        return intelligent;
    }
    speed(){
        let i=0;
        this.props.heroes.forEach(hero=> i+=hero.speed);
        return i;
    }
    render(){
        return(
        <div>
            <h4>
                Squad Stats
            </h4>
            <ul className="list-group">
                <li className="list-group-item">
                     <b>Overall Strength: </b>{this.strength()}
                </li>
                <li className="list-group-item">
                     <b>Overall Intelligent: </b>{this.intelligent()}
                </li>
                <li className="list-group-item">
                   <b>Overall Speed: </b>{this.speed()}
                </li>
            </ul>
        </div>
        )}
}
function mapStateToProps(state){
    return {
        heroes:state.heroes
    }
}

export default connect(mapStateToProps,null)(Squad);