import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterTable} from '../actions';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.props.filterTable("");
  }

  render() {
    return (
            <div className="box">
              <div className="content">
                <div className="control has-icons-left has-icons-right">
                  <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                    className="input" type="text"
                    placeholder="Search..." />
                  <span className="icon is-medium is-left">
                      <i className="fa fa-search"></i>
                    </span>
                </div>
              </div>
            </div>



    );
  }

  onInputChange(event){
    this.setState({term: event.target.value});
    this.props.filterTable(event.target.value);
  }


}

function mapDispatchToProps(dispatch){
  return bindActionCreators({filterTable}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
