import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px6">
    <div> 
    <AuthForm type="sign-up" />
    </div>
    </section>
  )
}

export default SignUp
