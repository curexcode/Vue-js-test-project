<template>
    <div :key="task.id" v-for="task in tasks">
        <Task :task="task" />
        <!-- <h3>{{ task.text }}</h3> -->
    </div>
    
</template>


<script>

import Task from './Task';

export default{
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components: {
        Task,
    }
}

</script>
