export default class ButtonSelect {
    #element;
   
    
  constructor(element) {
    if(!element ){
        throw new Error('Elemento não encontrado');
    } 

    this.#element = element instanceof Element ? element : document.querySelector(element);
   
  
  }

  selectElement(classeElement, datasetIDElement, nameDataSet){
    this.getElement().addEventListener('click', () => {
    
      // remove a classe do elemento nao selecionado
        document.querySelectorAll(`[${nameDataSet}]`).forEach(button => {
            button.classList.remove(classeElement);
          });

        const button = document.querySelector(`[${nameDataSet}="${datasetIDElement}"]`);
        return button ? button.classList.add(classeElement) : null;
        
        
        });
  }



  getElement(){
    return this.#element;
  }

  
}



