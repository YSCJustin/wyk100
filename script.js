


document.addEventListener('DOMContentLoaded', async function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        })
    })
    const hidden = document.querySelectorAll('.hidden');
    hidden.forEach((item) => {
        observer.observe(item);
    })
    let messages = 0;

// setInterval(function() {

//     let message = document.createElement('div');
//     message.className = 'message';
//     let content = document.createElement('p');

//     content.style.fontWeight='bolder'
//     message.appendChild(content);
//     let author = document.createElement('p');
//     author.textContent= `Considering Mok Tsz Lung's apparent difficulties in comprehending basic English sentences, it becomes increasingly apparent that he may face challenges in navigating the demands of the modern world where English is widely utilized. The ability to understand and communicate effectively in English has become an essential skill set, enabling individuals to access a wealth of information, engage in global discourse, and establish meaningful connections with diverse cultures.Considering Mok Tsz Lung's apparent difficulties in comprehending basic English sentences, it becomes increasingly apparent that he may face challenges in navigating the demands of the modern world where English is widely utilized. The ability to understand and communicate effectively in English has become an essential skill set, enabling individuals to access a wealth of information, engage in global discourse, and establish meaningful connections with diverse cultures. Considering Mok Tsz Lung's apparent difficulties in comprehending basic English sentences, it becomes increasingly apparent that he may face challenges in navigating the demands of the modern world where English is widely utilized. The ability to understand and communicate effectively in English has become an essential skill set, enabling individuals to access a wealth of information, engage in global discourse, and establish meaningful connections with diverse cultures.Considering Mok Tsz Lung's apparent difficulties in comprehending basic English sentences, it becomes increasingly apparent that he may face challenges in navigating the demands of the modern world where English is widely utilized. The ability to understand and communicate effectively in English has become an essential skill set, enabling individuals to access a wealth of information, engage in global discourse, and establish meaningful connections with diverse cultures.`;
//     message.appendChild(author);
    


//     let container = document.getElementById('messages');
//     container.insertBefore(message, container.firstChild);
//     content.textContent = 'Message ' + messages++;
    
//     if (container.childNodes.length >= 10) {
//         let oldestMessage = container.lastChild;
//             container.removeChild(oldestMessage);
//     }
  


// },5000);  
})

