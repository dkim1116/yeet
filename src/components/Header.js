import React from 'react';
import { connect } from 'react-redux';
import { googleSignIn, googleSignOut } from '../actions';

class Header extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
          window.gapi.client
            .init({
              clientId:
              '235133278787-1hg8blc38hjs4f0kg4auamesd3k194m1.apps.googleusercontent.com',
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

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
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
                <div className="ui pointing menu">
                    <a className="active item">
                        Home
                    </a>
                    <a className="item">
                        Yeets
                    </a>
                </div>
                <div>
                    {this.renderAuthButton()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.isSignedIn,
        userId: state.userId
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);