import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import './signInPage.css'
function signInPage() {
  return (
    <div className='signInPage'>
      <SignIn path="/sign-in" signUpUrl='sign-up' />
    </div>
  )
}

export default signInPage
