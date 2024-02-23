
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'

function Component1() {
    const[pamt,setPamt]=useState(80)//payment amount donut
    const[iamt,setIamt]=useState(80)//interest amount donut

    const [val, setVal] = useState({
        loan: 1000000,
        roi: 3,
        tenure: 6,
    })

    const [loan,setLoan] = useState(10000);
    const [emi, setEmi] = useState(0);
    const [totalint, setTotalint] = useState(0);
    const [totalpay, setTotalPay] = useState(0);

    const handleVal = (e) => {
        setVal({
            ...val,
            [e.target.name]: e.target.value,
        });

    }

    const handleLoan=(e)=>{
        setLoan(e.target.value);
    }

    useEffect(() => {
        let r = val.roi / 1200;
        let n = val.tenure * 12;
        let emiValue = (loan * r * (1 + r) ** n) / (((1 + r) ** n) - 1);
        setEmi(emiValue.toFixed(2));

        let totalint = emiValue * n - loan; // Calculate total interest
        setTotalint(totalint.toFixed(2));

        let totalPay = parseFloat(totalint) + parseFloat(loan); // Calculate total amount payable
        setTotalPay(totalPay.toFixed(2));

        let pa=parseFloat(loan);
        let ia=parseInt(totalint);
        console.log(pa,ia);
        setPamt(pa);
        setIamt(ia);

    }, [val.roi, val.tenure, loan])

    return (
        <>
            <div className='flex flex-col md:justify-evenly h-full border border-gray-300 mt-6 md:flex-row justify-center items-center'>
                <div className='w-1/2 m-6 flex flex-col flex-wrap'>
                    <form className='flex flex-col' action="">
                        <div className='flex flex-col justify-center mx-7 my-6' >
                            <div className='flex justify-between items-center'>
                                <div className='text-start'>Loan amount</div>
                                <div className='flex items-center bg-green-200 w-[100px] text-center pl-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span className='text-green-600 font-bold'>{loan}</span>
                                </div>
                            </div>

                            <div className="flex items-center text-green-500 "> 
                                <input className="text-lg w-72  h-3" type="range"  onChange={handleLoan} value={loan} id="" min="0" max="2000000" step="5000"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col justify-center mx-7 my-6' >
                            <div className='flex justify-between items-center'>
                                <div className='text-start'>Rate of interest(p.a)</div>
                                <div className='flex items-center bg-green-200 w-[100px] text-center pl-4'>
                                    <span className='text-green-600 font-bold'>{val.roi} %</span>
                                </div>
                            </div>

                            <div className="flex items-center text-green-500 "> {/* Container to hold the SVG and val */}
                                <input className="text-lg w-72  h-3" type="range" name="roi" onChange={handleVal} value={val.roi} id="" min="1" max="30" step="0.1"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center mx-7 my-6' >
                            <div className='flex justify-between items-center'>
                                <div className='text-start'>Loan tenure</div>
                                <div className='flex items-center bg-green-200 w-[100px] text-center pl-4'>
                                    <span className='text-green-600 font-bold text-end'>{val.tenure} Yr</span>
                                </div>
                            </div>

                            <div className="flex items-center text-green-500 "> {/* Container to hold the SVG and val */}
                                <input className="text-lg w-72  h-3" type="range" name="tenure" onChange={handleVal} value={val.tenure} id="" min="1" max="30" step="1"
                                />
                            </div>
                        </div>
                    </form>
                    <div>
                        <table>
                            <tr>
                                <td className='px-12 py-2 text-gray-500'>Monthly EMI</td>
                                <td className='px-12 py-2 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>{emi}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='px-12 py-2 text-gray-500'>Principal Amount</td>
                                <td className='px-12 py-2 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>{loan}</span></td>
                            </tr>
                            <tr>
                                <td className='px-12 py-2 text-gray-500'>Total interest</td>
                                <td className='px-12 py-2 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>{totalint}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='px-12 py-2 text-gray-500'>Total amount</td>
                                <td className='px-12 py-2 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>{totalpay}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div>
                    <Chart
                        type='donut'
                        width={500}
                        height={400}
                        series={[pamt, iamt]}

                        options={
                            {
                                labels: ['Principal amount', 'Interest Amount']
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default Component1