import useQuoter from "../hooks/useQuoter"
import { BRANDS, PLANS } from '../constants'

const Result = () => {
    const { result, datas } = useQuoter()
    const { brand, plan, year } = datas

    const [nameBrand] = BRANDS.filter(b => b.id === Number(brand))
    const [namePlan] = PLANS.filter(p => p.id === Number(plan))

    if (result === 0) return null
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-xl">
            Resume:
        </h2>
        <p className="my-2">
            <span className="font-bold">Brand: </span>
            {nameBrand.name}

        </p>

        <p className="my-2">
            <span className="font-bold">Plan: </span>
            {namePlan.name}

        </p>

        <p className="my-2">
            <span className="font-bold">Year: </span>
            {year}

        </p>

        <p className="my-2 text-2xl">
            <span className="font-bold">Total amount:  {result}
            </span>


        </p>
    </div>
    
  )
}

export default Result