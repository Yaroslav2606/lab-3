<template>
  <div class="Home">
    <div >
      <caption>Меню ресторана "Ромашка"</caption> 
      <table class="table table-striped">
        <thead>
          <tr>
              <th rowspan="2" class="first">Кухня</th>
              <th colspan="2">Холодные блюда</th>
              <th colspan="2">Горячие блюда</th>
              <th rowspan="2">Десерты</th>
            </tr>
            <tr>
              <td class="first">Салаты</td>
              <td class="first">Закуски</td>
              <td class="first">Первые блюда</td>
              <td class="first">Вторые блюда</td>
            </tr>      
        </thead>
        <tbody>
          <Loader v-if="loading"/>
          <tr v-for="getMenu in menu" :key="getMenu.nameKitchen">
              <th scope="row" class="first">{{getMenu.nameKitchen}}</th>
              <th>{{getMenu.saladName}}</th>
              <th>{{getMenu.Snack}}</th>
              <th>{{getMenu.firstCourse}}</th>
              <th>{{getMenu.secondCourse}}</th>
              <th>{{getMenu.Dessert}}</th>
              <h6 v-on:click="Delete(getMenu._id)"> &#10006;</h6>
          </tr>
        </tbody>
      </table>
    </div>
     
  </div>
</template>

<script>
import Loader from './Loader/Loader'
export default {
  name: "Home",
  data(){
        return {
            menu:[],
            loading:true,
        }
  },
  mounted(){
      fetch('http://localhost:4000/app/getMenu')
      .then(response => response.json())
      .then(json=>{
          this.menu=json.menu
          console.log(json)
          this.loading = false
      })
      
  },
  components: {
   Loader,
  },
  methods:{
    addMenu(newMenu){
      this.menu.push(newMenu)
    },
    removeBlog(_id){
      this.blogs = this.blogs.filter(t=>t._id !==_id)
    },
    Delete(_id){
      fetch("http://localhost:4000/app/deleteMenu/"+_id, {
                method: 'DELETE'
            }).then(() => {
                console.log('removed');
            }).catch(err => {
                console.error(err)
            });
      this.menu = this.menu.filter(t=>t._id !==_id)
    }
  }
};
</script>

<style>
body {
  margin: 0;
  background: #F4F1F8; }
h6:hover{
  cursor: pointer;
  color: aqua;
}
table {
  border-collapse: collapse;
  line-height: 1.1;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  background: radial-gradient(farthest-corner at 50% 50%, white, #DCECF8);
  color: #0C213B; }

caption {
  font-family: annabelle, cursive;
  font-weight: bold;
  font-size: 2em;
  display: flex;
  padding: 10px;
  color: #F3CD26;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3); }
  caption:before, caption:after {
    content: "\274B";
    color: #A9E2CC;
    margin: 0 10px; }

th {
  padding: 10px;
  border: 1px solid #d5ebe3; 
  display:table-cell;
  }
  

td {
  font-size: 0.8em;
  padding: 5px 7px;
  border: 1px solid #A9E2CC; }

.first {
  font-size: 1em;
  font-weight: bold;
  text-align: center; }

</style>
