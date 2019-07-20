<template>
  <section classs="trend">
     <div class="container"> 
       <div class="title">
          <h2>Trending Today</h2>
       </div>
       <div class="cards">
       <div class="listing">
              <a href="#" class="img img_1"></a>
              <div class="content">
                <span class="category">Real Estate</span>
                <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                <h3><a href="#">Own New House</a></h3>
                <address>Don St, Brooklyn, New York</address>
                <p class="mb">
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-secondary"></span>
                  <span class="review">(3 Reviews)</span>
                </p>
              </div>
        </div>
         <div class="listing">
              <a href="#" class="img img_2"></a>
              <div class="content">
                <span class="category">Real Estate</span>
                <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                <h3><a href="listings-single.html">Own New House</a></h3>
                <address>Don St, Brooklyn, New York</address>
                <p class="mb">
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-secondary"></span>
                  <span class="review">(3 Reviews)</span>
                </p>
              </div>
        </div>
          <div class="listing">
              <a href="#" class="img img_3"></a>
              <div class="content">
                <span class="category">Real Estate</span>
                <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                <h3><a href="listings-single.html">Own New House</a></h3>
                <address>Don St, Brooklyn, New York</address>
                <p class="mb">
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-secondary"></span>
                  <span class="review">(3 Reviews)</span>
                </p>
              </div>
        </div>
          <div class="listing">
              <a href="#" class="img img_4"></a>
              <div class="content">
                <span class="category">Real Estate</span>
                <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                <h3><a href="listings-single.html">Own New House</a></h3>
                <address>Don St, Brooklyn, New York</address>
                <p class="mb">
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-secondary"></span>
                  <span class="review">(3 Reviews)</span>
                </p>
              </div>
        </div>
          <div class="listing">
              <a href="#" class="img img_2"></a>
              <div class="content">
                <span class="category">Real Estate</span>
                <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                <h3><a href="listings-single.html">Own New House</a></h3>
                <address>Don St, Brooklyn, New York</address>
                <p class="mb">
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-secondary"></span>
                  <span class="review">(3 Reviews)</span>
                </p>
              </div>
        </div>
          <div class="listing">
              <a href="#" class="img img_1"></a>
              <div class="content">
                <span class="category">Real Estate</span>
                <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                <h3><a href="listings-single.html">Own New House</a></h3>
                <address>Don St, Brooklyn, New York</address>
                <p class="mb">
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-warning"></span>
                  <span class="icon-star text-secondary"></span>
                  <span class="review">(3 Reviews)</span>
                </p>
              </div>
        </div>
        </div>
      </div>
  </section>
</template>

<script>



export default {
  name: 'NewTrend',
}
</script>

<style scoped>
.trend{
   position:relative;
   width:100%;
}
.container{
  padding:2em;
}
.title{
   position:relative;
   width:100%;
    line-height:3;
    font-weight:bolder;
    font-size:1.2em;

}
.title:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 3px;
    background: #2f89fc;
   
}
.cards{
   position:relative;
   width:100%;
   display:grid;
   grid-template-columns: repeat(2,1fr);
   grid-gap:30px;
   margin-top:2em;
}
.listing{
   position:relative;
   display:grid;
   grid-template-columns: repeat(2,1fr);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    
    line-height:2;
    -webkit-box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border-radius: 7px;
    background: #fff;
}
.content{
   position:relative;
    -webkit-box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.1);
    padding:1em;
    border-radius: 7px;
    background: #fff;
}
.img{
  background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    margin-right: 10px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
     -webkit-box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.1);
    width:100%;
}
.img_1{
  background-image: url('images/img_1.jpg');
}
.img_2{
  background-image: url('images/img_2.jpg');
}
.img_3{
  background-image: url('images/img_3.jpg');
}
.img_4{
  background-image: url('images/img_4.jpg');
}
.category {
    width:50%;
    background: #e9ecef;
    border-radius: 30px;
    color: #000;
    text-align:center;
}
.bookmark {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    background: rgba(0, 0, 0, 0.03);
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
    font-size: 16px;
}
a {
    color: #2f89fc;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;

}
.text-warning {
    color: #f89d13;
}
.text-secondary {
    color: #6c757d;
}
.content .category , a, h3 , address{
  display:block;
}
.bookmark{
   display:inline-block;
}
.review{
   padding-left:0.5em;
}

@media only screen and (min-width : 320px) and (max-width : 759px) {
  .cards{
   grid-template-columns: 1fr;
  }
.listing{
   display:block;
   
  }
  .img{
      height: 250px;
    margin-right: 0;
    border-top-right-radius: 7px;
    border-bottom-left-radius: 0px;
  }
.category {
    
    color: #000;
    text-align:center;
}
.title{
   font-size:1em;
   line-height:2;
}

}
@media only screen and (min-width : 760px) and (max-width : 950px) {
  .cards{
   grid-template-columns: 1fr;
  }
}
</style>
