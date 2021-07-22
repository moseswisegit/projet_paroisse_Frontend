<template>
   <div>
        <DashboardComponent>
            <div slot="slot-pages" class="content-pages">
               <header class="title_pages">
                    <p>Accueil</p>
               </header>
               
                 <div>
                     <div class="row">
                         <div class="col-12 col-md-3">
                             <CardsComponent :type="'Clientes'" :percentage="'12%'"  :icon="'fa-users'"  :qtd="'7590'"  />
                         </div>
                         <div class="col-12 col-md-3">
                            <CardsComponent :type="'Produit'" :percentage="'82%'"  :icon="'fa-box'"  :qtd="'1390'"  />

                         </div>
                         <div class="col-12 col-md-3">
                                <CardsComponent :type="'Vente'" :percentage="'72%'"  :icon="'fa-store'"  :qtd="'4190'"  />
                         </div>
                         <div class="col-12 col-md-3">
                            <CardsComponent :type="'Relation'" :percentage="'92%'"  :icon="'fa-chart-bar'"  :qtd="'1090'"  />
                         </div>
                     </div>   
                 </div>
                 
                 <div class="mt-5">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <ListsComponent :data="clients" description="Clients" :columns ="['Nom','E-mail','telephone']" />
                            </div>
                             <div class="col-12 col-md-6">
                                <ListsComponent :data= "products"  description="Products" :columns ="['Nom','value']"/>
                            </div>
                        </div>
                 </div>
            </div>
    
        </DashboardComponent>
          
   </div>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';
import CardsComponent from '../../cards/CardsComponent';
import ListsComponent from '../../cards/ListsComponent';
const axios = require('axios');
export default {
    name : 'HomeComponent',
    data() {
        return {
            clients:[],
            products:[],
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
       async getUsers(){
            let response = await axios.get('/');
            if(response.status == 200){
             this.clients = response.data.clients;
              this.products = response.data.products;
            }else{
                console.error("il y a erreur");
            }
            


            }
    },
    components: {
        DashboardComponent,
        CardsComponent,
        ListsComponent,
        
    }
}
</script>
<style  lang="scss" src="./style.scss" scoped />