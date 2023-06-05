import { ProposeCard } from './components/ProposeCard'

export const Proposes = () => {
    return (
        <div>
            <div className="place-self-start">
                <span>Propostas</span>
                <h3 className="text-3xl font-bold">Enviadas</h3>
            </div>
            <div className='mt-10'>
                <ProposeCard />
                <ProposeCard />
                <ProposeCard />
            </div>
        </div>
    )
}
