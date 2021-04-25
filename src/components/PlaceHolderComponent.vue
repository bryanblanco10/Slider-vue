<template>
	<div class="container mb-3 pt-2">
		<div class="row" v-for="(item, index) in titles" :key="index">
			<div class="col-12">
				<h5 class="title mt-2 mb-2" :class="{'placeholder-loading':isActive}"></h5>
			</div>
			<div class="col-12">
				<div class="row mt-2 mb-2">
					<div class="col-lg-2" v-for="(item, index) in columns" :key="index">
						<div class="column placeholder-loading " :class="{'placeholder-loading':isActive}"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'PlaceHolderComponent',
		data(){
			return{
				titles:[
					{
						title: ''
					},
					{
						title: ''
					},
					{
						title: ''
					}
				],
				columns:[
					{
						column: ''
					},
					{
						column: ''
					},
					{
						column: ''
					},
					{
						column: ''
					},
					{
						column: ''
					},
					{
						column: ''
					}
				],
				isActive: true
			}
		}
	}
</script>