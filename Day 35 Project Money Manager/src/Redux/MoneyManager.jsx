import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../feature/IncomeSlice';
import { addExpense } from '../feature/ExpenseSlice';

export default function MoneyManager() {
    const [income, setIncome] = useState("");
    const [expense, setExpense] = useState("");
    const [description, setDescription] = useState("");

    const incomeAmt = useSelector((state) => state.incomeKey.data1) || 0;
    const expense1 = useSelector((state) => state.expenseKey.expense1) || [];
    const dispatch = useDispatch();

    const handleAmount = () => {
        if (income) {
            dispatch(addIncome(income));
            setIncome("");
        }
    };

    const handleExpense = () => {
        dispatch(addExpense({ expense, description }));
        setExpense("");
        setDescription("");
    };

    return (
        <div className="p-5">
            <div className="bg-[#eef2fe] flex justify-between p-4">
                <div className="w-[50%] flex justify-start items-center">
                    <div className="ml-5">
                        <h1 className="text-2xl">Hi Rutul Kakadiya</h1>
                        <p>Welcome back to your Money Manager</p>
                    </div>
                </div>
                <div className="w-[50%] flex justify-end items-center">
                    <img className="h-36" src="/money.webp" alt="" />
                </div>
            </div>

            <div className="flex justify-between mt-5">
                <div className="h-36 w-[48%] bg-[#e8f9cc] rounded-lg flex items-center">
                    <div className="w-1/2 flex justify-center">
                        <img className="h-[100px]" src="/balance-image.png" alt="" />
                    </div>
                    <div className="w-1/2">
                        <center>
                            <p>Your Budget:</p>
                            <p>Rs.: {incomeAmt}</p>
                        </center>
                    </div>
                </div>

                <div className="h-36 w-[48%] bg-[#eee8fe] flex justify-between items-center rounded-lg">
                    <div className="w-1/2 flex justify-center">
                        <img className="h-[100px]" src="/expenses-image.png" alt="" />
                    </div>
                    <div className="w-1/2">
                        <center>
                            <p>Your Expense:</p>
                            <p>Rs.: {
                                expense1.reduce((total, item) => total + Number(item.expense), 0)
                            }</p>
                        </center>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-2 p-4 border-2 border-gray-300 shadow-lg rounded-lg bg-white">
                <div className="w-[48%] p-4 bg-gray-100 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-gray-700">Money Manager</h1>

                    <div className="mb-6">
                        <input
                            type="number"
                            placeholder="Enter Income"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                            onClick={handleAmount}
                            className="w-[150px] bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-300">
                            Add Income
                        </button>
                    </div>

                    <div className="mb-6">
                        <input
                            type="number"
                            placeholder="Enter Amount"
                            value={expense}
                            onChange={(e) => setExpense(e.target.value)}
                            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <input
                            type="text"
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                            onClick={handleExpense}
                            className="w-[150px] bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300">
                            Add Expense
                        </button>
                    </div>
                </div>

                <div className="w-[48%] p-4 bg-[#f5f5f5] rounded-lg">
                    <h2 className="text-xl font-bold mb-4 text-indigo-600">History of Expense</h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left text-gray-700 font-semibold">S.No</th>
                                    <th className="px-4 py-2 text-left text-gray-700 font-semibold">Amount</th>
                                    <th className="px-4 py-2 text-left text-gray-700 font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expense1.map((e, i) => (
                                    <tr key={i} className="border-t border-gray-300">
                                        <td className="px-4 py-2 text-gray-800">{i + 1}</td>
                                        <td className="px-4 py-2 text-gray-800">Rs. {e.expense}</td>
                                        <td className="px-4 py-2 text-gray-500">{e.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
