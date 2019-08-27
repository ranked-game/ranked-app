const messages = [
    'Adding Randomly Mispeled Words Into Text',
    'Does Anyone Actually Read This?',
    "Doing Something You Don't Wanna Know About",
    'Doing The Impossible',
    'Grrr. Bark. Bark. Grrr.',
    'Beep-beep. Blop. Beep.',
    'Do Not Turn Back',
    'Turning Tears Into Wine',
    'Spawning Creeps',
    'Building Ancients',
    'Feeding Dragons',
    'Teaching Ogres to Sing',
    'You Have Gotten Better At Loading! (15)',
    'Sorry, no more funny messages',
    '*Funny message that makes you smile*',
    'Grinding coffee, steaming milk',
    'Doing things',
    'Sending Tesla into space',
    'Learning dirty words',
];

export default function() {
    const random = Math.round(Math.random() * messages.length);

    return messages[random];
}
