import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { Component } from 'react';
import './App.css';
import AddForm from './components/add-form/add-form';
import AppFilter from './components/app-filter/app-filter';
import AppInfo from './components/app-info/app-info';
import EmployeesList from './components/employees-list/employees-list';
import SearchPanel from './components/search-panel/search-panel';


// data.map(item => item.increase = false) 
// data.map((item, index) => item.id = index + 1) 



class App extends Component {
    constructor(props) {
        super(props)
        this.state ={
            data: [
                {name: 'Valeria', salary: 800, increase: true, like: false, id: 1},
                {name: 'Julia', salary: 3000, increase: false, like: true, id: 2},
                {name: 'Denis', salary: 3800, increase: false, like: false, id: 3},
                {name: 'Irina', salary: 1000, increase: false, like: false, id: 4}
            ],
            term: '',
            filter: 'like'
        }
        this.maxId = 4
        
        // this.data.map(item => item.increase = false) 
        // this.data.map((item, index) => item.id = index + 1) 
        
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newEmployeeArr = [...data, newEmployee]
            return {
                data: newEmployeeArr
            }
        }) 
    }

    onToggleCoockie = (id) => {
        
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return{...item, increase: !item.increase}
                }
                return item
            })
        }))
        // this.setState(({data}) => {
        //     // const index = data.findIndex(elem => elem.id === id)

        //     // const old = data[index]
        //     // const newItem ={...old, increase: !old.increase}
        //     // const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]    
        //     // return {
        //     //     data: newArray
        //     // }    
        // })
    }

    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return{...item, like: !item.like}
                }
                return item
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch =(term) => {
        this.setState({term: term})
        // this.props.onUpdateSearch(term)
    }

    // onForPromotion = () =>  {
    //     this.setState(({data}) => ({
    //         data: data.filter(item => item.increase === true)
    //     }))
    // }
    // onForAllEmployees = () =>  {
    //     this.setState(({data}) => ({
    //         data: data
    //     }))
    // }

    filterPost=(items, filter) => {
        switch(filter) {
            case 'forPromotion':
                return items.filter(item => item.like)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    
    render() {
        const {data, term, filter} = this.state
        const employees = this.state.data.length
        const coockies = this.state.data.filter(item => item.increase === true).length
        const visibleData = this.filterPost(this.searchEmployee(data, term), filter)

        return (
            <div className="App">
            <AppInfo 
            totalEmployee={employees}
            allCoockies={coockies}/>
            <div className="search-panel">
                <SearchPanel 
                onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter 
                filter={filter}
                onFilterSelect={this.onFilterSelect}
                // onForPromotion={this.onForPromotion}
                // onForAllEmployees={this.onForAllEmployees}
                />
            </div>
            <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleCoockie={this.onToggleCoockie}
                onToggleLike={this.onToggleLike}/>
            <AddForm onAdd={this.addItem}/>
            </div> 
        )
    }

}

export default App;
 