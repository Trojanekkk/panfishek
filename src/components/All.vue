<template>
    <div id="all">
        <p v-for="fc in flashcards" v-bind:key="fc.word">
            <b>{{ fc.word }}</b> <span class="stats" title="fishka's stats (correct / all)">(0/3)</span>
            <b-icon icon="x-circle" class="float-right" font-scale="0.75" shift-v="-8" title="delete this fishka"></b-icon>
            <br>
            <span class="translation">
                {{ fc.translation }}
                <b-icon icon="cloud-slash" class="float-right" font-scale="0.75" shift-v="-8" title="the fishka is not synchronized"></b-icon>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'All',
    props: ['flashcards'],
}
</script>

<style scoped>
p {
    font-size: 15px;
}
#all {
    font-size: 15px;
}
.stats {
    font-weight: 300;
    margin-left: .5rem;
}
.translation {
    color: lightslategray;
}
</style>
