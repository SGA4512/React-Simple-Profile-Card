import React, { Component } from 'react'
import './Favorite.scss'

class Favorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bActive: false,
    }
    this.onClickHeart = this.onClickHeart.bind(this)
  }
  onClickHeart() {
    console.log('hello')
    this.setState({ bActive: !this.state.bActive })
  }
  render() {
    let imgURL = 'https://angular-test-647ca.firebaseapp.com/assets/heart.svg'
    if (this.state.bActive)
      imgURL =
        'https://angular-test-647ca.firebaseapp.com/assets/heart_active.svg'
    return (
      <div className="favoriteContainer">
        <div className="favoriteContainer__header">
          <span className="favoriteContainer__header__title">
            Developer Profile
          </span>
          <img
            className="favoriteContainer__header__star"
            src={imgURL}
            onClick={this.onClickHeart}
          />
        </div>
        <div className="favoriteContainer__body">
          <img
            className="favoriteContainer__body__profile"
            src="https://angular-test-647ca.firebaseapp.com/assets/profile.svg"
          />
          <span className="favoriteContainer__body__profile-name">
            Your Name
          </span>
          <span className="favoriteContainer__body__profile-title">
            Your Title
          </span>
          <span className="favoriteContainer__body__profile-address">
            City, Country
          </span>
        </div>
        <div className="favoriteContainer__footer">
          <div className="favoriteContainer__footer__col">
            <span className="views-count">1,234</span>
            <span className="views-label">
              Profile
              <br />
              Views
            </span>
          </div>
          <div className="favoriteContainer__footer__col">
            <span className="views-count">5,678</span>
            <span className="views-label">
              Website
              <br />
              Views
            </span>
          </div>
          <div className="favoriteContainer__footer__col">
            <span className="rating-div">
              <img
                className="rating"
                src="https://angular-test-647ca.firebaseapp.com/assets/star_rate.svg"
              />
            </span>
            <span className="views-label">
              Avg.
              <br />
              Rating
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Favorite
