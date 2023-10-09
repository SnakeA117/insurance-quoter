import { createContext } from 'react'

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const hola = "hola mundo"

    return(
        <QuoterContext.Provider
        value={{
            hola

        }}>
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext