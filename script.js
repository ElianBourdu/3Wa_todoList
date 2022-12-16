// BONUS
// 3)  A l'ajout de tache le input doit se remettre a vide 
// 4) Les tache son sauvegarder dans le localStorage 
// 5) Les tache peuvent etre cocher (checkbox) pour etre indiquer comme faite 
// 6 ) Il est possible de creer plusieur liste de task. A chaque ajout de task l'utilisateur devra choisir sur quel liste il ajout sa task ( a l'aide d'un select )

document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', addTask);
});

const addTask = (input) => {
    // generating all the html content
    const newTask =
        `
        <p></p>
        <button>delete</button>
        `;
    const divTask = document.createElement("div");
    divTask.setAttribute("class", "divTask");
    const divId = new Date();
    divTask.setAttribute("id", divId);
    divTask.innerHTML = newTask;

    // data retrieval + assignment into our generate p
    const inputValue = document.getElementsByTagName("input")[0].value;

    const p = divTask.getElementsByTagName("p")[0];
    p.append(inputValue);

    // delete function 
    const deleteTask = () => {
        const divId = btnDelete.parentNode.getAttribute('id');
        console.log(divId);
        const divToDelete = document.getElementById(divId);
        divToDelete.remove();
    };
    
    // link function delete on btnDelete
    const btnDelete = divTask.getElementsByTagName("button")[0];
    btnDelete.addEventListener('click', deleteTask);


    // add the whole div we created
    const divContainer = document.getElementById('taskContainer');
    divContainer.append(divTask);
};

