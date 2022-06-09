import {useState} from "react";
import List from "./List"
const TestApp = () => {
    const AllExpense=[]
    const [expenses, setExpenses] = useState(AllExpense)
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const handleName = event => {
        console.log('Name ', event.target.value)
        setName(event.target.value)
    }

    const handleAmount = event => {
        console.log('Amount ', event.target.value)
        setAmount(event.target.value)
    }
    const handleSubmitForm = event => {
        event.preventDefault()
        if (name !== '' && amount > 0) {
            const expense = { name, amount }
            setExpenses([...expenses, expense])
            setName('')
            setAmount('')
        } else {
            console.log('Invalid expense name or the amount')
        }
    }
    const handleClearExpenses = () => {
        setExpenses([])
    }
    return (
        <div>
            <div className="app-title">
                <h1> Expense Tracker React</h1>
            </div>
            <p>
                Total Expense:{' '}
                <span className="text-success">
              ${' '}
                    {expenses.reduce((accumulator, currentValue) => {
                        return (accumulator += parseInt(currentValue.amount))
                    }, 0)}
            </span>
            </p>
            <form>
                <label>Name of Expense?</label>
                <input type="text" name="name" id="expenseName" placeholder="Name of expense?" value={name}  onChange={handleName}/>
                <label>$Amount</label>
                <input type="number" name="amount" id="expenseAmount" placeholder="0.00" value={amount}  onChange={handleAmount}/>
            </form>
            <div>
            <button type="submit" color="primary" onClick={handleSubmitForm}>Add</button>{''}
                <button type="submit" color="danger" onClick={handleClearExpenses}>Delete</button>
            </div>
            <List expenses={expenses} />
        </div>

    )
}
export default TestApp

