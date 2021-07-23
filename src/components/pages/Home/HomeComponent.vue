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
                             <CardsComponent :type="'Clientes'" :percentage="'12%'"  :icon="'fa-users'"  :qtd="clients.length"  />
                         </div>
                         <div class="col-12 col-md-3">
                            <CardsComponent :type="'Produit'" :percentage="'82%'"  :icon="'fa-box'"  :qtd="products.length"  />

                         </div>
                         <div class="col-12 col-md-3">
                                <CardsComponent :type="'Vente'" :percentage="'72%'"  :icon="'fa-store'"  :qtd="products.length"  />
                         </div>
                         <div class="col-12 col-md-3">
                            <CardsComponent :type="'Relation'" :percentage="'92%'"  :icon="'fa-chart-bar'"  :qtd="products.length"   />
                         </div>
                     </div>   
                 </div>
                 
                 <div class="mt-5">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <ListsComponent :data= "clients"  description="Clients" :columns ="['Nom','Email']"/> 
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
            clients: [],
            products: [],
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
    
    async getData(){
        try{
            let response = await axios.get('/');
                this.clients = response.data.clients;
                this.products = response.data.products;
            }catch(error){
            console.error("Erreur détectée :" + error.response.status);
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