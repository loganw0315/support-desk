import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='loadingSpinnerContainer'>
      <div className='loadingSpinner'>
        <img
          src={spinner}
          alt='Loading...'
          style={{ width: '100px', margin: 'auto', display: 'block' }}
        />
      </div>
    </div>
  )
}

export default Spinner
