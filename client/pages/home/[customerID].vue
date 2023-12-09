<template>
    <div>
        <home :custId="custId"></home>
    </div>
</template>

<script setup>
const route = useRoute();
const custId = route.params.customerID;
console.log(custId)
</script>