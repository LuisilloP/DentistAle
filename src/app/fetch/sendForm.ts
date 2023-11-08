import { FormData } from '../Interfaces';
export const sendForm = (formData: FormData): Promise<Response> => {

    const { name, mail, message, surname, phone } = formData

    const getResponse = fetch('https://formsubmit.co/ajax/a.bacic.v@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            phone: phone,
            mail: mail,
            message: message
        })
    })
        .then((response) => response.json())
    return getResponse
}