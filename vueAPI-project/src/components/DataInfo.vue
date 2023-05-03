<template>
    <div class="info">
        <h2>Gender: {{ sex }}</h2>
        <h3>Year: {{ year }}</h3>
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