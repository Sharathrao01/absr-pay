
import type { Home } from '#build/components';
<template>
    <Navbar></Navbar>
    <div class="flex justify-center mt-16">
        <div class="bg-emerald-500 w-3/5 h-4/6 rounded-2xl border border-black">
            <h1 class="flex justify-center text-4xl p-4">Withdraw Form</h1>
            <form  @submit.prevent="submit" class="p-5">
                <div>
                    <label class="text-2xl">Account Number : </label>
                    <input type="text" v-model="accNumber" class="pt-2 pb-2 pl-5 bg-stone-500 text-2xl ml-6 w-60">
                </div>
               
                <br>
                <div>
                    <label class="text-2xl">Withdraw Amount : Rs</label>
                    <input type="number" placeholder="Amount" v-model="withdrawAmount" class="p-2 bg-stone-500 ml-1.5 text-2xl font-semibold w-36">
                </div>
                <input class="mt-10 w-5 h-5" type="checkbox" name="check" id="">
                <label for="check" class="pl-2 text-xl">I agree, to withdraw a sum of <span>{{ withdrawAmount }}</span> from the account with accNumber <span>{{ accNumber }}</span> </label>
                <div class="ml-48">
                <button type="submit" class="bg-black rounded-lg p-4 text-2xl font-medium text-white mt-10 ml-28">Withdraw</button>
                <!-- <NuxtLink to="/home" class="bg-black rounded-lg p-4 text-2xl font-medium text-white mt-10 ml-28">Cancel</NuxtLink> -->
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
const route = useRoute();
let accNumber = ref("")
accNumber = route.params.accNo
let withdrawAmount = 0;
let agreed = ref(false);

const submit = async () => {
    if (agreed) {
        // API call with accNumber and depositAmount
        const requestData = {
            accNo: `${accNumber}`,
            amount: `${withdrawAmount}`,
        };

        try {
            const jsonData = JSON.stringify(requestData);
            const response = await axios.post('http://localhost:4000/api/v1/account/withdraw', jsonData,
            {
                headers: {
          'Content-Type': 'application/json'
                }
            });

            console.log(response)
            // Handle the response as needed
            if(response.data.success)
            {
                alert('Withdraw Successfull');
            }
            else
            {
                alert('Balance low!')
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle the error as needed
        }
    } else {
        // Alert the user to check the checkbox
        alert('Please check the checkbox before depositing.');
    }
};


</script>