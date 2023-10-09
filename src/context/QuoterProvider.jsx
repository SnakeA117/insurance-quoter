import { createContext } from 'react'

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const helloWorld = () => {
        console.log('Hello World from function!')
    }

    return(
        <QuoterContext.Provider
        value={{
            helloWorld

        }}>
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext