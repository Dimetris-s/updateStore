<template>
    <div class="blog">
        <input id="m6" type="file" multiple="multiple">
        <input class="form-control" type="text" v-model="blog.name">
        <textarea name="editable" id="editable" cols="30" rows="10"></textarea>
        <button @click="setBlog()">Добавить Акцию</button>
        
    </div>
</template>

<script>
module.exports = {
    data(){
        return{
            editor:'',
            blog:{
                img:'',
                description:'',
                name:'',
            },
            listBlog:[],
        }
    },
    methods:{
        setBlog(){
            this.blog.description = this.editor.value;
            this.blog.img = document.querySelector('#m6').files;
            if(this.listBlog.length === 0){
                this.listBlog[0] = this.blog;
                this.$store.dispatch('setBlog',this.listBlog)
                
            }else{
                this.listBlog.push(this.blog)
                this.$store.dispatch('setBlog',this.listBlog)
            }
            this.blog = {
                img:'',
                description:'',
                name:'',
            }
            this.editor.value = '<p>Ведите описание</p>';
        }
    },
    created(){
        this.listBlog = this.$store.getters['getPromotions'].blog
    },
    mounted(){ 
        let st = document.querySelector('#editable')
        this.editor = new Jodit(st);
        this.editor.value = '<p>Ведите описание</p>';
    },
}
</script>