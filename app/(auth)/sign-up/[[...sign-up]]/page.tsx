import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
        <SignUp  appearance={{
        variables: {
          colorText: 'black',
          
        },
      }}/>
    </div>
  )
}