<template>
    <div class="sidebar">
       <div class="top">
           <div class="avatar">
               <span> <i class="fa fa-user icon"></i> </span>
           </div>
           <div class="info">
               <p class="name">Moses wise</p>
               <p class="status">Online</p>
           </div>
       </div>

       <div class="menu">
           <ul>
               <li> <router-link :to="{name: 'home' }"><i class="fa fa-home" icon></i> Accueil</router-link> </li>
                <li> <router-link :to="{name: 'clients' }"><i class="fa fa-box" icon></i>Clients</router-link> </li>
                <li> <router-link :to="{name: 'produit' }"><i class="fa fa-box" icon></i>Produit</router-link> </li>
                <li> <router-link :to="{name: 'vente' }"><i class="fa fa-store" icon></i>vente</router-link> </li>
                <li> <router-link :to="{name: 'relation' }"><i class="fa fa-chart-bar" icon></i>relation</router-link> </li>

           </ul>
       </div>
    </div>
</template>

<script>
export default {
   name: 'SideBarComponent',
}
</script>

<style lang="scss">
    .sidebar{
        .top {
          width: 100%;  
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 25px 5px;
          margin-top: 60px;

          .avatar{
              margin-right: 10px;
              span {
                  display: block;
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  background-color: #ccc;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 25px;
                  color:#666666;
                
              }
          }
          .info {
              p{
                   margin: 0px;
                   color: #fff;
              }
              .name{
                font-size: 14px;

              }

               .status{
                  font-size: 10px;
              }
          }
        }

        .menu{
            margin-top: 15px;
            padding: 10px 20px;

            ul li {
            margin: 15px 0;
            font-size: 18px;
            list-style: none;
            font-weight: 200px;
            a {
                color: #fff;
               text-decoration: none;
            }
        }

        }
    }
</style>