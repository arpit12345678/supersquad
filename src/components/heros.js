import React,{Component } from 'react';
import {connect} from 'react-redux';
import {removecharacterbyid} from '../actions';

class heroes extends Component{
    render(){
        return (
            <div>
                <h4>
                    Your Heroes Squad:
                </h4>
                <ul  className="list-group">
                    {
                        this.props.heroes.map(hero=>{
                            return (
                                <li key={hero.id} className="list-group-item">
                                <div   className="list-item">
                                {hero.name}
                                    </div>
                                    <div className="list-item right-button" onClick={()=>this.props.removecharacterbyid(hero.id)}>
                                x</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        heroes:state.heroes
    }
}
export default connect(mapStateToProps,{removecharacterbyid})(heroes);