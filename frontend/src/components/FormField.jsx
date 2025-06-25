

const FormField = ({label, isSupriseMe, handleSurpriseMe, ...props}) => {
  return (
    <div className=' mb-2'>
      <div className='flex items-center gap-2 mb-2'>

        <label className='block text-sm font-medium text-gray-900'>{label}</label>
        {isSupriseMe && (
          <button onClick={handleSurpriseMe} type="button" className='font-semibold text-xs py-1 px-2 rounded text-black bg-[#ECECF1] cursor-pointer'>
              Suprise Me
          </button>)}
      </div>
      <input {...props} className='bg-gray=50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'/>
    </div>
  )
}

export default FormField
