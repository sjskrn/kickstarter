import StripeCheckout from 'react-stripe-checkout';
import {Button, Grid, Col, Row, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup, ProgressBar, Well} from 'react-bootstrap'
import Cookies from 'universal-cookie';
import HeavyButton from './HeavyButton'
import React, { Component } from 'react'
import ErrorModal from './ErrorModal'

// CheckoutForm.js
// import {
// 	CardElement,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   Elements,
//   injectStripe,
// } from 'react-stripe-elements';

// import CardSection from './CardSection';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      amount: "",
      email: "",
      goal: 0,
      demo: "",
      demo_id: "",
      ShowErrorModal: "",
      progress: 0
    }
  }

  // THIS shold be done in props:
  componentDidMount() {
    const cookies = new Cookies();
    let demo = this.props.demo
    let demo_id = this.props.demo_id
    let goal = this.props.goal
    let progress = this.props.progress
    if (cookies.get('userCookie')) {
      this.setState({
      email: cookies.get('userCookie').email,
      user_id: cookies.get('userCookie').id,
      goal: goal,
      demo: demo,
      demo_id: demo_id,
      progress: progress,
      ShowErrorModal: false
      });
      console.log("here is the ORDER form cookie", cookies.get('userCookie').id)
      console.log("*******the state on order form: ", this.state  )
    } else {
      this.setState({
        ShowErrorModal: true
      })
    }
  }

  handleChange = (e) => {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

  }

  toggleErrorModal = () => {
      window.location='/';
  }

  onToken = (token) => {
    console.log(token)
    const data = (token);
    let demo = this.props.location.state.demo
    let demo_id = this.props.location.state.demo.id
    let amount = this.state.amount
    let user_id = this.state.user_id
    let email = this.state.email
    fetch(`http://localhost:3000/orders`,
      { method: "POST",
        body: JSON.stringify(
          {
            stripeToken: token.id,
            email: email,
            user_id: user_id,
            demo: demo,
            demo_id: demo_id,
            amount: amount,
            currency: 'cad'

          }),
          headers: {"content-type": "application/json"}
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then((response) => {
          if (response.ok) {
            console.log({ response })
            this.props.history.push(`/demos/${demo_id}`);
            // this.props.history.push('/');
          } else {
            console.log({ msg: response.error_msg })
          }
        })
      }



  render() {
    if (this.state.ShowErrorModal) {
        return <ErrorModal show={this.state.ShowErrorModal} toggleErrorModal={this.toggleErrorModal} />
        } else {
          const now = Math.ceil(((this.props.location.state.progress/this.props.location.state.goal)*100)).toFixed(0)
          console.log(now)
    return (
      <div>
      <Grid>
        <Row>
          <Col xs={12} md={8}>

      <Well bsSize="small"><h4>{this.state.email}, please confirm the below contribution:</h4></Well>

      <Well bsSize="small"><h4>Demo to receive funds: {this.props.location.state.demo.name}</h4></Well>
      <Well bsSize="small">
      <h5>{this.props.location.state.demo.name}s funding Goal: ${this.props.location.state.goal}.00</h5>
      <ProgressBar now={now} label={`${now}%`} />

      </Well>


      <Row>
        <Col xs={6} md={5}>
      <form>
      <FormGroup controlId="fundingreq">
        <ControlLabel>Amount of Funding to Provide:</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl name="amount" type="integer" onChange={this.handleChange}/>
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
      </FormGroup>
      </form>
        </Col>
          </Row>

      <StripeCheckout
        amount={this.state.amount * 100}
        currency={"cad"}
        name={`Contribution to Demo:`}
        description={this.props.location.state.demo}
        email={this.state.email}
        token={this.onToken}
        allowRememberMe={true}
        bitcoin={true}
        stripeKey="pk_test_xUNvQmTjw4mSlN2LXXqsK45u"
        >
        <Button>
        <HeavyButton amount={this.state.amount * 100}/>
        </Button>
        </ StripeCheckout>

      </Col>
      </Row>
      </Grid>
      </div>
    )
    }
  }
}

export default Order

// If using react elements:
// export default injectStripe(CheckoutForm);

// <form onSubmit={this.handleSubmit}>
// <CardSection />
// <button>Confirm order</button>
// </form>
//
// OLD ORDER FORM ( for using elements vs checkout)
// import {Elements} from 'react-stripe-elements';
// import Cookies from 'universal-cookie'
// import {StripeProvider} from 'react-stripe-elements';
// import MyStoreCheckout from './MyStoreCheckout';
//
//
// class Order extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // ShowMyStoreCheckOut: ""
//     }
//   }
//
//
//
//   render() {
//        // if (!this.State.ShowMyStoreCheckOut) {
//        //     return ""
//        //     } else {
//            return (
//              <StripeProvider apiKey="pk_test_12345">
//                <MyStoreCheckout />
//              </StripeProvider>
//             )
//
//           }
//         }
//
// export default Order
