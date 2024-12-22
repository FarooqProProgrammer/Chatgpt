function generateRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }

    return randomId;
}

export const gptData = [
    {
        id: generateRandomId(),
        title: 'Title 1'
    },
    {
        id: generateRandomId(),
        title: 'Title 2'
    },
    {
        id: generateRandomId(),
        title: 'Title 3'
    },
    {
        id: generateRandomId(),
        title: 'Title 4'
    },
    {
        id: generateRandomId(),
        title: 'Title 5'
    },


]