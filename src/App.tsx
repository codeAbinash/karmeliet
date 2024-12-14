import React from 'react'

const App: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className='bg-background'>
      <img src='/images/background.png' alt='background' className='absolute left-0 h-full object-cover opacity-5' />
      <div className='relative mx-auto flex h-auto max-w-[1500px] overflow-hidden pt-12 md:h-screen md:pt-6 xl:min-h-screen xl:pt-0'>
        <img src='/images/left.jpg' alt='left' className='hidden h-full xl:block' />
        <div className='relative flex h-full w-full justify-center p-[5%]'>
          <div className='absolute z-10 -mt-10 size-20 rotate-45 border-2 border-accent bg-white'>
            <div className='flex size-20 -rotate-45 items-center justify-center'>
              <p className='text-xs leading-tight'>Too Much</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className='flex h-full w-full flex-col justify-between gap-5 border-2 border-accent p-[7%] px-[5%]'
          >
            <h1 className='value-sans-pro-medium pt-10 text-center text-[2rem] font-semibold text-accent md:pt-0'>
              Maecenas a dui ac erat malesuada.
            </h1>
            <div className='mt-8 flex h-full flex-col justify-between gap-10 md:gap-5 xl:gap-0'>
              <div className='flex flex-col gap-6 md:flex-row'>
                <Select options={['Mr', 'Mrs']} name='titles' className='flex-[0.4]' />
                <Input placeholder='First Name' className='flex-1' />
                <Input placeholder='Surname' className='flex-1' />
              </div>
              <div className='flex flex-col gap-6 md:flex-row'>
                <Select name='age' options={['Age']} className='flex-[0.17]' />
                <Input placeholder='Email address' className='flex-1' type='email' />
              </div>
              <div className='flex flex-col gap-6'>
                <Input placeholder='First Line of Address' className='flex-1' />
                <Input placeholder='Second Line of Address' className='flex-1' />
                <div className='flex flex-col gap-6 md:flex-row'>
                  <Select name='city' options={['City']} className='flex-[0.5]' />
                  <Input placeholder='Postcode' className='flex-[0.5]' />
                </div>
              </div>
              <div className='flex flex-col gap-6 md:flex-row'>
                <Select name='phones' options={['Mobile', 'Home', 'Work']} className='flex-[0.4]' />
                <Input placeholder='Phone Number' className='flex-1' type='tel' />
              </div>
              <div className='flex items-center justify-center md:justify-end'>
                <Button />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const Button: React.FC = () => {
  return (
    <button type='submit' className='tripel-karmeliet bg-accent p-2.5 px-20 text-3xl text-white'>
      Next
    </button>
  )
}

const Select: React.FC<{ name: string; options: string[]; className?: string; defaultValue?: string }> = ({
  name,
  options,
  className,
  defaultValue,
}) => {
  return (
    <select
      id={name}
      name={name}
      className={`select karmeliet border-2 border-neutral-300 bg-background p-2 px-5 focus:border-accent focus:outline-none ${className}`}
      defaultValue={defaultValue}
    >
      {options.map((option, index) => (
        <option key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>
          {option}
        </option>
      ))}
    </select>
  )
}

const Input: React.FC<{ placeholder?: string; className?: string; type?: string }> = ({
  placeholder,
  className,
  type = 'text',
}) => {
  return (
    <input
      type={type}
      className={`input karmeliet border-2 border-neutral-300 bg-background p-1.5 px-4 focus:border-accent focus:outline-none ${className}`}
      placeholder={placeholder}
    />
  )
}

export default App
