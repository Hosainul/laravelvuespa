<template>
    <div class="container">
        <div class="row">
            <div class="col-10">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Create Category</h5>
                        <router-link :to="{name: 'category-list'}" class="btn btn-primary btn-sm">Category List</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createCategory">
                                    <div class="form-goup">
                                        <label for="">Category Name</label>

                                        <input v-model="categoryForm.name" type="text" class="form-control" name="name" placeholder="category name" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                                         <has-error :form="categoryForm" field="name"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-sm">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { Form } from 'vform'
export default {
    data(){
        return {
            categoryForm: new Form({
                name: '',
            }),
        }
    },
    methods: {
        createCategory(){
            this.categoryForm.post('/api/category').then(({ data }) => {
                 console.log(data)

                 this.$toast.success({
                    title:'Sucess',
                    message:'Category Created Successfully!'
})
                })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>