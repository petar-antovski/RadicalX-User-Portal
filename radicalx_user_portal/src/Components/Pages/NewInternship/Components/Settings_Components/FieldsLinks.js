import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Fields.css';
import FieldsIcon from './img/FieldsIcon.png';
import tick_circle_active from './img/tick_circle_active.png';
import tick_circle_innactive from './img/tick_circle_innactive.png';
import arrow_right_active from './img/arrow_right_active.png';
import arrow_right_innactive from './img/arrow_right_innactive.png';

class FieldsLinks extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index)
  }

  render() {
    return (
        <Link style={{textDecoration: 'none', outline: 'none'}} to={`/${this.props.link}`}>
          <li
            className='SettingsFieldsRow'
            onClick={this.handleClick}>
              <img className='SettingsFieldsicon' src = {FieldsIcon} alt={this.props.name} />
              <div className={this.props.isActive ? 'SettingsFieldsRowActive' : 'SettingsFieldsRowInnactive'}>
                <div className='SettingsFieldstextbox'>
                  <div className='SettingsFieldstext'>{this.props.name}</div>
                  <img className='Settingstick-circle' src={this.props.tick ? tick_circle_active : tick_circle_innactive} alt={this.props.tick ? 'tick_circle_active' : 'tick_circle_innactive'} />
                </div>
                <img className='Settingsarrow-right' src={this.props.isActive ? arrow_right_active : arrow_right_innactive} alt={this.props.isActive ? 'arrow_right_active' : 'arrow_right_innactive'} />
              </div>
          </li>
        </Link>
    );
  }
}

export default FieldsLinks;