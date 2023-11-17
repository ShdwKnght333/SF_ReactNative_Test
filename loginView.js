import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { setUpInitialURL } from './loginModule';

class LoginWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInUrl : 'https://secure.sharefiletest.com',
      testURL : "https://auth.sharefiletest.io/connect/authorize?response_type=code&client_id=sharFileMobileTest&redirect_uri=sharefile://sharefileAuth.com&scope=sharefile:restapi:v3 openid profile sharefile:account offline_access&code_challenge=a6105709076b3f37c03f27b63bdc287bb985cdfde26067bb151313c4da4b28b8&code_challenge_method=S256&state=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
      oldSignIn : 'https://secure.sharefiletest.com'
    }
  }

  async componentDidMount() {
    newSignInUrl = await setUpInitialURL();
    console.log("Sign In URL is : " + newSignInUrl);
    this.setState({signInUrl:newSignInUrl});
  }

  // oldSignin = 
  render() {
    // signInUrl = await setUpInitialURL();
    return (
      <WebView
        source={{ uri: this.state.signInUrl }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default LoginWebView;