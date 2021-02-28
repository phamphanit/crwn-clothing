import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import CheckoutPage from './pages/checkout/checkout.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {

  unsubscribefromAuth = null;
  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;
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
      addCollectionAndDocuments('collections', collectionArray.map(({ title, items }) => ({ title, items })));
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
  currentUser: selectCurrentUser(state),
  collectionArray: selectCollectionForPreview(state)
})
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
