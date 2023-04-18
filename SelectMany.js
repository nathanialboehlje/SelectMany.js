
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
    processElement(el){ 
        console.log(el); 
        const options = Object.keys(el); 
        const selectOptions = []; 
        options.forEach(x => { 
            console.log(el[x]); 
            selectOptions.push(el[x].innerText); 
        })

        console.log(selectOptions);  
        
    }
}
