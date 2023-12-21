'use strict'

// -- ЗАВДАННЯ 1----------------------------------------------------------------
let viewField = document.querySelector('.view-field');
let squareColor = document.getElementById('square-color')
let formEditField = document.forms.editField;
let choiceOptions = document.forms.choiceOptions;
let formTL = document.forms.formTableList;
let formTable = document.forms.formTable;
let formList = document.forms.formList;
let styleBorder, colorBorder, typeMark;

document.addEventListener('DOMContentLoaded', () => {
    styleBorder = formTable.typeOfBorder.value;
    colorBorder = formTable.colorOfBorder.value;
    typeMark = formList.typeOfMark.value;
  });

document.querySelector('.btn-save').addEventListener('click', (event)=> {
    console.log('ok save');
    document.querySelector('.view-field').innerHTML = formEditField.editTextarea.value;
})

choiceOptions.addEventListener('click', ()=> {
    viewField.style.fontSize = event.target.value;
})

choiceOptions.fontFamily.addEventListener('change', ()=> {
    viewField.style.fontFamily = event.target.value;
});

//---------------------- COLOR TEXT BACKGROUND-----------------

choiceOptions.btnColorText.addEventListener('click', ()=> {
    if(squareColor.classList.contains('color-bg')) {
        document.querySelector('.color-bg').style.display = "none";
        squareColor.classList.remove('color-bg');
    }

    if(squareColor.classList.contains('color-text')) {
        document.querySelector('.color-text').style.display = "none";
        squareColor.classList.remove('color-text');
    } else {
        squareColor.classList.add('color-text');
        document.querySelector('.color-text').style.display = "flex";
    }
})

squareColor.addEventListener('click', ()=> {
    if(squareColor.classList.contains('color-text')){
        viewField.style.color = getComputedStyle(event.target).backgroundColor;
    }
})

choiceOptions.btnColorBg.addEventListener('click', ()=> {
    if(squareColor.classList.contains('color-text')) {
        document.querySelector('.color-text').style.display = "none";
        squareColor.classList.remove('color-text');
    }

    if(squareColor.classList.contains('color-bg')) {
        document.querySelector('.color-bg').style.display = "none";
        squareColor.classList.remove('color-bg');
    } else {
        squareColor.classList.add('color-bg');
        document.querySelector('.color-bg').style.display = "flex";   
    }
})

squareColor.addEventListener('click', ()=> {
    if(squareColor.classList.contains('color-bg')){
        viewField.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
    }
})


//---------------------------------------------------------------------------
choiceOptions.fontStyle.addEventListener('click', ()=> {
    if(choiceOptions.fontStyle.checked == true){
        viewField.style.fontStyle = event.target.value;
    } else {
        viewField.style.fontStyle = "";
    }
})
choiceOptions.fontWeight.addEventListener('click', ()=> {
    if(choiceOptions.fontWeight.checked == true){
        viewField.style.fontWeight = event.target.value;
    } else {
        viewField.style.fontWeight = "";
    }
})

//--------------------------------------------------------------------------
document.querySelector('.btn-edit').addEventListener('click', ()=> {
    // document.querySelector('.choice-option').style.display = "none"
    // document.querySelector('.add-block-table').style.display = 'none';
    // document.querySelector('.add-block-list').style.display = 'none';

    formEditField.editTextarea.value = document.querySelector('.view-field').innerHTML;

    if(document.querySelector('.edit-field').style.display == "block") {
        document.querySelector('.edit-field').style.display = "none"
    } else {
        document.querySelector('.edit-field').style.display = "block";
    }

    if(document.querySelector('.options-field').style.display == 'none') {
        document.querySelector('.options-field').style.display = 'block'
        document.querySelector('.add-block').style.display = 'none';
    }

})

document.querySelector('.btn-style').addEventListener('click', ()=> {
    if(document.querySelector('.choice-option').style.display == "block") {
        document.querySelector('.choice-option').style.display = "none"

    } else {
        document.querySelector('.choice-option').style.display = "block";
    }

    if(squareColor.classList.contains('color-bg')) {
        document.querySelector('.color-bg').style.display = "none";
        squareColor.classList.remove('color-bg');
    }

    if(squareColor.classList.contains('color-text')) {
        document.querySelector('.color-text').style.display = "none";
        squareColor.classList.remove('color-text');
    }
})

//-----------TABLE LIST-=-----------------------------------------

formEditField.btnAdd.addEventListener('click', ()=> {
    document.querySelector('.add-block').style.display = 'block';
    document.querySelector('.options-field').style.display = 'none';
    document.querySelector('.add-block-table').style.display = 'none';
    document.querySelector('.add-block-list').style.display = 'none';
    for(let i=0; i<formTL.tablelist.length; i++) {
        formTL.tablelist[i].checked = false;
    }
})

formTL.addEventListener('click', ()=> {
    if(event.target.value == 'table') {
        document.querySelector('.add-block-table').style.display = 'block';
        formTable.reset();
        document.querySelector('.add-block-list').style.display = 'none';
    }
    else if(event.target.value == 'list') {
        document.querySelector('.add-block-list').style.display = 'block';
        formList.reset();
        document.querySelector('.add-block-table').style.display = 'none';
    }
})

formTable.typeOfBorder.addEventListener('change', ()=> {
    styleBorder = event.target.value;
})

formTable.colorOfBorder.addEventListener('change', ()=> {
    colorBorder = event.target.value;
})

function addTable (sB, cB) {
    let countTr = formTable.countTR.value;
    let countTd = formTable.countTD.value;
    let wTD = formTable.widthOfTD.value;
    let hTD = formTable.heightOfTD.value;
    let wB = formTable.widthOfBorder.value;
    
    formEditField.editTextarea.value += "<table>"
    for(let i=0; i<countTr; i++) {
        formEditField.editTextarea.value += "<tr>"
        for(let j=0; j<countTd; j++) {
            formEditField.editTextarea.value += `<td style = "width: ${wTD}px; height: ${hTD}px; border: ${wB}px ${sB} ${cB}"></td>` 
        }
        formEditField.editTextarea.value += "</tr>"
    }
    formEditField.editTextarea.value += "</table>";
    formEditField.editTextarea.value += "\n"

}

formTable.createTable.addEventListener('click', ()=> {
    addTable(styleBorder, colorBorder);
    document.querySelector('.add-block').style.display = 'none';
    document.querySelector('.options-field').style.display = 'block';
    document.querySelector('.edit-field').style.display = "block";

})

//============================== LIST ===================================

formList.typeOfMark.addEventListener('change', ()=> {
    typeMark = event.target.value;
})

function addList (tM) {
    let countLi = formList.countLi.value;    
    formEditField.editTextarea.value += `<ul>`;
    for(let i=0; i<countLi; i++) {
        formEditField.editTextarea.value += `<li style="list-style-type:${tM}">item ${i+1}</li>`
        }
    formEditField.editTextarea.value += "</ul>";
    formEditField.editTextarea.value += "\n"
}

formList.createList.addEventListener('click', ()=> {
    addList (typeMark);
    document.querySelector('.add-block').style.display = 'none';
    document.querySelector('.options-field').style.display = 'block';
    document.querySelector('.edit-field').style.display = "block";
})


// -- ЗАВДАННЯ 2----------------------------------------------------------------



// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------
