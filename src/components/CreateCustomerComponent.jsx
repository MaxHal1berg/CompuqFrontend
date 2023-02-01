import React, {Component} from "react";
import { json } from "react-router-dom";
import CustomerService from "../services/CustomerService";

class CreateCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            CustomerName: '',
            PhoneNumber: '',
            PhoneMake: '',
            PhoneMonthlypay: '',
            PhonePlanMonthlypay: ''
        }
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this)
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this)
        this.changePhoneMakeHandler = this.changePhoneMakeHandler.bind(this)
        this.changePhoneMonthlypayHandler = this.changePhoneMonthlypayHandler.bind(this)
        this.changePhonePlanMonthlypayHandler = this.changePhonePlanMonthlypayHandler.bind(this)
    }

    componentDidMount(){


        if(this.state.id === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.id).then( (res) => {
                let customer = res.data;
                this.setState({
                    CustomerId: customer.CustomerId,
                    CustomerName: customer.CustomerName,
                    PhoneNumber: customer.PhoneNumber,
                    PhoneMake: customer.PhoneMake,
                    PhoneMonthlypay: customer.PhoneMonthlypay,
                    PhonePlanMonthlypay: customer.PhonePlanMonthlypay
                });
            });
        }
    }

    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {CustomerId: this.state.CustomerId, CustomerName: this.state.CustomerName, PhoneNumber: this.state.PhoneNumber, PhoneMake: this.state.phoneMake, PhoneMonthlypay: this.state.PhoneMonthlypay, PhonePlanMonthlypay: this.state.PhonePlanMonthlypay};
        console.log('customer => '+ JSON.stringify(customer));

        if(this.state.id === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                this.props.history.push('/customers');
            });
        }else {
            CustomerService.updateCustomer(customer, this.state.id).then(res => {
                this.props.history.push('/customers');
            });
        }
    }

    changeCustomerIdHandler= (event) => {
        this.setState({CustomerId: event.target.value});
    }

    changeCustomerNameHandler= (event) => {
        this.setState({CustomerName: event.target.value});
    }

    changePhoneNumberHandler= (event) => {
        this.setState({PhoneNumber: event.target.value});
    }

    changePhoneMakeHandler= (event) => {
        this.setState({PhoneMake: event.target.value});
    }

    changePhoneMonthlypayHandler= (event) => {
        this.setState({PhoneMonthlypay: event.target.value});
    }

    changePhonePlanMonthlypayHandler= (event) => {
        this.setState({PhonePlanMonthlypay: event.target.value});
    }

    cancel(){
        this.props.history.push('/customers')
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Customer</h3>
        }else{
            return <h3 className="text-center">Update Customer</h3>
        }
    }

    render(){
        return (
            <div>

                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label> Customer ID:</label>
                                        <input placeholder="Customer ID" name="CustomerId" className="form-control" value={this.state.CustomerId} onChange={this.changeCustomerIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Customer Name:</label>
                                        <input placeholder="Customer Name" name="CustomerName" className="form-control" value={this.state.CustomerName} onChange={this.changeCustomerNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Phone Number:</label>
                                        <input placeholder="Phone Number" name="PhoneNumber" className="form-control" value={this.state.PhoneNumber} onChange={this.changePhoneNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Phone Make:</label>
                                        <input placeholder="Phone Make" name="PhoneMake" className="form-control" value={this.state.PhoneMake} onChange={this.changePhoneMakeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Phone Monthly Pay:</label>
                                        <input placeholder="Phone Monthly Pay" name="PhoneMonthlyPay" className="form-control" value={this.state.PhoneMonthlyPay} onChange={this.changePhoneMonthlypayHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Phone Plan Monthly Pay:</label>
                                        <input placeholder="Phone Plan Monthly Pay" name="PhonePlanMonthlyPay" className="form-control" value={this.state.PhonePlanMonthlypay} onChange={this.changePhonePlanMonthlypayHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCustomerComponent