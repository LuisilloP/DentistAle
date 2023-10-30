
import { FormData } from '../Interfaces'
type Props = FormData
const reMedio = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const rePhone = /^\d{9}$/
const validatorForm = (props: Props) => {
    const errors: FormData =
    {
        name: '',
        surname: '',
        phone: '',
        mail: '',
        message: ''

    };
    const { name, mail, message, phone, surname } = props;
    if (!name) errors.name = 'Nombre no existe'
    if (!surname) errors.surname = 'Apellido no existe'
    if (!reMedio.test(mail)) errors.mail = 'Correo invalido, ej: correo@correo.com'
    if (!mail) errors.mail = 'Ingrese correo'
    if (!rePhone.test(phone)) errors.phone = "Numero invalido,se necesitan 9 caracteres, Ej: 912345678"
    if (message.length < 5) errors.message = 'Mensaje corto, debe ser mayor a 5 caracteres'
    if (!message) errors.message = 'Ingrese mensaje'
    console.log(errors)
    return errors
}

export default validatorForm