//vue component must be define before initializing new Vue()
Vue.component('blog-post',{
    props:['postTitle'],
    template:'<h3>{{postTitle}}</h3>'
});

Vue.component('author',{
    props:['authorName'],
    template:'<h3>{{authorName}}</h3>'
});

Vue.component('category',{
    props:['catName'],
    template:'<h3>{{catName}}</h3>'
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
        author: 'Mark',
        category: 'science',
        keyword:'',
        searchResults: []
    },
    methods:{
        addTask: function(){
            let self = this;
            self.tasks.push(self.newTask);
            self.newTask = '';
            self.task = '';
        },
        capitalize : function(t){
            console.log(t);
            return t.toUpperCase();
        },
        submit : function(){
            alert('Key pressed');
        },
        search: function(){
            
            this.searchResults = [];
            _.filter(this.tasks,(item)=>{
                if(item.startsWith(this.keyword)){
                    this.searchResults.push(item);
                }
            });
            this.tasks = this.searchResults;
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

vm.task = 'Enter your task here';