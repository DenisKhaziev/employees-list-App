import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleCoockie, onToggleLike }) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item
              return  (
                <EmployeesListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleCoockie={() => onToggleCoockie(id)}
                onToggleLike={() => onToggleLike(id)}/>
              )
            })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    ) 
}

export default EmployeesList