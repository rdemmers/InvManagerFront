import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
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
                  <span className="icon is-medium is-right">
                      <i className="fa fa-check"></i>
                    </span>
                </div>
              </div>
            </div>



    );
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }


}
