

/**
 *? Componente que muestra la información de un cliente/usuario.
 * 
 * Utiliza el hook `use()` de React para resolver promises y suspense boundaries.
 * 
 * @component
 * @param {Props} props - Las propiedades del componente
 * @param {Usable<User>} props.getUser - Promise o context que resuelve los datos del usuario
 * @returns {JSX.Element} Un div con la información formateada del usuario
 * 
 * @example
 * <ClientInformation getUser={userPromise} />
 * 
 * @remarks
 * **Hook `use()`:**
 * - Permite "desenvolver" promises, suspense boundaries y contexts dentro de componentes.
 * - Pausa el renderizado hasta que la promise se resuelva.
 * - Solo se puede usar en componentes React (no en utilidades).
 * 
 * **Suspense:**
 * - Es un mecanismo de React que maneja la carga de datos asíncrona.
 * - Pausa el renderizado mientras se espera que una promise se resuelva.
 * - Requiere un fallback (componente alterno) mientras se carga.
 * - Ideal para code-splitting y lazy loading de componentes.
 * 
 * **Cuándo usar:**
 * - `use()`: Cuando necesitas resolver una promise dentro de un componente.
 * - `Suspense`: Como contenedor padre para envolver componentes que usan `use()`.
 * - Juntos son ideales para Server Components y data fetching en el edge.
 */


import { use, type Usable } from 'react';
import { type User } from './api/get-user.action';

interface Props {
    getUser: Usable<User>
}

export const ClientInformation = ( {getUser }: Props) => {
  
    const user = use(getUser);
  
    return (
    <div
        className='bg-gradient flex flex-col gap-4'
    >
        <h2
            className='text-4xl font-thin text-white'>
                { user.name } - #{ user.id}
        </h2>
        <p
            className='text-white text-2xl'>
            { user.location}
        </p>
         <p
            className='text-white text-xl'>
            { user.role }
        </p>
    </div>
  )
}
