document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".edit-btn").forEach(button => {
       
       
        button.addEventListener("click", function() {
            let section = this.parentElement;
            let content = section.querySelector("p, ul");
            let originalContent = content.innerHTML;

            let textarea = document.createElement("textarea");
            textarea.value = originalContent;
            textarea.style.width = "100%";
            textarea.style.height = "150px";

            let saveButton = document.createElement("button");
            saveButton.innerText = "Guardar";
            saveButton.className = "btn";

            section.replaceChild(textarea, content);
            this.style.display = "none";
            section.appendChild(saveButton);

            saveButton.addEventListener("click", function() {
                let newText = document.createElement(content.tagName);
                newText.innerHTML = textarea.value;
                section.replaceChild(newText, textarea);
                saveButton.remove();
                button.style.display = "block";
            });
        });
    });

    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.accept = "image/*";
    inputFile.style.display = "none";
    document.body.appendChild(inputFile);

    document.getElementById("change-btn").addEventListener("click", function() {
        inputFile.click();
    });

    inputFile.addEventListener("change", function(event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector(".foto").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});