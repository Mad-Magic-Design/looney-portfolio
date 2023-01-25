let currentDisplay = 'greeting'

function showProject(project){
    if (project !== currentDisplay){
        document.getElementById(project).classList.remove('hide')
        document.getElementById(currentDisplay).classList.add('hide')
        currentDisplay = project
    }
}