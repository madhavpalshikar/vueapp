//vue component must be define before initializing new Vue()
Vue.component('blog-post',{
    props:['postTitle'],
    template:'<h3>{{postTitle}}</h3>'
});
const vm = new Vue({
    el:'#app',
    beforeCreate : function(){
        console.log('beforeCreate');
    }, 
    created : function(){
        console.log('created');
    }, 
    beforeMount : function(){
        console.log('beforeMount');
    }, 
    mounted : function(){
        console.log('mounted');
    }, 
    beforeDestroy : function(){
        console.log('beforeDestroy');
    }, 
    destroyed : function(){
        console.log('destroyed');
    }, 
    beforeUpdate : function(){
        console.log('beforeUpdate');
    }, 
    updated : function(){
        console.log('updated');
    }, 
    activated : function(){
        console.log('activated');
    }, 
    deactivated : function(){
        console.log('deactivated');
    }, 
    data:{
        task:'',
        newTask:'',
        once:'This will be set only once', // v-once can be set only once
        tasks:[],
        title: 'v-bind:title.sync two way binding for props',
        show: true
    },
    methods:{
        addTask: function(){
            let self = this;
            self.tasks.push(self.newTask);
            self.newTask = '';
        },
        capitalize : function(t){
            console.log(t);
            return t.toUpperCase();
        },
        submit : function(){
            alert('Key pressed');
        }
     },
    computed:{
        //computed properties: Computed properties are very valuable for manipulating data that already exists. 
        getOnce: function(){ return 'New '+ this.once}
    },
    watch:{
        task: function(val){ this.newTask = 'Task: ' + val; }
    }
});

