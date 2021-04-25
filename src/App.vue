<template>
  <div id="app">
    <SliderComponent />

    <!-- <PlaceHolderComponent /> -->
  </div>
</template>

<script>
  import SliderComponent from './components/SliderComponent.vue'
  // import PlaceHolderComponent from './components/PlaceHolderComponent.vue'
  export default {
  name: 'App',
  components: {
    SliderComponent,
    // PlaceHolderComponent
  }
}
</script>

<style>
  :root{
    --white_rgb: 255, 255, 255;
    --gray-13: #eeeeee;
    --gray-14: #dddddd;
    --gray-1_rgb: 51, 41, 39;  
  }
  /*--------------------*/

  /*Placeholder*/
  .title 
  {
    height: 28px;
    width: 100%;
    background-color: rgba(var(--white_rgb), 0.3);
    border-radius: .3rem;
    /*@include mixin.placeholder-loading();*/
  }

  .column 
  {
    height: 168px;
    width: 100%;
    background-color: rgba(var(--white_rgb), 0.3);
    border-radius: .3rem;
    /*@include mixin.placeholder-loading();*/
  }

  .placeholder-loading 
  {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(
      to right,
      var(--gray-13) 8%,
      var(--gray-14) 18%,
      var(--gray-13) 33%
    );
    background-size: 1000px 104px;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  /*Media Querys inicio*/
  /*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
  @media only screen and (min-width: 768px) and (max-width: 1200px) {}
  /*** VERSION TABLETS ***/
  @media only screen and (min-width: 768px) and (max-width: 992px)
  {}

  /*** VERSION CELULAR ***/
  @media only screen and (max-width: 767px)
  {
  }
  /*------------------------*/
</style>
