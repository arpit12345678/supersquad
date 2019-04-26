import React,{Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreator} from 'redux';
import {addCharacterById} from '../actions';

class Characterlist extends Component{
    render()
    {
        console.log('this.props',this.props);
        return (
            <div>
                <h4>
                    Character
                </h4>
                <ul className="list-group">
                    {
                        this.props.characters.map(characters=>{
                            return (
                                <li key={characters.id} className="list-group-item">
                                <div className="list-item">
                                    {characters.name}
                                </div>
                                <div className="list-item right-button" onClick={()=>this.props.addCharacterById(characters.id)}>
                                +</div>
                                </li>
                            )
                        })
                    }
                    </ul>
            </div>
        )
    }
}

function makeStateToProps(state){
   // console.log('state',state);
    return {
        characters:state.characters
    };
}

export default connect(makeStateToProps,{addCharacterById})(Characterlist);