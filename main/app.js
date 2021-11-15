const input = 'Subsemnatul ... ..., dominiciliat in ... ';
const input1 = 'Subsemnatul X Y Z domiciliat in A B C D';
const input2 = 1;
const input3 = 'ABCD';

function addTokens(input, tokens) {
    const tipeOfInput = typeof input;
    const lengthOfInput = input.length;
    if (tipeOfInput != 'string') {
        throw 'Input should be a string';
    }
    if (lengthOfInput < 6) {
        throw 'Input should have at least 6 characters';
    }
    if (!input.includes('...')) {
        return input;
    } else {
        console.log(input);
        const arrayTokens = Object.values(tokens);
        for (let i = 0; i < arrayTokens.length; i++) {
            input = input.replace('...', arrayTokens[i]);
        }
        console.log(input);
    }
}

const app = {
    tokensName: 'Buharu',
    tokensSecondName: 'Vlad',
    tokensAdress: 'Bucharest, Sector 3'
}

module.exports = app;
try {
    addTokens(input1, app);
} catch (error) {
    console.log(error);
}

try {
    addTokens(input2, app);
} catch (error) {
    console.log(error);
}
try {
    addTokens(input3, app);
} catch (error) {
    console.log(error);
}

try {
    addTokens(input, app);
} catch (error) {
    console.log(error);
}

