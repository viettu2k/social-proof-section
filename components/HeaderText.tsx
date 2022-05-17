import React from 'react'

const SUB_TEXT =
  'We only provide great products with excellent customer service.   See what our satisfied customer are saying about our services.'

const HEAD_TEXT = '10,000+ of our users loves our products.'

export const HeaderText = () => {
  return (
    <div className="group mt-6 flex w-3/4 flex-col justify-start space-y-6 rounded-lg px-6 py-6 md:w-1/3 md:space-y-8">
      <h1 className="text-3xl font-bold  text-fuchsia-800 md:w-[360px] md:text-5xl">
        {HEAD_TEXT}
      </h1>
      <p className="text-md font-medium text-purple-900 md:text-lg">
        {SUB_TEXT}
      </p>
    </div>
  )
}
