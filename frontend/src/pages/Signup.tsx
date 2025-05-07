
import Quote from '../components/Quote'
import SignComponent from '../components/SignComponent'

const Signup = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className='col-span-2 lg:col-span-1'>
        <SignComponent type='signup'></SignComponent>
        </div>
        
        <div className='invisible lg:visible'>
        <Quote></Quote>
        </div>
        
    </div>
  )
}

export default Signup