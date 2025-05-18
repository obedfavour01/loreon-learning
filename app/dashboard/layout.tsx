import Sidebar from '@/components/Dashboard/sidebar'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex '>
            <Sidebar/>
            <main className='flex-1'>
                <Navbar variant='light'/>
                {children}
            </main>
        </div>
    )
}

export default layout