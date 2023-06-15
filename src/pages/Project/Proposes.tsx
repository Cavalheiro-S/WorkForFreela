import { useEffect, useState } from 'react'
import { ProposeCard } from './components/ProposeCard'
import { useApiService } from '@/hooks/useApiService'
import { useAuth } from '@/hooks/useAuth'
import { Propose } from '@/services/interfaces/Propose'
import { Project } from '@/services/interfaces/Project'

export const Proposes = () => {

    const { getProposeByHiredId } = useApiService()
    const { user } = useAuth()
    const [proposes, setProposes] = useState<Propose[]>([])

    useEffect(() => {

        const getResource = async () => {
            if (!user?.uid) return;
            const data = await getProposeByHiredId<Propose[]>(user.uid)
            if (!data.data) return;
            setProposes(data.data)
        }

        getResource()
    }, [])

    const renderProposes = () => (
        proposes.map((propose) => (
            <ProposeCard
                key={propose.id}
                id={propose.id.toString()}
                description={propose.description}
                value={propose.value}
                project={propose.project ?? {} as Project}
                deadline={new Date(propose?.deadline ?? new Date()).toLocaleDateString()}
            />
        ))
    )

    return (
        <div>
            <div className="place-self-start">
                <span>Propostas</span>
                <h3 className="text-3xl font-semibold">Enviadas</h3>
            </div>
            <div className='mt-10 space-y-4'>
                {renderProposes()}
            </div>
        </div>
    )
}
