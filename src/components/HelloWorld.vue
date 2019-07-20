<template>
  <section class="landing_page">
   <div class="container">
     <div class="brand">
       <h1>{{msg}}</h1>
        <Slider :width="300" format="push" direction="right" :opacity="1"  :links="[{'id': 1, 'text': 'Home', 'url': 'https://github.com'}, {'id': 2, 'text': 'About us', 'url': ''},{'id': 3, 'text': 'Contact us', 'url': ''},{'id': 4, 'text': 'Blog', 'url': ''}]" />
       </div>
       <div class="info">
       <div class="label">
         <h2>Welcome To DirectoryAds</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
       </div>
       <div class="booking">
         <form>
           <input type="text" placeholder="Whar are you looking for ?"> 
            <input type="text" placeholder="Location"> 
             <input type="text" placeholder="Whar are you looking for ?"> 
             <button>Submit</button>
         </form>
       </div>
      </div> 
      </div> 
  </section>
</template>

<script>
import Slider from '@jeremyhamm/vue-slider'

export default {
  name: 'HelloWorld',
  components: {
   Slider
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.landing_page{
   position:relative;
   width:100%;
   height:100vh;
   background-image: url(images/hero_2.jpg);
   background-position: 50% -25px;
   background-size:cover;
   background-repeat: no-repeat;
   background-attachment: fixed;
   
}
.container{
   position:relative;
  
  padding:2em;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.2);
}
.brand{
  display:grid;
  grid-template-columns: 1fr 2fr;
}
h1{
  font-weight:bolder;
  color:#fff;
}
ul{
  list-style:none;
  display:grid;
  grid-template-columns: repeat(4,1fr);

}
ul li a{
    text-decoration:none;
}
.info{
  position:relative;
  width:100%;
  padding:2em;
}
.label{
  color:#fff;
  margin-bottom:2em;
  text-align:center;

}
h2{
  font-size:3em;
}
p{
  font-size:1.2em;
}
.booking {
   text-align:center;
   width:90%;
   margin:auto;
}
.booking form{
  background-color:rgba(255, 255, 255, 0.8);
  padding:1.2em;
   border-radius: 5px;

}
.booking  form input{
   margin:0.5em;
   padding:1em 4em;
   padding-left:0.5em;
   outline:none;
   border:none;
   border-radius: 5px;
}
.booking  form button{
   padding:1.1em 3em;
   outline:none;
   border:none;
   border-radius: 9px;
   background-color:#2f89fc;
   color:#fff;
   font-size:0.9em;
   font-weight:bolder;
}

@media only screen and (min-width : 320px) and (max-width : 750px) {
.label h2{
     font-size:1.5em;
    }
    p{
      font-size:0.9em;
    }
   
}
@media only screen and (min-width : 320px) and (max-width : 1200px) {

.booking{
  width:100%;
}
.booking form input{
  display:block;
  width:100%;
  padding:1.5em 0.5em;
}
.booking form button{
  width:100%;
  padding:1.5em 0.7iem;
}

}
@media only screen and (min-width : 760px){
  .info{
    top:28%;
  }
}

</style>
