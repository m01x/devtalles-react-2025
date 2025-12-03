import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle"
import { SubTitle } from "./ui/SubTitle";

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('mundo');

    const handleMyApiCall = useCallback(() => {
      console.log('Llamando a la api!!', subTitle)
    }, [ subTitle ] );

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-thin text-white'>
            MemoApp
        </h1>
        <MyTitle title={title}/>
        <SubTitle subtitle={subTitle} callMyAPI={handleMyApiCall}/>


        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={ () => setTitle('Olá at ->'+  new Date().toLocaleString())}>Cambiar Titulo</button>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={ () => setSubTitle('World')}>Cambiar subtitulo</button>
    </div>
  )
}
