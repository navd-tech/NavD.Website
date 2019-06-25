import React from "react"
import { checkSession } from "./src/utils/auth"

class SessionCheck extends React.Component {
  state = {
    loading: true,
  }

  componentWillMount() {
    console.log(localStorage.getItem("isLoggedIn"))
    checkSession(this.handleCheckSession)
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }


  construct() {
    this.handleCheckSession = this.handleCheckSession.bind(this)
  }




  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}

export default wrapRootElement;