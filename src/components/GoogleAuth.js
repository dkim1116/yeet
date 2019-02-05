import React from 'react';
import { connect } from 'react-redux';
import { googleSignIn, googleSignOut } from '../actions';
import { GOOGLE_AUTH_PUBLIC } from '../apis/constants';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
          window.gapi.client
            .init({
              clientId: GOOGLE_AUTH_PUBLIC,
              scope: 'email'
            })
            .then(() => {
              this.auth = window.gapi.auth2.getAuthInstance();
    
              this.onAuthChange(this.auth.isSignedIn.get());
              this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.googleSignIn(this.auth.currentUser.get().getId());
        } else {
            this.props.googleSignOut();
        }
    };

    handleSignInClick = () => {
        this.auth.signIn();
    };

    handleSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
            <button onClick={this.handleSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
            );
        } else {
            return (
            <button onClick={this.handleSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign In with Google
            </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToProps = ({ googleAuth: { isSignedIn } }) => ({ isSignedIn });

const mapDispatchToProps = (dispatch) => ({
    googleSignIn: (userId) => dispatch(googleSignIn(userId)),
    googleSignOut: () => dispatch(googleSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);