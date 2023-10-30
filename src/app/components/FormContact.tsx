"use client"
import React, { ChangeEventHandler, useState } from 'react';
import { FormData } from '../Interfaces';
import validatorForm from '../functions/validatorForm';
import { fireAlert, fireAlertWrong } from '../sweetalert/messages';
const dataInitial: FormData =
{
    name: '',
    surname: '',
    phone: '',
    mail: '',
    message: '',

}
const FormContact = () => {
    let send = false;
    const [data, setData] = useState(dataInitial)
    const [error, setErrors] = useState(dataInitial)
    const inputHandleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const validationErrors = validatorForm(data)
        setErrors(validationErrors)
        if (!validationErrors.name && !validationErrors.message && !validationErrors.mail) send = true;
        if (send) { fireAlert(data) } else {
            fireAlertWrong(validationErrors)
        }
    }

    const clearMessageError = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrors({
            ...error, [event.target.name]: ' '
        })
    }
    return (
        <form className='flex flex-col gap-5 ' onSubmit={(event) => handleSubmit(event)}>
            <div className=' flex flex-col sm:flex-row gap-5  '>
                <div className='relative z-0 w-full mb-6 group'>
                    <input type="text" name="name" id="name"
                        onChange={(event) => inputHandleChange(event)} onFocus={(event) => clearMessageError(event)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-[#00ffff] focus:outline-none focus:ring-0 focus:border-[#00ffff] peer" placeholder=" " required />
                    <label htmlFor="name"
                        className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00ffff] peer-focus:dark:text-[#00ffff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Nombre</label>
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                    <input type="text" name="surname" id="surname"
                        onChange={(event) => inputHandleChange(event)} onFocus={(event) => clearMessageError(event)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-[#00ffff] focus:outline-none focus:ring-0 focus:border-[#00ffff] peer" placeholder=" " required />                    <label htmlFor="surname"
                            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00ffff] peer-focus:dark:text-[#00ffff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"                        >Apellido</label>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-5 '>
                <div className='relative z-0 w-full mb-6 group'>
                    <input type="text" name="telephone" id="telephone"
                        onChange={(event) => inputHandleChange(event)} onFocus={(event) => clearMessageError(event)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-[#00ffff] focus:outline-none focus:ring-0 focus:border-[#00ffff] peer" placeholder=" " required />                    <label htmlFor="telephone"
                            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00ffff] peer-focus:dark:text-[#00ffff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"                        >Telefono</label>
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                    <input type="text" name="mail" id="mail"
                        onChange={(event) => inputHandleChange(event)} onFocus={(event) => clearMessageError(event)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-[#00ffff] focus:outline-none focus:ring-0 focus:border-[#00ffff] peer" placeholder=" " required />                    <label htmlFor="mail"
                            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00ffff] peer-focus:dark:text-[#00ffff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"                        >Correo</label>
                </div>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
                <textarea
                    name="message"
                    id="message"
                    onChange={(event) => inputHandleChange(event)}
                    onFocus={(event) => clearMessageError(event)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-[#00ffff] focus:outline-none focus:ring-0 focus:border-[#00ffff]  peer"
                    placeholder=" "
                    required
                ></textarea>
                <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0peer-focus:text-[#00ffff] peer-focus:dark:text-[#00ffff]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Mensaje</label>
            </div>

            <button type='submit' className=" w-full md:w-[10rem] bg-zinc-900 text-white py-2 px-4 text-sm] "

            >
                Agendar
            </button>
        </form>

    )
}

export default FormContact