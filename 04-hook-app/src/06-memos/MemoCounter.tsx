import { useCounter } from '@/hooks/useCounter'
import { useMemo } from 'react';


const heavyStuff = ( iterationNumber: number) => {
  console.time('heavy_stuff_started');

  for (let index = 0; index < iterationNumber; index++) {
    console.log('Alli vamos!!');
  }

  console.timeEnd('heavy_stuff_started');

  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {

    const { counter , increment } = useCounter(40_000);
    const { counter: counter2 , increment:increment2 } = useCounter(10);

    const myHeavyValue = useMemo( ()=> heavyStuff( counter ), [counter] );
  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Memo - useMemo</h1>

        <hr />

        <h4>Heavy Counter Memoized: { counter }</h4>
        <h4>ligth Counter: { counter2 }</h4>

        <button 
            className='bg-blue-400 text-white px-4 rounded-md py-2 cursor-progress'
            onClick={increment}>+1 (Heavy load, memorizado)</button>

        <button 
            className='bg-blue-400 text-white px-4 rounded-md py-2 cursor-progress'
            onClick={increment2}>+1 (ligthload)</button>
    </div>
  )
}
