
// class SelectMany {
//     constructor(obj) {
//         this.message = obj.message;  

//     }
//     get DisplayMessage(){ 
//         window.alert(this.message); 
//     }
// }
var SelectMany = { 
    init (obj) { 
        this.message = obj.message;
        this.element = obj.element;  
        this.processElement(obj.element); 
    },
    displayMessage() { 
        window.alert(this.message); 
    }, 
    processElement(el) { 
        const options = Object.keys(el); 
        const selectOptions = []; 
        options.forEach(x => { 
            selectOptions.push(el[x].innerText); 
        })


        
    }, 
    invalid(validationMsg) {
        if (validationMsg != null) { 
            this.validationMsg = validationMsg;
            this.displayValMsg(); 
        } 
    }, 
    displayValMsg() { 
        window.alert(this.validationMsg); 
    }
}

