/* Registration.jsx */

/* This is the parent */

/* Form contains: info, service information, other details. Success page 
/*	to also be made  */

/* need to define saveValues and next Step Functions here */


var fieldValues = {
  name     : null,
  dob    : null,
  phone : null,
  email    : null,
  address   : null,
  addressline : null, 
  city: null, 
  state : [],
  zip : null, 
  bahaiid : null,
}

var React 			= require('react')
var InfoFields 		= require('./AccountFields')
var ServiceFields 	= require('./ServiceFields')
var DetailFields 	= require('./DetailFields')

/* Confirmation fields show all data at once before submitting */
var Confirmation 	= require('./Confirmation')

/* Consider putting confirmation page */
var Success			= require('./Success')

var Registration = React.createClass({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  render: function() {
    switch(this.state.step) {
      case 1:
        return <InfoFields  fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues}/>
      case 2:
        return <ServiceFields fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues}/>
      case 3:
        return <Detail Fields />

      case 4: 
      return ><Confirmation fieldValues={fieldValues}
                           previousStep={this.previousStep}
                           submitRegistration={this.submitRegistration} />  
      case 5:
		return <Success fieldValues={fieldValues} />
    }
  }
}
 
module.exports = Registration


saveValues: function(fields) {
  return function() {
    fieldValues = Object.assign({}, fieldValues, fields)
  }()
},
 
nextStep: function() {
  this.setState({
    step : this.state.step + 1
  })
},

previousStep: function() {
  this.setState({
    step : this.state.step - 1
  })
},