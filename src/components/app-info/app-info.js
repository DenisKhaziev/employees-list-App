import './app-info.css'

const AppInfo =(props) => {
    const {totalEmployee, allCoockies} = props

    return (
        <div className="app-info">
            <h1>Accounting of employees in the company X</h1>
            <h2>Total number of employees: {totalEmployee}</h2>
            <h2>Amount of coockies: {allCoockies}</h2>
        </div>
    )
}

export default AppInfo