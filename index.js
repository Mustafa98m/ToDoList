var Textin = document.getElementById('Textin');
var Butn = document.getElementById('Sub');
var list = document.getElementById('ordli');
var countCheck = 0;
var rest = document.getElementById('Res');
var Tasks = document.getElementById('TaskConsole');


//To  submit the text box content
Textin.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        if (document.getElementById('Textin').value === '') {
            alert('Pleace fill the TextBox!');
        }
        else {
            MoveToConsole();
        }
    }
});

rest.addEventListener('click', function()
{
list.innerHTML = '';
document.getElementById('Def').innerText = 'Nothing here to show yet!!';
document.getElementById('StatusPar').innerHTML = '0 Task is done';
$('.progress-bar').css({'width':'0%'});

}    
)
function TaskPreview(numberOf, stat,total) {
    if (numberOf > 1) {
        stat.innerHTML = numberOf + ' Tasks are done';
        $('.progress-bar').css({'width':PreCount(numberOf,total)+'%'});
        $('.progress-bar').text(PreCount(numberOf,total)+'%');
    }
    else {
        stat.innerHTML = numberOf + ' Task is done';
        $('.progress-bar').css({'width':PreCount(numberOf,total)+'%'});
        $('.progress-bar').text(PreCount(numberOf,total)+'%');
    }
}

function PreCount(count, leng){
 pre = (count/leng) *100;
 return(pre.toFixed())
} 
//Show content on the show console div
function MoveToConsole() {
    if (Textin.value === '') {
        alert('Pleace fill the TextBox!');
    }
    else {
        document.getElementById('Def').innerText = '';
        var values = document.getElementById('Textin').value;
        list.innerHTML += '<li  id = "List">' + values + ' <input type="checkbox" id="check" style="float:right" > <br>';
        // Query for all elements with id #check and loop through it
        var check = document.querySelectorAll('#check');
        var status = document.getElementById('StatusPar');
        var elemeNt = document.querySelectorAll('#List');
        // loop through the checkBoxes 
        for (let i = 0; i < check.length; i++) {
            countCheck = 0;
            check[i].addEventListener('change', function () {
               

                if (this.checked) {
                    //To flag one task is done cause CB is checked 

                    elemeNt[i].style.cssText = 'text-decoration:line-through';
                    //To count how many tasks are done
                    countCheck++;
                    TaskPreview(countCheck, status,check.length);
                } else {
                    //To remove the line over the text if the checkbox is not checked
                    elemeNt[i].style.cssText = 'text-decoration:none';
                    //Decrement the Task countr because one tasks CB is disselected
                    countCheck--;
                    TaskPreview(countCheck, status,check.length);
                }
                if (countCheck === check.length) {
                    status.innerHTML = ' All tasks are done GreatJob :)';
                   $('.progress-bar').css({'width':'100%'});
                   $('.progress-bar').text('100%');
                }
            })


        };
  
        // To hide the save task buttun and clear the textbox
        Textin.value = '';
        
        //Butn.style.cssText = ' visibility: hidden;';
    }
}

//Event to the Save Task buttun tho show content on the console 
Butn.addEventListener("click", MoveToConsole);