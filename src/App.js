import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import CheckoutPage from './pages/checkout/checkout.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends React.Component {

  unsubscribefromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser:
              {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          );
        });
      }
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubscribefromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}
          />
          <Route exact path='/checkout' component={CheckoutPage}></Route>
        </Switch>

      </div>
    );
  }
}
const mapStateToProps = (state) =>
({
  currentUser: selectCurrentUser(state)
})
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
