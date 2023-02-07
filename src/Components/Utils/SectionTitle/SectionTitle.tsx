import React from 'react'

interface props {
    number: string;
    title: string;
    description: string;
}

function SectionTitle(props: props) {
    const {number, title, description} = props
  return (
    <div className="flex-center max-md:flex-col gap-4 px-4 mb-12">
    <h3 className="flex-center text-primary text-[5rem]">{number}</h3>
    <div className="flex max-md:items-center md:items-start justify-center flex-col gap-4">
      <h2 className="font-bold text-white text-3xl max-md:text-center">{title}</h2>
      <h3 className="text-white text-sm">{description}</h3>
    </div>
  </div>
  )
}

export default SectionTitle