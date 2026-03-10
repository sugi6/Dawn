import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px6">
    <div> 
    <AuthForm type="sign-in" />
    </div>
    </section>
  )
}

export default SignIn
