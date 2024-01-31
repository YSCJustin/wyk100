let interval;
let messages = [
    {person: "Mok Tsz Lung",
     message: `I half success half fail this event`},
     {person: "Mok Tsz Lung",
     message: "yo i win genshin"},
     {person: "Mok Tsz Lung",
     message: "frfr"},
     {person: "Mok Tsz Lung",
     message: "dim suen"},
     {person: "Mok Tsz Lung",
     message: "me very pro"},
     {person: "Mok Tsz Lung",
     message: "no u"},
     {person: "Mok Tsz Lung",
     message: ":()"},
     {person: "Mok Tsz Lung",
     message: "wacao"},
     {person: "Mok Tsz Lung",
     message: "YOOOOO"},
     {person: "Mok Tsz Lung",
     message: "yoooo"},
     {person: "Mok Tsz Lung",
     message: "hmm"},
     {person: "Mok Tsz Lung",
     message: "wtf"},
     {person: "Mok Tsz Lung",
     message: "why im so trasj"},
     {person: "Mok Tsz Lung",
     message: "how kau"},
     {person: "Mok Tsz Lung",
     message: "wtf dp"},
     {person: "Mok Tsz Lung",
     message: "u join i join"},
     {person: "Mok Tsz Lung",
     message: "omg"},
     {person: "Mok Tsz Lung",
     message: "no girl"},
     {person: "Mok Tsz Lung",
     message: "pls explain"},
     {person: "Mok Tsz Lung",
     message: "how come eng too pro"},
     {person: "Mok Tsz Lung",
     message: "just found that i bailan many days"},
     {person: "Mok Tsz Lung",
     message: "i express my admire to your sister"},
     {person: "Mok Tsz Lung",
     message: "felix hv perfect pitch"},
     {person: "Mok Tsz Lung",
     message: "no i cant yurk her out"},
     {person: "Mok Tsz Lung",
     message: "i saw at least 2 girls i know them but they dont know me"},
     {person: "Mok Tsz Lung",
     message: "hi my friend dragon wants to get your ig"},
     {person: "Mok Tsz Lung",
     message: "熟女殺手"},
     {person: "Mok Tsz Lung",
     message: "my desperate life"},
     {person: "Mok Tsz Lung",
     message: "wtf ada wong sdic noip both silver rank 1"},
     {person: "Mok Tsz Lung",
     message: "lets go anime girl"},
     {person: "Mok Tsz Lung",
     message: "omg positive contribution"},
     {person: "Mok Tsz Lung",
     message: "i fail to kau the girls"},
     {person: "Mok Tsz Lung",
     message: "(random singing)"},
        {person: "Mok Tsz Lung",
        message: "i am emo"},



]
let unsentMessages = [...messages];

document.addEventListener('DOMContentLoaded', async function() {
    let speed = 2000;
    let curspeed = document.getElementById('curspeed');
    curspeed.textContent = speed + 'ms';
    let speedInput = document.getElementById('speed');
    interval = setInterval(function() {
        if (unsentMessages.length === 0) {
            unsentMessages = [...messages];
        }

        let randomIndex = Math.floor(Math.random() * unsentMessages.length);
        let messageContent = unsentMessages[randomIndex].message;
        let person = unsentMessages[randomIndex].person
 
        unsentMessages.splice(randomIndex, 1);
        let message = document.createElement('div');
        message.className = 'message';
        let content = document.createElement('p');
        let author = document.createElement('p');
        content.style.fontWeight='bolder'
        content.textContent = messageContent;
        author.textContent = person;
        message.appendChild(content);
        message.appendChild(author);

        let container = document.getElementById('messages');
        container.insertBefore(message, container.firstChild);

        if (container.childNodes.length > 20) {
            container.removeChild(container.lastChild);
        }
    }, speed);
    speedInput.addEventListener('input', function() {
        let speedValue = speedInput.value;
    
        speed = speedValue;
        curspeed.textContent = speed+ 'ms';
        clearInterval(interval);
        interval = setInterval(function() {
            if (unsentMessages.length === 0) {
                unsentMessages = [...messages];
            }
    
            let randomIndex = Math.floor(Math.random() * unsentMessages.length);
            let messageContent = unsentMessages[randomIndex].message;
            let person = unsentMessages[randomIndex].person
            unsentMessages.splice(randomIndex, 1);
            let message = document.createElement('div');
            message.className = 'message';
            let content = document.createElement('p');
            let author = document.createElement('p');
            content.style.fontWeight='bolder'
            content.textContent = messageContent;
            author.textContent = person;
            message.appendChild(content);
            message.appendChild(author);
    
            let container = document.getElementById('messages');
            container.insertBefore(message, container.firstChild);
    
            if (container.childNodes.length > 20) {
                container.removeChild(container.lastChild);
            }
        }, speed);
    });


});