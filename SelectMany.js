
// <script type="text/html">

// </script>
class SelectMany {
    constructor(obj) { 
        this.element = obj.element; 
        this.message = obj.message; 
        this.processElement(this.element);
        this.showOptions(obj.element) 
    }
    processElement(element){ 
        this.optionsText = Array.from(element.options, x => x.innerText);
        
    }
    showOptions(el) { 
        const newEl = document.createElement('div'); 
        const text = this.optionsText.reduce((preVal, currentVal, index) => preVal +  ` ${index} ` + currentVal); 
        const textNode = document.createTextNode(text); 
        newEl.appendChild(textNode); 
    }
    invalid(msg){ 
        this.invalidMsg = msg; 
        window.alert(this.invalidMsg); 
    }
    displayMsg() { 
        window.alert(this.message); 
    }
    displayOptions(){ 
        this.optionsText.forEach(x => console.log(x)); 
    }
}
