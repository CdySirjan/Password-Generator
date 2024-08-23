function generatePassword(length, options) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let availableChars = '';
    if (options.uppercase) availableChars += upperCase;
    if (options.lowercase) availableChars += lowerCase;
    if (options.numbers) availableChars += numbers;
    if (options.symbols) availableChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }
    return password;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const options = {
        uppercase: document.getElementById('uppercase').checked,
        lowercase: document.getElementById('lowercase').checked,
        numbers: document.getElementById('numbers').checked,
        symbols: document.getElementById('symbols').checked
    };

    const password = generatePassword(length, options);
    document.getElementById('password').textContent = password;
});


