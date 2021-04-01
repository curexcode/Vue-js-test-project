<template>
    
    <AddTask v-show="showAddTask" @add-task="addTask"/>
    <Tasks 
        :tasks="tasks" 
        @delete-task="deleteTask" 
        @toggle-reminder="toggleReminder"/>
</template>

<script>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';

export default {
  name: 'Home',
  props:{
      showAddTask : Boolean
  },
  components: {
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
    async deleteTask(id){
      // const data = await fetchTask(id);

       const res = await fetch(`api/tasks/${id}`, {
       method: 'DELETE'})

       console.log('Deletion done!');
       console.log(await res.json());
       if(res.status === 200)
          this.tasks = this.tasks.filter( (task) => task.id !== id);
       else
          alert('Error deleting task');
        
    },
    async addTask(task){

      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task) 
      })

      const data = await res.json();
      this.tasks = [...this.tasks, data];
      console.log(task);
    },

    async toggleReminder(id){
      const taskToToggle = await this.fetchTask(id);

      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask) 
      })
      
      const data = await res.json();

      this.tasks = this.tasks.map( (task) => {
          if(task.id === id)
            return {...task, reminder: data.reminder};
          else
            return task;
        }
      )
    },
    
    async fetchTasks(){
        const res = await fetch('api/tasks');
        const data = await res.json()

        return data
    },

    async fetchTask(id){
        const res = await fetch(`api/tasks/${id}`);
        const data = await res.json()

        return data
    }

  },
  async created() {               // Lifecycle method
    this.tasks =  await this.fetchTasks();
  }
}
</script>
