const title = "Dulce Tentación Venezolano";
const email = "neliomar271990@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en los productos de " + title + ", especialmente en los postres y pasabocas venezolanos. Me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573028424242"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Dulce Tentación nos dedicamos a ofrecer una gran variedad de postres y pan de jamón venezolano que evocan recuerdos especiales y despiertan emociones. Desde nuestros famosos vasitos de la felicidad, mini donitas, galletas, torta de piña y cupcakes, hasta deliciosos pasabocas, cada creación está elaborada con pasión y atención al detalle.",
        description2: "Todas nuestras preparaciones están hechas con ingredientes de calidad y recetas tradicionales de familia, garantizando el auténtico sabor de Venezuela. Nuestro objetivo es brindarte una experiencia culinaria que te transporte a momentos inolvidables de nuestra tierra. En Dulce Tentación, cada producto es una obra de arte que refleja nuestro compromiso con la excelencia y el amor por la repostería."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Evocando Recuerdos Especiales y Despertando Emociones",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61552737466839",
        instagram: "https://www.instagram.com/dulce_tentacion2327?igsh=ZG8xMGRsbzZveGF4",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
