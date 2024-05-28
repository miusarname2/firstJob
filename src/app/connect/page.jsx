import { Content } from '@/components/content'
import { NavbarDarkMode } from '@/components/navbar-dark-mode'
import React from 'react'

export default function page() {
  return (
    <div>
        <NavbarDarkMode />
        <div className="flex flex-col items-center">
            <Content />
        </div>
    </div>
  )
}
