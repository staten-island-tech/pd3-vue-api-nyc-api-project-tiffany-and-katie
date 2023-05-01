<template>
    <div class="info">
        <h1>Sex: {{ sex }}</h1>
        <h2>Year: {{ year }}</h2>
        <h3>Leading Cause: {{ leading_cause }}</h3>
    </div>
</template>

<script>
export default {
    name: 'infoCard',
    props: {
        sex: Object,
        year: Number,
        leading_cause: String,
    }
}
</script>