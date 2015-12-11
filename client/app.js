import React from 'react'
import { Datepicker, Button, QueueAnim } from 'antd'

import Logo from './components/logo'

import './style/index.less'

import styles from './main.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.goGithub = this.goGithub.bind(this)
    this.goNPM = this.goNPM.bind(this)
  }

  render () {
    const reactUrl = 'http://i.imgur.com/zKsjGRD.png'
    const antdUrl  = 'http://i.imgur.com/uwct3RI.png'
    return (
      <div>
        <div className={styles.jumbotron}>
          <Logo slogan='React' imgUrl={reactUrl} />
          <div className={styles.desc}>X</div>
          <Logo slogan='Ant Design' imgUrl={antdUrl} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>React Headstream</h2>
          <QueueAnim delay={500}>
            <p key='a'>
              This is a project named <strong>React Headstream</strong>
            </p>
            <p key='b'>
              We build it base on <a href='http://ant.design' target='_blank'><strong>Ant Design</strong></a>
            </p>
            <div key='c'>
              <h4>Tools:</h4>
              <p>React, Webpack, Babel 6</p>
            </div>
            <div key='d'>
              <h4>Features</h4>
              <p><strong>Hot Module Replacement</strong> based on <a href='https://github.com/gaearon/babel-plugin-react-transform' target='_blank'>babel-plugin-react-transform</a></p>
              <p><strong>CSS Modules</strong> in ` client ` folder based on <a href='https://github.com/css-modules/css-modules' target='_blank'>CSS Modules</a> and use css-loader</p>
              <p><strong>Override part styles</strong> in Ant Design (rewrite the `custome.less` partly in styles)</p>
            </div>
            <div key='e'>
              <h4>Features</h4>
              <p><strong>Hot Module Replacement</strong> based on <a href='https://github.com/gaearon/babel-plugin-react-transform' target='_blank'>babel-plugin-react-transform</a></p>
              <p><strong>CSS Modules</strong> in ` client ` folder based on <a href='https://github.com/css-modules/css-modules' target='_blank'>CSS Modules</a> and use css-loader</p>
              <p><strong>Override part styles</strong> in Ant Design</p>
            </div>
            <div key='f'>
              <h4 className={styles.more}>And one more thing</h4>
              <p>We have a tool to init a new project ` Tapas-init `</p>
            </div>
            <p key='g'>
              <Button type='primary' onClick={this.goGithub}>Github</Button>
              <Button type='ghost' onClick={this.goNPM}>Tapas-init</Button>
            </p>
          </QueueAnim>
        </div>
        <div className={styles.footer}>
          <p>The keyword `this` always refers to the `owner` of a function in JavaScript</p>
        </div>
      </div>
    )
  }

  goGithub() {
    window.open('https://github.com/vagusX/react-headstream')
  }

  goNPM() {
    window.open('https://www.npmjs.com/package/tapas-init')
  }
}

export default App
