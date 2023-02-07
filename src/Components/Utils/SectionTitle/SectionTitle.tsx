import React from 'react'

interface props {
    number: string;
    title: string;
    description: string;
}

function SectionTitle() {
  return (
    <div className="flex-center max-md:flex-col gap-4 px-4 mb-12">
    <h3 className="flex-center text-primary text-[5rem]">32</h3>
    <div className="flex max-md:items-center md:items-start justify-center flex-col gap-4">
      <h2 className="font-bold text-white text-3xl max-md:text-center">دموی شگفت انگیز در انتظار شما هستند!</h2>
      <h3 className="text-white text-sm">پوسته های منحصر به فرد را برای چندین موضوع ساخت و ساز در این یک موضوع پیدا کنید!</h3>
    </div>
  </div>
  )
}

export default SectionTitle