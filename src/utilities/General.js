export const UniqueId = (random = false) => {
    let modifier = 0;
    
    if (random) {
        do {
            modifier = parseInt(Math.random() * 100000);
        } while (document.getElementById(`ID${modifier}`)) 
    } else {
        while (document.getElementById(`ID${modifier}`)) {
            modifier++;
        }
    }
    return `UNIQUE-ID-${modifier}`;
}

export const UniqueKey = () => {
    return `UNIQUE-KEY-${parseInt(Math.random() * 100000)}`
}