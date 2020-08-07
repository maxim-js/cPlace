import React, {Component} from 'react';
import './tuning.css';


export default class Tuning extends Component {

    render() {
      return (
        <div className="tuning">
            <span className="tuning__title">Options:</span>

            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <div type="text" class="form-control">
                    Добавить каталог популярных мест
                </div>
            </div>
        </div>
      );
    }
}