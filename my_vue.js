Vue.createApp({
            data(){
            return {
                counter: 20,
                items: [{ message: 'Dalada Maligaya' }, { message: 'Sinharaja' }, { message: 'Yala' }],
                selected: 'A',
    
                options: [
                    { text: 'Historical Places', value: 'A' },
                    { text: 'Beautiful places', value: 'B' },
                    { text: 'Pilgrimage', value: 'C' }
                ]
            };
        },
        mounted() {
            setInterval(() =>{
                this.counter++;
            }, 1000);
        
                    
    },
    methods: {
        clickEvent() {
            alert('clicked');
            if (this.items.some((arryValue) => arrayValue === 'Swimming')) {
                alert('Swimming alredy exists in the arry');
            } else {
                this.items.push('Swimming');
            }
        },
        say: function (message) {
            alert(message)
        }
    },

    
}).mount('#app'); 
 var example3=new Vue({
     el: '#example-3',
     methods: {
        say: function (message) {
            alert(message)
        }
     }
 })
 var form=new Vue({
     el: '#form',
     data: {
        
         selected: 'A',
    
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
 });
 var check = new Vue({
  el: '...',
  data: {
      checkedNames:['']
  }
})
Vue.component('testcomponent',{
   template : '<div><h1>This is coming from component</h1></div>'
});
var vm = new Vue({
   el: '#component_test'
});





