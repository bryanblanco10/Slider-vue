<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-primary bg-white shadow">
      <a class="navbar-brand" href="#">Slider</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav> -->
    <div class="container container__business mt-4">
      <div class="menu__lateral--business">
      </div>
      <div class="conten__business">
        <div class="container">
          <div class="wrapper row">
            <div class="row slide-carousel" id="sectionSlide" ref="sectionSlide">
              <div 
                class="col-lg-3 col-md-3 col-4" 
                id="itemSlide"
                ref="itemSlide"
                v-for="(product, index) in products"
                :key="index"
              >
                <ProductComponent :product="product" />
              </div>
            </div>
            <div>
              <div class="previous-button" @click="previous()" v-if="arrowLeft">
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="next-button" @click="next()" v-if="arrowRight">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductComponent from './CardProduct.vue'
  import 'gsap/ScrollToPlugin.js';
  export default{
    name:'SliderComponent',
    data(){
      return{
        arrowLeft: false,
        arrowRight: false,
        products:[
          {
            id: 1,
            name: 'Camisa1',
            description: 'Lorem ipsum, dolor.',
            price: 10000
          },
          {
            id: 2,
            name: 'Camisa2',
            description: 'Lorem ipsum, dolor.',
            price: 10000
          },
          {
            id: 3,
            name: 'Camisa3',
            description: 'Lorem ipsum, dolor.',
            price: 10000
          },
          {
            id: 4,
            name: 'Camisa4',
            description: 'Lorem ipsum, dolor.',
            price: 10000
          },
          {
            id: 5,
            name: 'Camisa5',
            description: 'Lorem ipsum, dolor.',
            price: 10000
          },
          {
            id: 6,
            name: 'Camisa6',
            description: 'Lorem ipsum, dolor.',
            price: 10000
          }
        ],
        content: '',
        item: ''
      }
    },
    components:{
      ProductComponent
    },
    methods:{
      showLeft(){
        this.arrowLeft = this.content?.scrollLeft > 0
      },
      showRight(){
        this.arrowRight = this.content?.scrollLeft + this.content?.clientWidth < this.content?.scrollWidth
      },
      detectChanges(){
        this.showLeft();
        this.showRight();
      },
      scrollTo(position, duration){
        import('gsap').then((gsap) => {
          gsap.TweenMax.to(this.content, duration, {
          scrollTo: { x: position },
          ease: gsap.Linear.easeNone,
          onComplete: () => this.detectChanges(),
          });
       });
      },
      previous(){
        this.scrollTo(
          this.content.scrollLeft -
          this.item.offsetWidth,
          0.4
        );
      },
      next(){
        this.scrollTo(
          this.content.scrollLeft +
          this.item.offsetWidth,
          0.4
        );
      }
    },
    mounted(){
      this.content = document.getElementById('sectionSlide')
      this.item = document.getElementById('itemSlide')
      this.detectChanges()
    }
  }
</script>


<style>
  .container__business
  {
    display: flex;
    justify-content: space-between;
  }

  .menu__lateral--business
  {
    position: -webkit-sticky;
    position: sticky;
    z-index: 2;
    top: 85px;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0.5rem;
    /*padding: 5px 10px 30px 10px;*/
    max-height: 600px;
    height: 600px;
    width: 20%;
  }

  .conten__business
  {
    width: 77%;
  }

  .card__product
  {
    background-color: #fff;
    border-radius: 12px;
    border: none;
    /*box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);*/
    box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    -moz-box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    -webkit-box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
  }

  /*------------------------------*/
  .card__body
  {
    padding-left: .8rem;
    padding-right: .8rem;
    padding-top: 0.5rem;
    padding-bottom: 0rem;
    height: auto;
  }

  .title__product
  {
    position: relative;
    top: -3px;
    font-size: 14px;
    color: #332927;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }

  .img__product
  {
    cursor: pointer;
  }

  .description__product
  {
    position: relative;
    top:-8px;
    font-size: 12px;
    color: #858585;
    font-family: 'Roboto', sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 20px;
  }

  .preci__product
  {
    position: relative;
    top:-12px;
    display: flex;
    justify-content: center;
  }

  .price
  {
    color: #332927;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
  }

  .card__footer--product
  {
    background: #fff;
    border: none;
    height: 5rem;
    border-radius: 0.6rem;
    /*position: relative;*/
    /*top: -15px;*/
  }

  .btns__action button
  {
    background-color: #ff6700;
    position: relative;
    top: -5px;
    color: #fff;
    font-size: 14px;
    border-radius: 6px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  .btns__action button:hover
  {
    color: #fff;
  }
  /*slider*/
  /*.container {
    position: relative;
  }*/

  .wrapper 
  {
    position: relative;
    overflow-x: auto;
    display: block;
    white-space: nowrap;
  }

  .wrapper  
  {
    display: inline-block;
    flex-wrap: nowrap;
  }

  .wrapper  .slide-carousel 
  {
    width: 100%;
    padding: 0px 15px 15px 15px;
    white-space: nowrap;
    overflow-x: hidden;
    flex-wrap: nowrap;
  }

  .wrapper  .slide-carousel > div
  {
    padding-right: 0;
  }

  .wrapper  .slide-carousel::-webkit-scrollbar {
    background: transparent;
    width: 0px;
  }

  .wrapper  .slide-carousel::-webkit-scrollbar-thumb {
    background: transparent;
    width: 0px;
  }

  .next-button,
  .previous-button 
  {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    top: 35%;
    font-size: 26px;
    border-radius: 50%;
    background: #fff;
    height: 40px;
    width: 40px;
  }

  .previous-button {
    box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    -moz-box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    -webkit-box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    transform: rotate(-90deg);
    left: -1.5%;
  }

  .previous-button svg {
    display: inline-block;
    transform: rotate(180deg);
  }

  .next-button {
    box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    -moz-box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    -webkit-box-shadow: 0 6px 10px 0 rgba(var(--gray-1_rgb),.16);
    transform: rotate(-90deg);
    right: 0.5%;
  }

  /*--------------------*/
  /*Media Querys inicio*/
  /*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .menu__lateral--business
    {
      display: none;
    }

    .conten__business
    {
      width: 100%;
    }
  }
  /*** VERSION TABLETS ***/
  @media only screen and (min-width: 768px) and (max-width: 992px)
  {
    .menu__lateral--business
    {
      display: none;
    }

    .conten__business
    {
      width: 100%;
    }

    .wrapper  .slide-carousel 
    {
      overflow-x: auto;
    }

    .next-button,
    .previous-button 
    {
      display: none;
    }
  }
  /*** VERSION CELULAR ***/
  @media only screen and (max-width: 767px)
  {
    .menu__lateral--business
    {
      display: none;
    }

    .conten__business
    {
      width: 100%;
    }

    .wrapper  .slide-carousel 
    {
      overflow-x: auto;
    }

    .next-button,
    .previous-button 
    {
      display: none;
    }

    .card__product
    {
      width: auto;
    }
  }
  /*------------------------*/
</style>