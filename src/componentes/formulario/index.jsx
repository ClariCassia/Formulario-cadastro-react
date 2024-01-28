import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import LogoGoogle from "../../assets/google.png";
import LogoFacebook from "../../assets/facebook.png";
import Input from "../input";
import SocialLoginButton from "../button/log-button";

const schema = yup
    .object({
        name: yup.string().required('O nome é obrigatório'),
        email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
        password: yup.string().min(6, 'a senha deve ter pelo menos 6 digitos').required('A senha é obrigatória'),
        confirmPassword: yup.string().required('A confirmação é obrigatória').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
    })
    .required()

function Formulario() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(userData) {
        console.log(userData);
    }

    return (
        <form className="w-11/12 max-w-xl flex flex-col justify-center items-center p-6 shadow-2xl rounded-lg gap-3 sm:p-10" onSubmit={handleSubmit(onSubmit)}>

            <div className="w-full flex flex-col items-center justify-center gap-1 text-stone-500">
                <Input id="name" label="Nome" type="text" register={register} errors={errors} />
                <Input id="email" label="Email" type="text" register={register} errors={errors} />
                <Input id="password" label="Senha" type="password" register={register} errors={errors} />
                <Input id="confirmPassword" label="Confirme a senha" type="password" register={register} errors={errors} />
            </div>

            <button type="submit" className="bg-sky-400 w-full py-2 font-semibold m-5 text-white rounded-sm hover:bg-sky-600  hover:scale-105 duration-700 text-lg">Cadastrar</button>

            <div className="w-full flex flex-col items-center justify-around gap-3 xl:flex-row">

                <SocialLoginButton logo={LogoFacebook} text="Entrar com o Facebook" hoverColor="sky-600 " />
                <SocialLoginButton logo={LogoGoogle} text="Entrar com o Google" hoverColor="red-600 " />
                

            </div>

        </form>
    );
}

export default Formulario;


