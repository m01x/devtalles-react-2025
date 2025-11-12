import { useState, useEffect } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
};

type TrafficColor = keyof typeof colors; //Esta es algo mas avanzada y depende de la constante colors...

export const useTrafficLight = (initialValue: TrafficColor) => {
  
    const [light, setlight] = useState<TrafficColor>(initialValue);
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
    
    }, [countDown, light]);

    return {
        //Props
        light,
        countDown,
        colors,

        //Computed o Calculated
        percentageBar: ( countDown /5 )* 100,

        //Methods
    }

}



   
    