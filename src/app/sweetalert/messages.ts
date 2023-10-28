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