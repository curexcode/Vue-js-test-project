<template>
  <div class="container">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header @toggle-add-task="showAddTask = !showAddTask" title="This Is Sparta!!!" 
    :showAddTask="showAddTask"/>
    
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {                  // Seems like this is the state equivalent
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods : {
    deleteTask(id){
      this.tasks = this.tasks.filter( (task) => task.id !== id)
    },
    addTask(task){
      console.log('Adding task');
      this.tasks = [...this.tasks, task];
      console.log(task);
    },
    toggleReminder(id){
      this.tasks = this.tasks.map( (task) => {
          if(task.id === id)
            return {...task, reminder: !task.reminder};
          else
            return task;
        }
      )
    }
  },
  created() {               // Lifecycle method
    this.tasks = [
      {
        id: 1,
        text: 'Docs Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'School Meeting',
        day: 'March 2st at 2:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 1st at 2:30pm',
        reminder: false,
      },
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

</style>
