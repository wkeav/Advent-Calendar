const days = document.querySelectorAll(".day");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const message = document.getElementById("message");
const messageImage = document.getElementById("messageImage");

days.forEach(day => {
    day.addEventListener("click", function() {
        const dayDate = this.getAttribute("data-date");
        const currentDate = new Date().toISOString().split('T')[0];

        if (dayDate <= currentDate) {
            const dayNumber = this.getAttribute("data-day");
            const dayMessage = this.getAttribute("data-message");
            const imageUrl = this.getAttribute("data-image");
            const showImage = this.getAttribute("data-show-image");

            
            message.textContent = ` ${dayMessage}`;

            
            if (showImage === "true") {
                messageImage.src = imageUrl;
                messageImage.style.display = 'block';
            } else {
                messageImage.style.display = 'none';
            }
            modal.style.display = 'flex'; 
        
        } else {
            alert("You can't open future dates SMH cheater tsk tsk SHAME!");
        }
    });
});
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});


//snowflakes creation
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    
    snowflake.style.left = Math.random() * 100 + "vw";
    
    snowflake.style.animationDelay = Math.random() * 5 + "s";
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 100000); 
}
setInterval(createSnowflake, 100);


