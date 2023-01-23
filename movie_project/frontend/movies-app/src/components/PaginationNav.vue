<template>
    <div>

        <button @click="setListPage({ $event })" v-for="(page, index) in getPagesNumber" :key="index" :value="index+1" >{{ index+1 }}</button>
    </div>
</template>
<script>
export default {
    name: "PaginationNav",
    computed: {
        getPagesNumber(){
            return this.$store.state.movies.count / this.$store.state.movies.results.length
        }
    },
    methods:{
        setListPage: function(e){
            console.log(e.target.value)
        }
    },
    mounted(){
        console.log('state', this.$store.state.movies.count / this.$store.state.movies.results.length)
    }
}

</script>