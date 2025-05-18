import React from 'react'
import Question from './Question'


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
}
  from '@/components/ui/accordion'


const FAQ_Data  = [
  {
    value: "item_1",
    question:"Can I upgrade myself or do I have to upgrade my entire Workspace?",
    answer: `To upgrade Dlex, you’ll need 
    to upgrade your entire Workspace, 
    which means all members in your Workspace.
     The top level of organization is Workspace.`
  },
  {
    value: "item_2",
    question:"What payment methods do you accept?",
    answer: `To upgrade Dlex, you’ll need 
    to upgrade your entire Workspace, 
    which means all members in your Workspace.
     The top level of organization is Workspace.`
  },
  {
    value: "item_3",
    question:"What is your refund policy?",
    answer: `To upgrade Dlex, you’ll need 
    to upgrade your entire Workspace, 
    which means all members in your Workspace.
     The top level of organization is Workspace.`
  },
  {
    value: "item_4",
    question:"Do you offer discounts for nonprofits?",
    answer: `To upgrade Dlex, you’ll need 
    to upgrade your entire Workspace, 
    which means all members in your Workspace.
     The top level of organization is Workspace.`
  },
  {
    value: "item_5",
    question:"How am I billed when I add new members to a Workspace?",
    answer: `To upgrade Dlex, you’ll need 
    to upgrade your entire Workspace, 
    which means all members in your Workspace.
     The top level of organization is Workspace.`
  },

]
const FAQ = ({variant}:{variant: 'light' | 'dark'}) => {
  return (
    <section className='mx-36 xs:max-lg:mx-6 mb-40 pt-24'>

      <header className={`font-bold text-4xl xs:max-md:text-3xl text-center my-6 ${variant == "light"? 'text-black':'text-white'}`}>
        Frequently asked questions
      </header>

      <p className={`mb-8 text-center 
        ${variant == "light"? 'text-black':'text-[#606060]'}
        text-sm font-light`}>
        Can’t find the answer you’re looking for? Reach out to our 
          <span className='text-[#4E8AF4]'> customer support </span> team
      </p>
      
      <div className=''>
        <Accordion type="single" collapsible className="w-full">

          {
            FAQ_Data.map((item,ind) => (
              <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger>
                <h1 className={`text-xl text-left ${variant == "light"? 'text-[#121127]':'text-white'}`}>
                  {item.question}
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p className={` ${variant == "light"? 'text-black':'text-[#606060]'} text-lg font-light`}>
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>

            ))
          }
          

        </Accordion>

      </div>
    </section>
  )
}

export default FAQ