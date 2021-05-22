const messages = [
    "hola",
    "que show",
    "que tal",
    "what is up",
    "que hongo",
    "ya te la you know",
    "que rollo",
    "que tranza",
    "te lanzas de panza",
    "te pasas de lanza",
    "=)",
    "=(",
    "nunca te rindas",
    "you are the best"
];

const rMsg = () => {
    const msgs = messages[Math.floor(Math.random()*messages.length)];
    console.log(msgs);
}

module.exports = { rMsg };