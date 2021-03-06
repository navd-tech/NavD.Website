/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { Component } from 'react';
import config from '../utils/config';
import TextInput from './Form/TextInput';
import validate from './Form/validate';
import Email from './Form/Email';
import Telephone from './Form/Telephone';
import TextArea from './Form/TextArea';
import Select from './Form/Select';
import Checkbox from './Form/Checkbox';
import SuccessMessage from './Form/SuccessMessage';
import FailureMessage from './Form/FailureMessage';
import './ContactForm.css';

class PricingContactForm extends Component {
  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {
        name: {
          id: 'name',
          value: '',
          placeholder: 'First Name',
          valid: false,
          validationRules: {
            minLength: 3,
            isRequired: true,
          },
          touched: false,
        },
        surname: {
          id: 'surname',
          value: '',
          placeholder: 'Last Name',
          valid: false,
          validationRules: {
            minLength: 3,
            isRequired: true,
          },
          touched: false,
        },
        email: {
          id: 'email',
          value: '',
          placeholder: 'Business email',
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true,
          },
          touched: false,
        },
        telephone: {
          id:'telephone',
          value: '',
          placeholder: 'Telephone',
          valid: false,
          validationRules: {
            minLength: 10,
            isRequired: true,
          },
          touched: false,
        },
        plans: {
          id:'plans',
          value: 'choose',
          placeholder: 'Select your plan',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'choose', displayValue: 'Choose plan', disabled: true },
            { value: 'free', displayValue: 'Free', disabled: false },
            { value: 'pro', displayValue: 'Pro',disabled: false },
            { value: 'enterprise', displayValue: 'Enterprise',disabled: false },
            { value: 'custom', displayValue: 'Custom', disabled: false},
          ],
        },
        hasaccepted: {
          id: 'hasaccepted',
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            {
              value: true,
              displayValue: ' I agree with Terms & Conditions',
            },
          ],
        },
        textmessage: {
          id: 'textmessage',
          value: '',
          placeholder: 'Message',
          valid: false,
          validationRules: {
            minLength: 20,
            isRequired: true,
          },
          touched: false,
        },
      },
      allFieldsValid: false,
      successSubmited: false, 
      failureSubmitted: false
    };
  }

  changeHandler = event => {
    const { name } = event.target;
    const { value } = event.target;

    const updatedControls = {
      ...this.state.formControls,
    };
    const updatedFormElement = {
      ...updatedControls[name],
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules,
    );

    updatedControls[name] = updatedFormElement;

    let formIsValidParam = true;
    for (const inputIdentifier in updatedControls) {
      formIsValidParam = updatedControls[inputIdentifier].valid && formIsValidParam;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValidParam,
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();

    const formData = new URLSearchParams();
    for (const formElementId in this.state.formControls) {
      formData.append(
        formElementId,
        this.state.formControls[formElementId].value,
      );
    }
    const url = config.DEBUG ? '/api/PricingContact' : `${config.contactapi}/api/PricingContact`

    fetch(url, {
      method: 'POST',
      body: formData.toString(),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(res => {
        if (res.ok) {
          this.setState({ allFieldsValid: true , successSubmited: true});
          setTimeout(() => {
            this.setState({ allFieldsValid: false, successSubmited: true });
          }, config.redirectionTimeout);
        }      
      else{
        this.setState({ allFieldsValid: true , failureSubmitted: true});
        setTimeout(() => {
          this.setState({ allFieldsValid: false, failureSubmitted: true });
        }, config.redirectionTimeout);
        throw new Error('Network response was not ok.');
      }
    })
      .catch(error => {
        throw new Error(error);
      });
  };

  render() {
    const { allFieldsValid, successSubmited, failureSubmitted } = this.state;
    const inputFormDisplay = !allFieldsValid ? 'block' : 'none';
    return (
      <section className="form-only">
        <div className="container contact">
          <div className="row justify-content-lg-center">
            <h2>Contact Us</h2>
          </div>
          <div className="row justify-content-lg-start">
            <div className="col-lg-5 col-md-8">
              <SuccessMessage successSubmited={successSubmited} />
              <FailureMessage failureSubmitted={failureSubmitted} />
              <div
                className="single_contant_left"
                style={{ display: inputFormDisplay }}
              >
                <form onSubmit={this.formSubmitHandler} noValidate="novalidate">
                  <TextInput
                    id={this.state.formControls.name.id}
                    name={this.state.formControls.name.id}
                    placeholder={this.state.formControls.name.placeholder}
                    value={this.state.formControls.name.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                  />
                  <TextInput
                    id={this.state.formControls.surname.id}
                    name={this.state.formControls.surname.id}
                    placeholder={this.state.formControls.surname.placeholder}
                    value={this.state.formControls.surname.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.surname.touched}
                    valid={this.state.formControls.surname.valid}
                  />

                  <Email
                   id={this.state.formControls.email.id}
                   name={this.state.formControls.email.id}
                    placeholder={this.state.formControls.email.placeholder}
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid}
                  />

                  <Telephone
                  id={this.state.formControls.telephone.id}
                  name={this.state.formControls.telephone.id}
                    placeholder={this.state.formControls.telephone.placeholder}
                    value={this.state.formControls.telephone.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.telephone.touched}
                    valid={this.state.formControls.telephone.valid}
                  />

                  <Select
                                   id={this.state.formControls.plans.id}
                                   name={this.state.formControls.plans.id}
                    placeholder={this.state.formControls.plans.placeholder}
                    value={this.state.formControls.plans.value}
                    onChange={this.changeHandler}
                    options={this.state.formControls.plans.options}
                    touched={this.state.formControls.plans.touched}
                    valid={this.state.formControls.plans.valid}
                  />
                  <Checkbox
                                      id={this.state.formControls.hasaccepted.id}
                                      name={this.state.formControls.hasaccepted.id}
         
                    options={this.state.formControls.hasaccepted.options}
                    value={this.state.formControls.hasaccepted.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.hasaccepted.touched}
                    valid={this.state.formControls.hasaccepted.valid}
                  />
                  <TextArea
                   id={this.state.formControls.textmessage.id}
                   name={this.state.formControls.textmessage.id}
                    
                    placeholder={
                      this.state.formControls.textmessage.placeholder
                    }
                    value={this.state.formControls.textmessage.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.textmessage.touched}
                    valid={this.state.formControls.textmessage.valid}
                    rows="8"
                  />
                  <input
                    disabled={!this.state.formIsValid}
                    className="btn btn-primary"
                    value="Send"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingContactForm;
