
// <script type="text/html">

// </script>



class SelectMany {
    constructor(obj) { 
        this.element = obj.element; 
        this.message = obj.message; 
        this.processElement(this.element);
        this.renderSelect(obj.element) 
    }
    processElement(element){ 
        this.optionsText = Array.from(element.options, x => x.innerText);
        
    }
    renderSelect(el) {  
        // create input element 
        const newInput = this.renderInput(); 
        this.element.insertAdjacentElement('afterend', newInput);
       
        // create div
        // add input element to it
        this.div = document.createElement('div'); 
        this.div.setAttribute('id', 'select-many-div')
        this.div.appendChild(newInput); 

        // create results list 
        const resultsList = this.renderList(this.optionsText); 
        this.div.appendChild(resultsList); 

        // add listener to input element 
        // onchange -> filter options 
        newInput.addEventListener('input', (event) => {
            const inputVal = event.target.value; 
            const filteredOptions = this.optionsText.filter(x => x.includes(inputVal)); 
            this.div.removeChild(this.ul);  
            const newList = this.renderList(filteredOptions);
            this.div.appendChild(newList);  
        })

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
    renderInput() { 
        this.searchInput = document.createElement('input');
        this.searchInput.setAttribute('type', 'text'); 
        this.searchInput.setAttribute('placeholder', 'type something...');
        return this.searchInput;  
    }
    renderList(list) { 
        this.ul = document.createElement('ul');
        for (const item of list){  
            let li = document.createElement('li'); 
            li.textContent = item;  
            this.ul.appendChild(li); 
        }
        return this.ul;  
    }
}
