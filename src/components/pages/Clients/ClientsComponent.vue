<template>
   <div>
        <DashboardComponent>
            <div slot="slot-pages" class="content-pages">
               
               <header class="title_pages">
                    <p>Clients</p>
               </header>
               
               
            </div>
       
        </DashboardComponent>
   </div>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';

export default {
    name:'ClientsComponent',
    components: {
        DashboardComponent,
    }
}
</script>

<style  lang="scss" src="./style.scss" scoped />