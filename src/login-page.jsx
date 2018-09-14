import React from "react";
import { Input, Button, Fa, Card, CardBody } from "mdbreact";

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-page__form">
          <Card>
            <CardBody>
              <form>
                <p className="h4 text-center py-4">Login</p>
                <div className="grey-text">
                  <Input
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <Input
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <Input
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <Input
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="cyan" type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
