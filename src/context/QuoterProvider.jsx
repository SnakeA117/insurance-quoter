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

    return(
        <QuoterContext.Provider
        value={{
            datas,
            handleChangeData,
            error,
            setError
        }}>
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext