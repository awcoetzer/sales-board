'use strict';

const lightTheme = function () {
    document.documentElement.style.setProperty('--clr-shadow', 'hsl(280, 25%, 22%)');
    document.documentElement.style.setProperty('--clr-background', 'hsl(280, 25%, 72%)');
    document.documentElement.style.setProperty('--clr-background-tint', 'hsl(281, 37%, 85%)');
    document.documentElement.style.setProperty('--clr-headline', 'hsl(0, 0%, 18%)');
    document.documentElement.style.setProperty('--clr-paragraph', 'hsl(0, 0%, 15%)');
    document.documentElement.style.setProperty('--clr-button', 'hsl(0, 0%, 92%)');
    document.documentElement.style.setProperty(
        '--clr-button-before', 
        'linear-gradient(140deg, hsl(0, 0%, 90%), hsl(0, 0%, 65%))'
    );
    document.documentElement.style.setProperty('--clr-accen', 'hsl(332, 38%, 35%)');
    document.documentElement.style.setProperty('--clr-accent-tint', 'hsl(332, 38%, 65%)');
}

const darkTheme = function () {
    document.documentElement.style.setProperty('--clr-shadow', 'hsl(280, 15%, 6%)');
    document.documentElement.style.setProperty('--clr-background', 'hsl(280, 15%, 12%)');
    document.documentElement.style.setProperty('--clr-background-tint', 'hsl(281, 17%, 25%)');
    document.documentElement.style.setProperty('--clr-headline', 'hsl(0, 0%, 98%)');
    document.documentElement.style.setProperty('--clr-paragraph', 'hsl(0, 0%, 85%)');
    document.documentElement.style.setProperty('--clr-button', 'hsl(0, 0%, 98%)');
    document.documentElement.style.setProperty(
        '--clr-button-before',
        'linear-gradient(140deg, hsl(0, 0%, 95%), hsl(0, 0%, 65%))'
    );
    document.documentElement.style.setProperty('--clr-accen', 'hsl(332, 38%, 45%)');
    document.documentElement.style.setProperty('--clr-accent-tint', 'hsl(332, 38%, 65%)');
}

export { lightTheme, darkTheme };