document.addEventListener("DOMContentLoaded",
    function(e){
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e){
                console.log(e.target.value)
            }
        )

        let change = document.querySelector("#change")
        keydown.addEventListener("change",
            function(e){
                console.log(e.target.value)
            }
        )
            
        let input = document.querySelector("#input")
        keydown.addEventListener("input",
            function(e){
                console.log(e.target.value)
            }
        )        
    }
)