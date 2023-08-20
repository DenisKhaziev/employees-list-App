import { Component } from 'react'
import './add-form.css'

class AddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddNewEmployeee = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    

    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onAddNewEmployeee}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="enter new employee"
                        name='name'
                        value={name} // value необходим для управляемого компонента (контролируемого)
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="salary on $"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Добавить</button>
                </form>
            </div>
        )
    }

}

export default AddForm