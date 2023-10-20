import { createContext, useState } from 'react'
import { obtainDifferenceYear, calculateBrand, calculatePlan } from '../helpers'

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [datas, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')


    const handleChangeData = e => {
        setData({
            ...datas,
            [e.target.name] : e.target.value
        })
    }

    
    const quoteInsurance = () => {
       // Base

       let result = 2000

       // How difference
        const difference = obtainDifferenceYear(datas.year)
        console.log(difference)

       //3% less per year

       result -= ((difference * 3) * result) / 100

       // American 15%
       // European 30%
       // Asian 5%
       result *= calculateBrand(datas.brand)

       // Basic 20%
       // Complete 50%

       result *= calculatePlan(datas.plan)
       console.log(result)
    }


    return(
        <QuoterContext.Provider
        value={{
            datas,
            handleChangeData,
            error,
            setError,
            quoteInsurance
        }}>
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext