import React, { useState } from "react";
import { LogButton } from "../buttons/log-button";

export const InputsLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (value) => {
        setEmail(value);
        setEmailError(value === "" || value.length < 3 ? "Digite um e-mail válido" : "");
    };

    const validatePassword = (value) => {
        setPassword(value);
        setPasswordError(value.length < 6 ? "A senha deve ter pelo menos 6 caracteres" : "");

    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                placeholder="Digite o seu email"
                className={`w-full p-2 mb-2 rounded-lg outline-none bg-gray-50 focus:bg-white ${email !== "" ? "has-val" : ""
                    } input border-b-2 border-gray-300 outline-none py-1`}
                onChange={(e) => validateEmail(e.target.value)}
            />

            {emailError && <p className="text-red-500">{emailError}</p>}

            <input
                type="password"
                value={password}
                placeholder="*******"
                className="w-full p-2 rounded-lg outline-none bg-gray-50 focus:bg-white"
                onChange={(e) => validatePassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <LogButton></LogButton>
        </form>
    );
};
