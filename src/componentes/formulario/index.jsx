import React from "react";
import { useForm } from "react-hook-form";
import LogoGoogle from "../../assets/google.png";
import LogoGooglePequeno from "../../assets/google 16x16.png";
import LogoFacebookPequeno from "../../assets/facebook-16x6.png";
import LogoFacebook from "../../assets/facebook.png";
// import "./App.css";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const isMobile = window.innerWidth <= 475;

const schema = yup
    .object({
        name: yup.string().required('O nome é obrigatório'),
        email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
        password: yup.string().min(6, 'a senha deve ter pelo menos 6 digitos').required('A senha é obrigatória'),
        confirmPassword: yup.string().required('A confirmação é obrigatória').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
    })
    .required()


export function Formulario() {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit(userData) {
        console.log(userData);
    }

    return (
        <form className="w-11/12 max-w-xl flex flex-col justify-center items-center p-10 shadow-2xl rounded-lg gap-3" onSubmit={handleSubmit(onSubmit)}>

            <div className=" w-full  flex flex-col items-center justify-center gap-1 text-stone-500 ">


                <div className=" w-full flex flex-col gap-2 ">
                    <label htmlFor="name" class="block text-lg font-medium leading-6 text-gray-900"> Nome:</label>
                    <input type="text" id="name" className="shadow-md"{...register('name', { required: true })} />
                    <span className="text-red-500 text-sm">{errors.name?.message}</span>
                </div>


                <div className=" w-full flex flex-col gap-2">
                    <label htmlFor="email" class="block text-lg font-medium leading-6 text-gray-900"> Email:</label>
                    <input type="text" id="email" className="shadow-md"{...register('email', { required: true })} />
                    <span className="text-red-500 text-sm">{errors.email?.message}</span>
                </div>

                <div className=" w-full flex flex-col gap-2">
                    <label htmlFor="Senha" class="block text-lg font-medium leading-6 text-gray-900"> Senha:</label>
                    <input type="password" id="Senha" className="shadow-md"{...register('password', { required: true })} />
                    <span className="text-red-500 text-sm">{errors.password?.message}</span>
                </div>


                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="confirmPassword" class="block text-lg font-medium leading-6 text-gray-900"> Confirme a senha:</label>
                    <input type="password" id="confirmPassword" className="shadow-md"{...register('confirmPassword', { required: true })} />
                    <span className="text-red-500 text-sm">{errors.confirmPassword?.message}</span>
                </div>

            </div>

            <button type='submit' className="bg-sky-400 w-full py-2 font-semibold m-5 text-white rounded-sm hover:bg-sky-600  hover:scale-105 duration-700 text-lg ">Cadastrar</button>

            <div className="w-full flex flex-col items-center justify-around gap-3 xl:flex-row">

                <div className="w-full border border-gray-200 py-2 px-3 flex gap-3 justify-center items-center hover:scale-105 duration-300 hover:bg-blue-600 hover:text-white font-medium">
                    {isMobile ? (
                        <img src={LogoFacebookPequeno} alt="" />
                    ) : (
                        <img src={LogoFacebook} alt="" />
                    )}
                    <a href="#">Entrar com o Facebook</a>

                </div>

                <div className="w-full border border-gray-200 py-2 px-3 flex gap-3 justify-center items-center hover:scale-105 duration-300 hover:bg-red-700 hover:text-white font-medium">
                    {isMobile ? (
                        <img src={LogoGooglePequeno} alt="" />
                    ) : (
                        <img src={LogoGoogle} alt="" />
                    )}
                    <a href="#">Entrar com o Gmail</a>

                </div>


            </div>

        </form>
    );
}

