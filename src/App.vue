<template>
  <section classs="home">
     
    <HelloWorld msg="DIRECTORYADS"/>
    <Featureads />
    <Icons/>
    <NewTrend />
    <OurBlog />
    <Footer />
  </section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Featureads from './components/Featureads.vue'
import Icons from './components/Icons.vue'
import NewTrend from './components/NewTrend.vue'
import  OurBlog from './components/OurBlog.vue'
import  Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
   HelloWorld,Featureads,Icons,NewTrend,OurBlog,Footer
  }
}
</script>

<style>
.home{
   position: relative;
         padding:0;
         margin: 0;
         width: 100%;
         height: 100%;
        
}
</style>
