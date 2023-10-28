import { FormData } from '../Interfaces';
export const sendForm = (formData: FormData): Promise<Response> => {

    const { name, mail, message } = formData

    const getResponse = fetch('https://formsubmit.co/ajax/trabajoluisaraya@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            mail: mail,
            message: message
        })
    })
        .then((response) => response.json())
    return getResponse
}