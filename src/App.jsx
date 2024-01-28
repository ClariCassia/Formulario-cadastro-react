
import logoUser from './assets/_canais-digitais_header.png'
import imgTech from './assets/techs.png'
import Formulario  from "./componentes/formulario/";


export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center mx-auto  ">

      <section className="w-full flex-[0.7] flex flex-col justify-center items-center p-4  ">

      <img src={logoUser} alt="logo do usuario" className="w-36 hover:scale-110 duration-300 xl:w-44 " />

        <h1 className="text-zinc-800/95 font-bold text-2xl mb-7 sm:text-4xl">Cadastre-se</h1>

        <Formulario></Formulario>
     
      </section>

      <section
        className="hidden lg:flex justify-center items-center w-full min-h-screen flex-1 flex-col p-4  bg-blue-600 gap-9">

        <h1 className="text-2xl text-center max-w-lg lg:text-3xl">Domine as <strong className="text-white">tecnologias mais
          buscadas</strong> do mercado</h1>
        <img src={imgTech} alt="Tecnologias usadas no mercado" className="w-5/6 lg:w-full lg:max-w-md" />

    
      </section>
    </main>
  )
}