import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
};

type TrafficColor = keyof typeof colors; //Esta es algo mas avanzada y depende de la constante colors...

export const TrafficLightWithEffect = () => {

    const [light, setlight] = useState<TrafficColor>('red');
    const [countDown, setCountDown] = useState(5);

    //Countdown Effect
    useEffect( ()=>{

      if ( countDown === 0 ) return;


      const intervalId = setInterval( ()=>{
        setCountDown( prev => prev -1);
      },1000);

      //funcion Cleanup!
      return ()=>{
        clearInterval(intervalId);
      }

    }, [ countDown ] );

    //Change Color Effect
    useEffect(() => {

      if (countDown > 0 ) return;
      
      if ( countDown === 0 ) {
        setCountDown(5)

        if ( light === 'red'){
          setlight('green');
          return;
        }

        if( light === 'yellow'){
          setlight("red");
          return;
        }

        if( light === 'green'){
          setlight("yellow");
          return;
        }
      };
    
    }, [countDown, light])
    



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">Semáforo con UseEffect</h1>
        <h2 className="text-white text-xl">CountDown : {countDown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${( countDown /5 )* 100}%`}}
          ></div>
        </div>

        <div className={`w-32 h-32 ${ light === 'red' ? colors[light] : 'bg-gray-500' } rounded-full`}></div>
        <div className={`w-32 h-32 ${ light === 'yellow' ? colors[light] : 'bg-gray-500' } rounded-full`}></div>
        <div className={`w-32 h-32 ${ light === 'green' ? colors[light] : 'bg-gray-500' } rounded-full`}></div>

        
      </div>
    </div>
  );
};