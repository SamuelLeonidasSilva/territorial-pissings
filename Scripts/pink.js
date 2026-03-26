setInterval(() => {
    if(Math.random() > 0.95) {
        document.body.style.filter = "invert(1) hue-rotate(280deg)";
        setTimeout(() => {
            document.body.style.filter = "none";
        }, 100);
    }
}, 2000);