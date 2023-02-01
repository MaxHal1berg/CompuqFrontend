import React, {Component} from 'react';
import CustomerService from '../services/CustomerService';

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then( res => {
            this.setState({customer: this.state.customers.filter(customer => customer.id !== res.id)});
        });
    }

    viewCustomer(id){
        this.props.history.push(`/view-customer/${id}`);
    }

    editCustomer(id){
        this.props.history.push(`/add-customer/${id}`)
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push(`/add-customer/_add`);
    }
    
    
    render() {
        console.log(this.state.customers)
        return (
            <div>
                <h2 className='Text-Center'>Customers List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addCustomer}> Add Customer</button>
                </div>
                <br></br>
                <div className='row'>
                    <table className='table table-striped-bordered'>

                        <thead>
                            <tr>
                                <th> Customer Id</th>
                                <th> Customer Name</th>
                                <th> Phone Number</th>
                                <th> Phone Make</th>
                                <th> Phone Monthly Pay</th>
                                <th> Phone Plan Monthly Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                    <tr>
                                        <td> {customer.customerId}</td>
                                        <td> {customer.customerName}</td>
                                        <td> {customer.phoneNumber}</td>
                                        <td> {customer.phoneMake}</td>
                                        <td> {customer.phoneMonthlypay}</td>
                                        <td> {customer.phonePlanMonthlypay}</td>
                                        <td>
                                            <button onClick={ () => this.editCustomer(customer.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}
export default ListCustomerComponent