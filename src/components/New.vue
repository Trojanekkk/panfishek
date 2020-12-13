<template>
    <div id="new">
        <p>Word:</p>
        <p>
            <b-form-input v-model="word" placeholder="Enter new"></b-form-input>
        </p>
        <p>Translation</p>
        <p>
            <b-form-input v-model="translation" placeholder="Enter translation"></b-form-input>
        </p>
        <p>
            <b-button-toolbar class="float-right">
                <b-button-group class="mr-1">
                    <b-button variant="outline-primary">Cancel</b-button>
                    <b-button variant="outline-primary">Add</b-button>
                </b-button-group>
            </b-button-toolbar>
        </p>
    </div>
</template>

<script>
export default {
    name: 'New',
    data () {
        return {
            word: '',
            translation: ''
        }
    }
}
</script>

<style scoped>
p {
    font-size: 17px;
}
</style>
