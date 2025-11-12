import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import './index.css';
// import { HooksApp } from './HooksApp';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLightWithEffectWithHook } from './02-useEffect/TrafficLightWithEffectWithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
import { FocusScreen } from './04-useRef/focusScreen';
import { TasksApp } from './05-useReducer/TaskApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithEffectWithHook/> */}
    {/* <PokemonPage/> */}
    {/* <FocusScreen/> */}
    <TasksApp/>
  </StrictMode>,
)
