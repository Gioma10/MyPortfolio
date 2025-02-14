import Footer from "../Footer";
import Input from "./Input";
import { motion } from "motion/react";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe(){
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState(null);

    // Stato per input e errori
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Funzione per aggiornare lo stato del form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funzione per la validazione
  const validateForm = () => {
    let newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Required";
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = "Invalid email";
    }
    if (!formData.message.trim()) newErrors.message = "The message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Ritorna true se non ci sono errori
  };

//   Invio del form 
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm('service_f1bcu81', 'template_q6ybo0d', form.current, {
        publicKey: '94wY5LoerVOptOaqj',
      })
      .then(
        () => {
            // console.log('SUCCESS!');
            setStatusMessage({ type: "success", text: "Message sent succesfully 🎉" });
            setFormData({ from_name: "", from_email: "", message: "" });
            setErrors({});
        },
        () => {
            // console.log('FAILED...', error.text);
            setStatusMessage({ type: "error", text: "Error sending, try later. ❌" });

        },
      );
      setTimeout(() => setStatusMessage(null), 5000);
  };

    return (
        <section className="h-screen flex justify-center items-center relative">
            <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-[#F5EDE2] p-6 sm:p-8 rounded-2xl shadow-lg text-center w-5/6 sm:w-4/6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#837160] mb-2 sm:mb-4">Contact me</h2>
                    <p className="text-[#837160] smallest-p-form text-xs sm:text-base md:text-lg mb-3 sm:mb-6">Do you have a project or collaboration in mind? Write to me!</p>
                    {/* Messaggio di successo o errore */}
                    {statusMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`p-3 mb-4 text-[#DEC295] rounded-lg ${
                            statusMessage.type === "success" ? "bg-[#837160]" : "bg-[#D16E50]"
                            }`}
                        >
                            {statusMessage.text}
                        </motion.div>
                    )}
                    <form ref={form} onSubmit={sendEmail} className=" space-y-2 md:space-y-8">
                        <Input
                            placeholder="Name"
                            name="from_name"
                            type="text"
                            isTextArea={false}
                            value={formData.from_name}
                            onChange={handleChange}
                            error={errors.from_name}
                        />

                        <Input
                            placeholder="Email"
                            name="from_email"
                            type="email"
                            isTextArea={false}
                            value={formData.from_email}
                            onChange={handleChange}
                            error={errors.from_email}
                        />

                        <Input
                            placeholder="Message"
                            name="message"
                            type="text"
                            row="1"
                            isTextArea={true}
                            value={formData.message}
                            onChange={handleChange}
                            error={errors.message}
                        />
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-1 sm:mt-4 bg-[#837160] cursor-pointer text-[#DEC295] py-1 px-4 md:py-3 md:px-6 rounded-xl shadow-md"
                        >
                            Send
                        </motion.button>
                    </form>
                </motion.div>
            <Footer />
        </section>
    )
}