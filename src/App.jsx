import React, { useState } from 'react'

const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [widthdrawInput, setWidthdrawInput] = useState('')
  const [depositeAmount, setDepositeAmount] = useState(0)
  const [withdrawAmount, setWithdrawAmount] = useState(0)
  const [totalAmount , setTotalAmount] = useState(1200)

  //getting amount from user input
  const getInput = (event) => {
    if(isNaN(Number(event.target.value))) return alert("Please Enter a valid amount")
    setInputValue(parseFloat(event.target.value))
    // console.log(event.target.value )
  }

  //adding amount to depositeAmount and totalAmount
    const updateDeposite = () => {
        setDepositeAmount(parseFloat(depositeAmount) + inputValue);
        setInputValue('');
        setTotalAmount( inputValue + totalAmount)
  }

  //getting widthdrawInput
  const getWidthdrawInput = (e) => {
    if(isNaN(Number(e.target.value.trim()))) return alert("Please Enter a valid amount")
      setWidthdrawInput(parseFloat(e.target.value))
      console.log(e.target.value)

  }

  //removing values from totalAmount and adding in the withdrawAmount
  const updateWithdraw = () => {
      totalAmount > widthdrawInput ? setWithdrawAmount(parseFloat(withdrawAmount) + widthdrawInput) : setWithdrawAmount(withdrawAmount)
      totalAmount >= widthdrawInput ? setTotalAmount(totalAmount - widthdrawInput) :   alert(`You can't widthdraw more than amount that you have in your account`)
     setWidthdrawInput('')
    
  }

  return (
    <>
        <h1 className="text-5xl text-center mt-16">
      Let's get some
      <span className="font-semibold text-purple-600">Money</span>!!!
    </h1>
  <main className=" w-3/4 mx-auto">
    <section className="mt-8">
      <div className="grid grid-cols-3 gap-4 text-white">
        <div className="bg-blue-300 p-8 rounded shadow hover:shadow-lg">
          <h3 className="text-2xl">Deposit</h3>
          <h4 className="text-4xl">$<span id="deposit-amount">{depositeAmount}</span></h4>
        </div>
        <div className="bg-green-300 p-8 rounded shadow hover:shadow-lg">
          <h3 className="text-2xl">Withdraw</h3>
          <h4 className="text-4xl">$<span id="withdraw-amount">{withdrawAmount}</span></h4>
        </div>
        <div className="bg-yellow-300 p-8 rounded shadow hover:shadow-lg">
          <h3 className="text-2xl">Balance</h3>
          <h4 className="text-4xl">$<span id="balance-amount">{totalAmount}</span></h4>
        </div>
      </div>
     <section className="mt-4">
       <h3 className="text-3xl text-center mb-8">
          Deposit and Withdraw 
        </h3>
       <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-purple-100 rounded p-8">
          <h3 className="text-2xl mb-4">
          Please Deposit 
        </h3>
          <input
            onChange={getInput}
            value={inputValue}
            id="deposit-input"
            className="border block border-gray-400 rounded w-3/4 mb-4 px-2"
            type="text"
            placeholder="Enter your deposit amount in $..."
          />
          <button
            onClick={updateDeposite}
            id="deposit-btn"
            className="bg-yellow-600 px-4 rounded py-2 text-white font-medium"
          >
            Deposit
          </button>
        </div>
        <div className="bg-red-100 rounded p-8">
           <h3 className="text-2xl mb-4">
          Please Withdraw 
        </h3>
          <input
            onChange={getWidthdrawInput}
            value={widthdrawInput}
            id="withdraw-input"
            className="border block border-gray-400 rounded w-3/4 mb-4 px-2"
            type="text"
            placeholder="Enter your withdraw amount in $..."
          />
          <button
            onClick={updateWithdraw}
            id="withdraw-btn"
            className="bg-yellow-600 px-4 rounded py-2 text-white font-medium"
          >
            Withdraw
          </button>
        </div>
       </div>
     </section>

    </section>
  </main>
    </>
  )
}

export default App
