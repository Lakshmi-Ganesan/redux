import React from 'react'
import FeedbackForm from './Feedbackform'

class FeedbackPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <FeedbackForm onSubmit={this.submit} />
  }
}
export default FeedbackPage