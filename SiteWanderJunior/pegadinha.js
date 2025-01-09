const button = document.getElementById("nao");

            button.addEventListener("click", function() {
                const maxX = window.innerWidth - button.offsetWidth - 10;
                const maxY = window.innerHeight - button.offsetHeight - 10; 
                const randomX = Math.floor(Math.random() * maxX);
                const randomY = Math.floor(Math.random() * maxY);
                button.style.position = "absolute";
                button.style.left = `${randomX}px`;
                button.style.top = `${randomY}px`;
            });