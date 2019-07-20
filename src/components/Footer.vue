<template>
  <footer>
    
  <ul>
    <h3>About me</h3>
    <li><p>
      Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
      </p></li>
  </ul>
   <ul>
    <h3>Important Link</h3>
    <li>WHMCS-bridge</li>
    <li>Search Domain</li>
    <li>My Account</li>
    <li>Shopping Cart</li>
     <li>Our Shop</li>
  </ul>
   <ul>
    <h3>Contact us</h3>
     <li>Address :Hath of it fly signs </li>
    <li>Phone : +2 36 265 (8060)</li>
    <li>Privacy Policy</li>
    <li>Email : info@colorlib.com</li>
  </ul>
   <ul class="last">
    <h3>Newsletter</h3>
    <li><p>Heaven fruitful doesn't over lesser in days. Appear creeping seas</p></li>
    <li>
    <input type="text" class="form-control" placeholder="Email Address">  
    <button class="btn" type="button"><i class="fas fa-paper-plane"></i></button>
      </li>
  </ul>


    
  </footer>
</template>

<script>



export default {
  name: 'app',
 
}
</script>

<style scoped>
footer{
  width:100%;
  height:auto;
     background-color: #111;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  padding:2em;
  color:#fff;
}
footer ul li{
  list-style:none;
  font-size:1em;
  font-family:sans;
  cursor:pointer;
  line-height:30px;
  transition:0.5s;
      color: #555555;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
footer ul li p{
  font-size:0.82em;
  color:#999999;
}
footer ul li a{
  color: #999999;
}
footer ul li:hover{
  color:#fff;
}
input {
    height: 40px;
    border: none;
    width: 67% ;
    font-weight: 400;
    background: #fff;
    padding-left: 20px;
    border-radius: 0;
    font-size: 13px;
    padding: 10px 20px;
    color: #999999;
    border: 0px solid transparent;
    font-family: "Lora", serif;
    outline: none;
}
footer .btn {
    margin-top: 23px;
    background-color: #ff6426;
    color: #fff;
    width: 49px;
    border-radius: 0px;
    height: 40px;
    outline: none;
    border: 0;
}
.fa-paper-plane:before {
    content: "\f1d8";
    font-family: FontAwesome;
}
@media only screen and (min-width : 320px) and (max-width : 695px){
  footer p{
 width: 100%;
}
footer .last{
  width:100%; 
}
}
@media only screen and (min-width : 320px) and (max-width : 980px) {
  footer{
 display: block;
 padding-left:1em;
}
footer ul{
   width:100%; 
}
footer p{
 width: 70%;
}
footer .last{
  width:80%; 
}
}
</style>
