import React from "react";
import { connect } from "react-redux";
import userManager from "../utils/userManager";
import { loadSubscriptionsStart } from "../actions";



class MainPage extends React.Component {
  // load the subscriptions
  componentWillMount() {
    this.props.dispatch(loadSubscriptionsStart());

  }



  // display the current user
  showUserInfoButtonClick(event) { }

  render() {
    const { user, channels } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.title}>
          <h3>Welcome, {user ? user.profile.name : "Mister Unknown"}!</h3>
          <p>Here are some of your YouTube channel subscriptions:</p>
        </div>
        {channels.length > 0 ? (
          this.channels
        ) : (
            <i>You have no subscriptions.</i>
          )}
        <button
          onClick={event => {
            event.preventDefault();
            alert(JSON.stringify(this.props.user, null, 2));
          }}
        >
          Show user info
        </button>
        <button
          onClick={event => {
            event.preventDefault();
            userManager.removeUser(); // removes the user data from sessionStorage
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    flex: "1 0 auto"
  },
  list: {
    listStyle: "none"
  },
  li: {
    display: "flex"
  }
};

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
    channels: state.subscriptions.channels
  };
}

export default connect(mapStateToProps)(MainPage);