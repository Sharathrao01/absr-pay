<template>
    <div>
        <div class="mt-10 ml-10">
            <div class="flex space-x-8">
                <!-- {{ props.response }} -->
                <!-- <Card1 :props="props.response ? props.response.user : null" /> -->
                <Card1 :props="props.response"/>
                <balance :props="props.response"></balance>
            </div>
            <div class="mt-5 flex space-x-4">
            <TransactionCard :props="props.response"></TransactionCard>
            <depositCard :props="props.response"></depositCard>
            <WithdrawalCard :props="props.response"></WithdrawalCard>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['response']);

watch(() => {
  console.log('accountCard.vue props:', props);
  if (props && props.response) {
    console.log('accountCard.vue props.user:', props.response);
  }
});


</script>