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
            console.log('inside auth change ' + isSignedIn);
            this.props.googleSignIn(this.auth.currentUser.get().getId());
        } else {
            console.log('inside auth change ' + isSignedIn);
            this.props.googleSignOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
            );
        } else {
            return (
            <button onClick={this.onSignInClick} className="ui red google button">
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
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.googleAuth.isSignedIn
    };
}

const mapDispatchToProps = (dispatch) => ({
    googleSignIn: () => {
        dispatch(googleSignIn)
    },
    googleSignOut: () => {
        dispatch(googleSignOut)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);