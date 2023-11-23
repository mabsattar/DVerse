import Image from 'next/image'
import Connector from './Connector'
import React from 'react'
import CapabilityComponent from './Capability'


export default function Home() {
  return (
    <div>
      <Connector />
      <CapabilityComponent />
    
    </div>
  )
}
