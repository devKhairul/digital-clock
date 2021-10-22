
const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    
    // Get hours
    const h = now.getHours();
    // Get minutes
    const m = now.getMinutes();
    // Get seconds
    const s = now.getSeconds();

    // Output
    html = `
    <span>${h}</span> :  
    <span>${m}</span> :  
    <span>${s}</span>
    `;

    clock.innerHTML = html;
    
};

setInterval(tick, 1000);