import React, {Component} from 'react';

export default class FooterBar extends Component {
  render() {
    return (
      <div className="footer_bar">

      <div className="button footer_notification settings">

        <i className="fa fa-cogs" aria-hidden="true"></i>


      </div>
      <div className="footer_notification button new ">
        Add item <i className="fa fa-plus-square" aria-hidden="true"></i>


      </div>
      <div className="footer_notification button history">
        <i className="fa fa-history" aria-hidden="true"></i>


      </div>

      <div className="footer_notification button">
        2 <i className="fa fa-exclamation-triangle " aria-hidden="true"></i>

      </div>


    </div>

    );
  }
}
