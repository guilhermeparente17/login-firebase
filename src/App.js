import React from 'react';
import GlobalStyle from './globalStyles';
import Homepage from './pages/homepage/homepage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <>
        <GlobalStyle />
        <Homepage currentUser={this.state.currentUser} />
      </>
    );
  }
}

export default App;
