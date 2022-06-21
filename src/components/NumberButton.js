import React from 'react'
import CountUp from 'react-countup'
import tw from 'twin.macro'

const Holder = tw.div`flex flex-col items-center justify-center gap-4`;
const Text = tw.span`block text-center p-10 text-6xl font-bold`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const NumberButton = (props) => {
  return (
    <CountUp
      preserveValue={true}
      start={0}
      end={0}
      delay={1}
      prefix="$"
      duration={.25}
      redraw={false}
      formattingFn={(number => `$${Number(number).toLocaleString()}`)}>
      {({ countUpRef, start, update }) => (
        <Holder>
          <Text ref={countUpRef} />
          <label tw="text-xl flex items-center justify-center">
            <span tw="pr-4 font-bold">Amount:</span> <span tw="p-2 text-3xl bg-gray-600 text-white h-full border-2 border-gray-800 flex items-center justify-center">$</span>
            <input type="text"
              placeholder="0"
              tw="p-2 h-full text-2xl border-2 border-gray-800 border-l-0 outline-none"
              onChange={(event) => update(event.target.value)}
            />
          </label>
        </Holder>
      )}
    </CountUp>
  )
}

export default NumberButton;