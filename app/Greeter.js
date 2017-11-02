import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css'; // 导入

class Greeter extends Component{
  render() {
    return (
      <div className={styles.test}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter