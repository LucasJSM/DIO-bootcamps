// new Error(message, fileName, lineNumber);

const unknownInput = new Error("Input inválido");
unknownInput.name = "Invalid input";

const message = `${unknownInput}
Mensagem: ${unknownInput.message}
Nome: ${unknownInput.name}
Call Stack: ${unknownInput.stack}`;

throw message;
