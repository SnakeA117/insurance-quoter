import { createContext, useState } from 'react'

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

       // How difference

       //3% less per year

       // American 15%
       // European 30%
       // Asian 5%

       // Basic 20%
       // Complete 50%
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