import React, {Component} from 'react';
import './items__display.css';


export default class ItemsDisplay extends Component {

    render() {
      return (
      <>
        <div className="items__display">
        
            <ul className="list-group">
                <li className="list-group-item">Your Place:</li>
                <li className="list-group-item list-group-item-primary" id="place">
                Остров Юность
                </li>
            </ul>

            <ul className="list-group">
                <li className="list-group-item">Your Time:</li>
                <li className="list-group-item list-group-item-primary" id="time">
                12:00
                </li>
            </ul>

            <div class="btn-main">
                <button type="button" class="btn btn__style btn-lg btn-info" id="btn">
                    Нажми на меня
                </button>
            </div>

        </div>

      </>
        );
    }
}