<template>
  <section classs="catougary">
    <div class="container">
      <div class="title">
       <h2>Popular Categories</h2>
       <p>Lorem Ipsum Dolor Sit Amet</p>
       </div>
        <div class="main_icon">
          <div class="icons">
              <a href="#">
                 <span class="icon"><span class="flaticon-car"></span></span>
                <span class="caption">Cars &amp; Vehicles</span>
                 <span class="number">7,398</span>
              </a>
          </div>
           <div class="icons">
              <a href="#">
                 <span class="icon"><span class="flaticon-closet"></span></span>
                 <span class="caption">Furniture</span>
                 <span class="number">3,398</span>
              </a>
          </div>
           <div class="icons">
              <a href="#">
                 <span class="icon"><span class="flaticon-home"></span></span>
                 <span class="caption">Real Estate</span>
                 <span class="number">1,398</span>
              </a>
          </div>
           <div class="icons">
              <a href="#">
                <span class="icon"><span class="flaticon-open-book"></span></span>
                 <span class="caption">Books &amp; Magazines</span>
                 <span class="number">4,398</span>
              </a>
          </div>
           <div class="icons">
              <a href="#">
                 <span class="icon"><span class="flaticon-tv"></span></span>
                <span class="caption">Electronics</span>
                 <span class="number">2,398</span>
              </a>
          </div>
           <div class="icons">
              <a href="#">
                 <span class="icon"><span class="flaticon-pizza"></span></span>
                 <span class="caption">Other</span>
                 <span class="number">5,398</span>
              </a>
          </div>
    </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Icons',
 
}
</script>

<style scoped>
.catougary{
	 width:100%;
}
.container{
	padding:2em;
   text-align:center;
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
h2{
	color:#2f89fc;
	font-weight:bolder;
	font-size:2em;
}
p{
	color:rgba(0, 0, 0, 0.5);
	padding-bottom:0.35em;
}
.main_icon{ 
	display:grid;
   grid-template-columns: repeat(6,1fr);
}
.icons{
   text-align:center;
   margin:0.2em;
   padding:1em;
   padding-top:1.5em;
   padding-bottom:3em;
   border-radius:10px;
    -webkit-transition: .1s all ease;
    -o-transition: .1s all ease;
    transition: .1s all ease;
}
a{
	text-decoration:none;
}
.main_icon span {
	display:block;
}
.icons a .icon{
	font-size:3.5em;
	    color: #2f89fc;

}
.icons a .caption {
    color: #666666;
    line-height:3;
    -webkit-transition: .1s all ease;
    -o-transition: .1s all ease;
    transition: .1s all ease;
    text-transform: none;
    letter-spacing: normal;
    font-size: 18px;
    font-weight: normal;
}
.icons a .number{
    padding: 2px 20px;
    border-radius: 30px;
    display: inline-block;
    background: #e9ecef;
    color: #000;
    font-size: 14px;
    -webkit-transition: .1s all ease;
    -o-transition: .1s all ease;
    transition: .1s all ease;

}
.icons:hover {
	background:#2f89fc;
}
.icons:hover .caption{
	color:#fff;
}
.icons:hover .icon{
	color:#fff;
}
@media only screen and (min-width : 320px) and (max-width : 750px) {
   .main_icon{ 	
   display:block;
  } 
h2{
   font-size:1.3em;
   
  } 
}
@media only screen and (min-width : 751px) and (max-width : 1200px) {
 .main_icon{ 	
   grid-template-columns: repeat(2,1fr);
  } 
}

</style>
