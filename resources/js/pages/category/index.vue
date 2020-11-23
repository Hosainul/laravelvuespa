<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Product Categories</h5>
                        <router-link :to="{name: 'category-create'}" class="btn btn-primary">Create Category</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="category in categories" :key="category.id">
                                    <td>{{category.id}}</td>
                                    <td>{{category.name}}</td>
                                    <td>{{category.slug}}</td>
                                    <td>
                                        <router-link :to="{name: 'category-edit', params: {id: category.id}}" class="btn btn-primary btn-sm">Edit</router-link>
                                        <a @click.prevent="deleteCategory(category)" href="" class="btn btn-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                categories: []
            }
        },
        methods: {
            loadCategories(){
                axios.get('/api/category',).then(response => {
                    this.categories = response.data;     
                });
            },
            deleteCategory(category){
                axios.delete(`/api/category/${category.id}`).then(() => {
                    this.$toast.success({
                       title:'Deleted',
                        message:'Category Deleted Successfully!'
                    });
                });

                let index = this.categories.indexOf(category);
                this.categories.splice(index, 1);
            }

        },
        mounted() {
            this.loadCategories();
        }
    }
</script>
