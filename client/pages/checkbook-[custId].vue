<template>
    <Navbar :props="props">{{ props? props :''  }}</Navbar>
   <div class="flex justify-center text-5xl font-semibold m-16 ">Transaction Summary</div>
    <div class="container mx-auto p-4">
        {{ props? props : '' }}
        
        <table class="table-auto w-full border-8 border-slate-700 text-2xl">
            <thead>
                <tr>
                    <th class="border-4 border-gray-700 p-2">Date</th>
                    <th class="border-4 border-gray-700 p-2">Time</th>
                    <th class="border-4 border-gray-700 p-2">Transaction</th>
                    <th class="border-4 border-gray-700 p-2">Amount</th>
                    <th class="border-4 border-gray-700 p-2">Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-4 border-gray-700 p-2">2023-11-22</td>
                    <td class="border-4 border-gray-700 p-2">10:30 AM</td>
                    <td class="border-4 border-gray-700 p-2">Deposit</td>
                    <td class="border-4 border-gray-700 p-2">$100</td>
                    <td class="border-4 border-gray-700 p-2">$500</td>
                </tr>
                <tr>
                    <td class="border-4 border-gray-700 p-2">2023-11-23</td>
                    <td class="border-4 border-gray-700 p-2">3:45 PM</td>
                    <td class="border-4 border-gray-700 p-2">Withdrawal</td>
                    <td class="border-4 border-gray-700 p-2">$50</td>
                    <td class="border-4 border-gray-700 p-2">$450</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const {props} = defineProps(['props'])
</script>