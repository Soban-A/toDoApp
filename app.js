window.onload = () => 
{
	const form1 = document.querySelector('#addForm');
	let tasks = document.getElementById("tasks");
	let submit = document.getElementById("submit");
	let editTask = null;

	form1.addEventListener("submit", addTask);
	tasks.addEventListener("click", removeTask);
};

function addTask(e)
{
	e.preventDefault();

	if(submit.value != "Submit")
	{

		editTask.target.parentNode.childNodes[0].data = document.getElementById("task").value;

		submit.value = "Submit";
		document.getElementById("task").value = "";

		document.getElementById("lblsuccess").innerHTML = "Text edited successsfully";

		setTimeout(function()
		{
			document.getElementById("lblsuccess").style.display = "none";
		}, 3000);

		return false;
	}

	let newTask = document.getElementById("task").value;
	if(newTask.trim() == "" || newTask.trim() == null)
	{
		return false;
	}
	else
	{
		document.getElementById("task").value = "";
	}

	let lt = document.createElement("lt"); 
    lt.className = "list-group-task"; 
  
    let deleteButton = document.createElement("button"); 
  
    deleteButton.className = 
        "btn-danger btn btn-sm float-right delete"; 
  
    deleteButton.appendChild(document.createTextNode("Delete")); 
  
    let editButton = document.createElement("button"); 
  
    editButton.className = 
            "btn-success btn btn-sm float-right edit"; 
  
    editButton.appendChild(document.createTextNode("Edit")); 
  
    lt.appendChild(document.createTextNode(newTask)); 
    lt.appendChild(deleteButton); 
    lt.appendChild(editButton); 
  
    tasks.appendChild(lt); 
} 
  
function removeTask(e) { 
    e.preventDefault(); 
    if (e.target.classList.contains("delete"))
	{ 
		if (confirm("Are you Sure?")) { 
			let lt = e.target.parentNode; 
			tasks.removeChild(lt); 
			document.getElementById("lblsuccess").innerHTML 
                = "Text deleted successfully"; 
  
            document.getElementById("lblsuccess") 
                        .style.display = "block"; 
  
            setTimeout(function() { 
                document.getElementById("lblsuccess") 
                        .style.display = "none"; 
            }, 3000); 
        } 
    } 
    if (e.target.classList.contains("edit")) { 
        document.getElementById("task").value = 
            e.target.parentNode.childNodes[0].data; 
        submit.value = "EDIT"; 
        editTask = e; 
    } 
} 
  
function toggleButton(ref, btnID)
{ 
	document.getElementById(btnID).disabled = false; 
}