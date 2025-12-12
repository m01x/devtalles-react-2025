import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button';
import { use } from 'react'
import { Link } from 'react-router'

export const AboutPage = () => {

  const { isAuthenticated, logout } = use(UserContext);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Página sobre mi</h1>
      <hr />

      <div className='flex flex-col gap-2'>
        <Link to='/profile' className='hover:text-blue-500 underline text-2xl cursor-pointer'>
          Perfil
        </Link>

        {
          //? Login y logout condicional desde el contexto
          isAuthenticated ? (
            <Button className=' cursor-pointer text-2xl underline' variant={'destructive'} onClick={logout}>Cerrar Sesion</Button>
          ):(
            <Link to='/login' className='hover:text-blue-500 underline text-2xl cursor-pointer'>
              Iniciar sesion
            </Link>
          )
        }

      </div>

      </div>
  )
}
