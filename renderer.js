var app = require('electron').remote
var dialog = app.dialog
var fs = require('fs')

document.getElementById('btn').addEventListener('click', saveFile)
document.getElementById('open').addEventListener('click', openFile)

function openFile(){
    dialog.showOpenDialog((filenames) =>{
        if(filenames === undefined){
            alert("No file selected")
            return;
        }

        readFile(filenames[0]);
    })
}

function saveFile(){
    dialog.showSaveDialog((filename)=>{
        if (filename === undefined){
            alert("Invalid file name.")
            return;
        }

        var content = document.getElementById('content').value

        fs.writeFile(filename, content, (err)=>{
            if (err) console.log(err)
            alert("File saved.")
        })
    })
}

function readFile(filepath){
    fs.readFile(filepath, 'utf-8', (err, data) =>{
        if (err){
            alert("Error retrieving file")
            return;
        }
        var textArea = document.getElementById('output')
        textArea.value = data
    })
}