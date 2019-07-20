<template>
  <section classs="blog">
   <div class="container">     
     <div class="title">
       <h2>Our Blog</h2>
       <p>Lorem Ipsum Dolor Sit Amet</p>
     </div>
     <div class="cards">
      <div class="list_card">
            <div>
              <img src="images/img_1.jpg" alt="Image">
              <h2 class="regular"><a href="#" class="text-black">Many People Selling Online</a></h2>
              <div class="meta">by Mark Spiker<span class="mx-1">•</span> Jan 18, 2019 <span>•</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
            </div> 
          </div>
           <div class="list_card">
           <div>
              <img src="images/img_2.jpg" alt="Image">
              <h2 class="regular"><a href="#" class="text-black">Many People Selling Online</a></h2>
              <div class="meta">by Mark Spiker<span class="mx-1">•</span> Jan 18, 2019 <span>•</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
            </div> 
          </div>
           <div class="list_card">
            <div>
              <img src="images/img_3.jpg" alt="Image">
              <h2 class="regular"><a href="#" class="text-black">Many People Selling Online</a></h2>
              <div class="meta">by Mark Spiker<span class="mx-1">•</span> Jan 18, 2019 <span >•</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
            </div> 
          </div>
     </div>
   </div> 
  </section>
</template>

<script>
export default {
  name: 'OurBlog',
  
}
</script>

<style>
a{
    text-decoration:none;
}
.blog{
   position: relative;
   width: 100%;
}
.container{
   padding:2em;
}
.title{
    position:relative;
    margin-top:2em;
  margin-bottom:2em;
  line-height:2;
  text-align:center;
  width:100%;
}
.title:after {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
.title:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 3px;
    background: #2f89fc;
}
.title h2{
  color:#2f89fc;
  font-weight:bolder;
  font-size:2em;
}
p{
  color:rgba(0, 0, 0, 0.5);
  padding-bottom:0.35em;
}
.cards{
   display:grid;
   grid-template-columns: repeat(3,1fr);  
   grid-gap:20px;
   line-height:1.8em; 
}

img{
  width:100%;
  border-radius:5px;
  margin-bottom:1em;  
}
.cards h2 a{
    color:#4d4d4d;
    padding-top:1em;
}
.cards p{
  padding-top:1em;
}
.meta span {
   padding-left:0.8em;
   padding-right:0.8em;
   color:#b3b3b3;
}
.meta  a{
   color:#2f89fc;
}
@media only screen and (min-width : 320px) and (max-width : 759px) {
  .cards{
   grid-template-columns: 1fr;
  }
.cards h2 a{
   font-size:0.9em;
 }
.meta span {
  padding-left:0.5em;
  padding-right:0.5em;

 }
}
@media only screen and (min-width : 760px) and (max-width : 950px) {
  .cards{
   grid-template-columns: repeat(2,1fr);
  }
}
</style>
