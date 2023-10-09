import { Fragment, useContext } from 'react'
import { BRANDS, YEARS, PLANS } from '../constants/index.js'
import QuoterContext from '../context/QuoterProvider.jsx'

const Form = () => {

    const { helloWorld } = useContext(QuoterContext)
    helloWorld();
  return (
    <>
        <form>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Brand
                </label>
                        <select
                name="brand"
                className="w-full p-3 b-white border border-gray-200">
                    <option value="">-- Select brand --</option>

                    {BRANDS.map(brand => (
                        <option
                            key={brand.id}
                            value={brand.id}
                        >
                            {brand.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Year
                </label>
                        <select
                name="brand"
                className="w-full p-3 b-white border border-gray-200">
                    <option value="">-- Select year --</option>

                    {YEARS.map(year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Pick a plan
                </label>
                <div className='flex gap-3 items-center'>
                    {PLANS.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.name}
                            </label>
                            <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                
                            />
                        </Fragment>
                    ))}
                </div>

        
            </div>

            <input 
                    type="submit"
                    className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
                    value="Calculate"
                />


        </form>
    </>
  )
}

export default Form