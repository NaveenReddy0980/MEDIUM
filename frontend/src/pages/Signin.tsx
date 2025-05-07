
import SignComponent from '../components/SignComponent'
import Quote from '../components/Quote'

const Signin = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className='col-span-2 lg:col-span-1'>
        <SignComponent type='signin'></SignComponent>
        </div>
        
        <div className='invisible lg:visible'>
        <Quote></Quote>
        </div>
        
    </div>
  )
}

export default Signin