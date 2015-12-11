import React from 'react'

import styles from './logo.css'

class Logo extends React.Component {
  static propTypes = {
    slogan: React.PropTypes.string.isRequired,
    imgUrl: React.PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
  }

  render() {
    const background = {
      backgroundImage: `url(${this.props.imgUrl})`
    }

    return (
      <div className={styles.logo}>
        <div className={styles.images} style={background}></div>
        <div className={styles.slogan}>{this.props.slogan}</div>
      </div>
    )
  }
}

export default Logo
