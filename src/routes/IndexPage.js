import React,{Component,PropTypes} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import $ from 'jquery';
import Example from './../components/Example.js';
import CommonTree from './../components/tree/component/CommonTree.jsx';
import Dialog from './../components/dialog/component/Dialog.jsx';

export default class IndexPage extends Component {
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
        <Dialog></Dialog>
        <Example >
        </Example>
      </div>
    )
  }
}



IndexPage.propTypes = {
};

IndexPage.state={

};

//export default connect()(IndexPage);
