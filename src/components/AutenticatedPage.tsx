import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { Navigate } from 'react-router-dom'

interface AutenticatedPageProps {
    children: React.ReactNode
}

export const AutenticatedPage = ({ children }: AutenticatedPageProps) => {
    const { isAutenticated } = useAuth()

    return (
        <>
            {isAutenticated ? children : <Navigate to='/user/signin' />}
        </>
    )

}
