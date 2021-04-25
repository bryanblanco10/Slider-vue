<template>
  <div class="card card__product h-100">
    <img alt="producto" class="card-img-top p-1" src="@/assets/product.jpg" loading="lazy"
    >
    <div class="card-body card__body">
        <h6 class="card-title text-center title__product">
          {{product.name}}
        </h6>
        <p class="card-text description__product mb-2">
           {{product.description}}
        </p>
        <div class="preci__product">
            <span 
              class="mr-2 price"
            >
              ${{product.price}}
            </span>
        </div>
        <div class="btns__action">
          <button 
            class="btn btn-block text-center"
          >
            Agregar
          </button>
        </div>
    </div>
    <!-- <div class="card-footer card__footer--product">
        
    </div> -->
  </div>
</template>
<script>
  export default{
    name: 'ProductComponent',
    props:['product'],
    data(){
      return{}
    },
    computed:{
    },
    methods:{
    },
  };
</script>