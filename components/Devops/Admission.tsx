import React from 'react'

const admissionsData = [
  {
    num: 1,
    title: "Start Application",
    description: "Application process will take 45 – 60 minutes"
  },
  {
    num: 2,
    title: "Make Payment",
    description: "Choose your payment plan and make your payment"
  },
  {
    num: 3,
    title: "Confirm Enrollment",
    description: "Once accepted to the programme, you will be asked to enrol to secure participation."
  }
]

const Admission = ({type}:{type: 'data' | 'devops'}) => {
  return (
    <div className={`${type === 'devops' ? `bg-[#EEF4FF]`: `bg-[#F4FFF5]`} py-44`}>

      <h1
        className='text-4xl text-center mb-14'>
        3-Step Admissions Process
      </h1>
      <div className='flex xs:max-md:flex-col xs:max-md:items-center
      gap-7 justify-center'>

        {
          admissionsData.map((item, ind) => (


            <div key={ind}
              className='bg-white w-80 
                  p-7 shadow-md rounded-xl 
                   flex gap-[18px] 
                  flex-col  
                  items-center'>
              <div
                className={`rounded-full

                         ${type === 'devops' ?  `bg-loreonblue` : `bg-datagreen`}   
                            h-12 w-12 flex 
                            justify-center 
                            items-center 
                            text-white`}
              >
                {item.num}
              </div>
              <h3 className="text-2xl">{item.title}</h3>

              <p className='text-[#586283] text-base text-center'>
                {item.description}
              </p>
            </div>


          ))
        }
      </div>
    </div>
  )
}

export default Admission