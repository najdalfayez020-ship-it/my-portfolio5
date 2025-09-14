let Tasker = {
    construct:function(){
        this.selectElements();
        this.bindEvents();
        this.scanList();
    },
    selectElements: function(){
        this.taskInput = document.getElementById("task-input");
        this.taskList =document.getElementById("lists");
        this.task = this.taskList.children;
        this.btn = document.getElementById("add-task");
        this.errorM = document.getElementById("error");
    },
    bulidTask: function(){
        let taskItem, taskcheck, taskBtn, taskValue, taskTrash;
        taskItem = document.createElement("li");
        taskItem.setAttribute("class","task");

        taskcheck = document.createElement("input");
        taskcheck.setAttribute("type","checkbox");

        taskValue = document.createTextNode(this.taskInput.value);

        taskBtn = document.createElement("button");

        taskTrash = document.createElement("i");
        taskTrash.setAttribute("class","fa fa-trash");
        
        taskBtn.appendChild(taskTrash);

        taskItem.appendChild(taskcheck);
        taskItem.appendChild(taskValue);
        taskItem.appendChild(taskBtn);
        this.taskList.appendChild(taskItem);
    },
    error: function(){
        this.errorM.style.display="block";
    },
    addTask:function(){
        let taskValue = this.taskInput.value;
        this.errorM.style.display = "none";
        if(taskValue === ""){
            this.error();
        }
        else{
            this.bulidTask();
            this.taskInput.value = "";
            this.scanList();
        }
    },
    enterKey: function(event){
        if(event.keyCode === 13 || event.which === 13){
            this.addTask();
        }
    },
    bindEvents: function(){
        this.btn.onclick = this.addTask.bind(this);
        this.taskInput.onkeypress = this.enterKey.bind(this);
    },
    scanList:function(){
        let taskItem,checkBox,deleteBtn;
        for(i =0;i<this.task.length ; i++){
            taskItem = this.task[i];

            checkBox = taskItem.getElementsByTagName("input")[0];
            deleteBtn = taskItem.getElementsByTagName("button")[0];

            checkBox.onclick = this.completeTask.bind(this,taskItem,checkBox);
            deleteBtn.onclick = this.deleteTask.bind(this,i);

        }
    },
    
    deleteTask:function(i){
        this.task[i].remove();
        this.scanList();
    },
    completeTask: function(taskItem,checkBox){
        if(checkBox.checked){
            taskItem.className = "task completed"
        }
        else{
            this.incompleteTask(taskItem);
        }
    },
    incompleteTask: function(taskItem){
        taskItem.className = "task";
    }
};
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

