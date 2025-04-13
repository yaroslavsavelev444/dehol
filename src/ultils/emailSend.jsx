import { sendForm } from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formRef) => {
  try {
    const result = await sendForm(SERVICE_ID, TEMPLATE_ID, formRef, PUBLIC_KEY);
    console.log('Email отправлен:', result.text);
    return result;
  } catch (error) {
    console.error('Ошибка при отправке:', error);
    throw error;
  }
};