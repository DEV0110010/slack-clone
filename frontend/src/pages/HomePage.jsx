import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { useStreamChat } from '../hooks/useStreamchat';

const HomePage = () => {
   const { chatClient, error, isLoading } = useStreamChat();
  return (
    <div>
      <UserButton/>
    Home Page
    </div>
  )
}

export default HomePage