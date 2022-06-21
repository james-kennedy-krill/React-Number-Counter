import React from 'react'
import CountUp from 'react-countup'
import tw from 'twin.macro'
import { Button } from './'

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
          <Button variant="primary" onClick={() => start()}>Start!</Button>
          <label>Max: <input type="text" onChange={(event) => update(event.target.value)} /></label>
        </Holder>
      )}
    </CountUp>
  )
}

export default NumberButton;