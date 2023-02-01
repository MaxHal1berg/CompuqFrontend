import React, {Component} from "react";
import CustomerService from "../services/CustomerService";

class ViewCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data})
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Customer Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Customer ID:</label>
                            <div>{this.state.customer.customerId}</div>
                        </div>
                        <div className="row">
                            <label>Customer Name:</label>
                            <div>{this.state.customer.customerName}</div>
                        </div>
                        <div className="row">
                            <label>Phone Number:</label>
                            <div>{this.state.customer.phoneNumber}</div>
                        </div>
                        <div className="row">
                            <label>Phone Make:</label>
                            <div>{this.state.customer.phoneMake}</div>
                        </div>
                        <div className="row">
                            <label>Phone Monthly Pay:</label>
                            <div>{this.state.customer.phoneMonthlypay}</div>
                        </div>
                        <div className="row">
                            <label>Phone Plan Monthly Pay:</label>
                            <div>{this.state.customer.phonePlanMonthlypay}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent