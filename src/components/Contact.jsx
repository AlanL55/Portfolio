import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {
    
    const form = useRef();

    const {reset, register} = useForm()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y81ulch', 'template_u4knm98', form.current, 'qlGQ2KH0-hJoxev0c')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        {
            reset({
                name: "",
                email: "",
                message: ""
            })
        }
    };
    return  (
            <form className='contact_form' ref={form} onSubmit={sendEmail}>
                <label className='contact_label'>Nombre</label>
                <input className="contact_input" {...register("name")}  type="text" name="from_name" />
                <label className='contact_label'>Correo</label>
                <input className="contact_input" {...register("email")} type="email" name="user_email" />
                <label className='contact_label'>Mensaje</label>
                <textarea className="contact_input textarea" {...register("message")} name="message" />
                <button className='contact_button' type='submit' >Enviar</button>
            </form>
    )
}

export default Contact