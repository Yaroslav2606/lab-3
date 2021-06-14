<template>
  <div class="culture">
    <div>
      <form>
        <table>
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
        <tr>
          <td rowspan="3" class="first"><input type="text" v-model="nameKitchen" placeholder="name"></td>
          <td><input type="text" v-model="saladName" placeholder="name"></td>
          <td><input type="text" v-model="Snack" placeholder="name"></td>
          <td><input type="text" v-model="firstCourse" placeholder="name"></td>
          <td><input type="text" v-model="secondCourse" placeholder="name"></td>
          <td><input type="text" v-model="Dessert" placeholder="name"></td>
        </tr>
        </table>
        <button v-on:click="onSubmit" type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Culture",
   data(){
        return{
            nameKitchen:'',
            saladName:'',
            Snack:'',
            firstCourse:'',
            secondCourse:'',
            Dessert:''
        }
    },
   methods:{
        onSubmit(){
            if(this.nameKitchen.trim()){
                console.log(this.title)
                const newMenu = {
                    nameKitchen:this.nameKitchen,
                    saladName:this.saladName,
                    Snack:this.Snack,
                    firstCourse:this.firstCourse,
                    secondCourse:this.secondCourse,
                    Dessert:this.Dessert
                }
                console.log(newMenu)
                 fetch("http://localhost:4000/app/menu",{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body:JSON.stringify(newMenu)
                    })
                    .then(res=>{
                            res.json()
                        }
                    )
                  this.nameKitchen='';
                  this.saladName='';
                  this.Snack='';
                  this.firstCourse='';
                  this.secondCourse='';
                  this.Dessert=''
            }
        }
    }
};
</script>

<style>
table {
  border-collapse: collapse;
  line-height: 1.1;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  background: radial-gradient(farthest-corner at 50% 50%, white, #DCECF8);
  color: #0C213B; }
th {
  padding: 10px;
  border: 1px solid #A9E2CC; }

td {
  font-size: 0.8em;
  padding: 5px 7px;
  border: 1px solid #A9E2CC; }
input{
  width: 60px;
}
</style>
