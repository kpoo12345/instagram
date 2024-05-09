document.addEventListener("DOMContentLoaded",
    function(e){
        let nameEditButton = document.querySelector("#nameEditButton")
        let editName = document.querySelector("#editName")
        let okButton = document.querySelector("#okButton")
        let newName = document.querySelector("#newName")
        let nameHere = document.querySelector("#nameHere")

        nameEditButton.addEventListener("click",
            function(e){
                editName.style.dispaly = "block"
                nameEditButton.style.dispaly = "none"
            }
        )

        okEditButton.addEventListener("click",
            function(e){
                nameHere.textContent = newName.value
                editName.style.dispaly = "none"
                nameEditButton.style.dispaly = "inline"
            }
        )
    }
)