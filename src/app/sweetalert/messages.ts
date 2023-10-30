import Swal from 'sweetalert2';
import { FormData } from '../Interfaces';
import { sendForm } from '../fetch/sendForm';
export const fireAlert = (data: FormData) => {
    Swal.fire({
        title: 'Los Datos estan correctos',
        html: `nombre: ${data.name}<br>correo: ${data.mail}<br>mensaje: ${data.message}`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si, enviar',
        cancelButtonText: 'No',
        icon: 'warning'

    }
    ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            sendForm(data)
                .then((res) => {
                    console.log(res)
                    Swal.fire('Datos enviados', '', 'success');

                })

        }

    })
}
export const fireAlertWrong = (data: FormData) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 8000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'error',
        html: ` ${data.name == "" ? "" : "<br>" + data.name} ${data.surname == "" ? "" : data.surname} ${data.phone == "" ? "" : data.phone} ${data.mail == "" ? "" : data.mail} ${data.message == "" ? "" : "<br>" + data.message} `,
    })
}