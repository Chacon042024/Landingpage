// Se puede añadir código adicional aquí para integrar funcionalidades específicas del chatbot

// Función de inicialización del chatbot de Stack AI
function initializeChatbot() {
    // Asegúrate de que StackAI está definido antes de intentar inicializarlo
    if (typeof StackAI !== 'undefined') {
        StackAI.init({
            apiKey: '0d7ac8fa-c0c6-4e18-a91f-62fcbc8d5d53'
        });
        console.log("Chatbot initialized and ready!");
    } else {
        console.error("StackAI script not loaded.");
    }
}

// Llamar a la función de inicialización cuando la página cargue completamente
window.onload = function() {
    // Deberíamos darle tiempo al script externo para cargar, especialmente si es pesado
    // Esto es un timeout simple, ajusta según la velocidad de carga observada
    setTimeout(initializeChatbot, 1000);  // Espera 1 segundo antes de inicializar
};
