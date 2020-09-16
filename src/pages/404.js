import React from "react";
import "./404.css";
import { Redirect } from "react-router-dom";

class ErrorPageNotFound extends React.Component {
  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        <html>
          <head>
            <title>404 | DaniJourney</title>

            <style media="screen"></style>
          </head>
          <body>
            <div class="message">
              <h2>404</h2>
              <h1>Page Not Found 🤔</h1>
              <p>
                The specified file was not found on this website. Please check
                the URL for mistakes and try again.
              </p>
              {this.renderRedirect()}
              <button onClick={this.setRedirect}>Go to Home</button>
              <p></p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wikipedia.org/wiki/HTTP_404"
              >
                What is 404?
              </a>
            </div>
          </body>
        </html>
      </div>
    );
  }
}

export default ErrorPageNotFound;
