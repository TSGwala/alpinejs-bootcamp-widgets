function greetWidget() {
    return {
        name: '',
        language: 'en',
        message: '',
        greet() {
            const greetings = {
                en: 'Hello',
                es: 'Hola',
                fr: 'Bonjour'
            };
            this.message = `${greetings[this.language]}, ${this.name}!`;
        }
    };
}


