/**
 * @jsx React.DOM
 */


var React = require('react')

/* Form Fields for first page  - "personal information" */
var InfoFields = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Personal Information</h2>
        <ul className="form-fields">
          <li>
            <label>Full Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
          </li>
          <li>
            <label>date of Birth</label>
            <input type="date" ref="dob" defaultValue={this.props.fieldValues.dob} />
          </li>
          <li>
            <label>Phone number</label>
            <input type="number" ref="phone" defaultValue={this.props.fieldValues.phone} />
          </li>
          <li> 
          <input type="email" ref="email" defaultValue={this.props.fieldValues.email} />
          /* Address */ 
          </li>

          <li>
            <label> Address </label>
            <input type="text" ref="address" defaultValue={this.props.fieldValues.address} />
          </li>
           <label> Address Line 2 </label>
           <input type="text" ref="addressline" defaultValue={this.props.fieldValues.addressline} />
          /* City will go here */
          <li>

          </li>
          /* State will go here */
          <li>
          </li>

          /* Zip Code will go here */
          <li>
          </li>

          /* Bahai Id Will go here */
          <li>
          </li>


          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  },

/* nextStep: saves form values, calls ...itself? */

  nextStep: function(e) {
    e.preventDefault()

    /* form values */
    var data = {

       name : this.refs.name.getDOMNode().value,
       dob  : this.refs.dob.getDOMNode().value,
       phone : this.refs.phone.getDOMNode().value,
       email : this.refs.email.getDOMNNOde().value,
       address : this.refs.email.getDOMNode().value,
       addressline : this.refs.addressline.getDOMNnode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()

  }
    })

module.exports = InfoFields