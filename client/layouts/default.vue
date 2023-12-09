<template>
    <div>
        <slot></slot>
        <div  class="bg-slate-800 w-full mt-10 pt-5 pl-8 max-h-screen fixed bottom-0 left-0">
           <h1 class="text-xl text-gray-200">Explore ABSR Bank</h1>
           <div class="flex space-x-40 text-justify">
                <div class="ml-60">
                    <ul class="text-gray-200">
                       <li><nuxt-link to="/about">About</nuxt-link></li> 
                        <!-- <li><nuxt-link to="/deposit">Services</nuxt-link></li> -->
                        <li><nuxt-link to="/branches">Branches</nuxt-link></li>
                    </ul>
                 </div>
                 <div>
                    <ul class="text-gray-200 ">
                        <li>Savings Account</li>
                        <li>Fixed Deposit</li>
                        <li>Loans</li>
                    </ul>
                 </div>
                 <div>
                    <ul class="text-gray-200 ">
                        <li>Customer Services</li>
                        <li>CheckBook</li>
                        <li>Debit/Credit Card</li>
                    </ul>
                 </div>
                 <div>
                    <ul class="text-gray-200 ">
                        <li>Housing Loan</li>
                        <li>Vehicle Loan</li>
                        <li>Education Loan</li>
                    </ul>
                 </div>
                 <div>
                    <ul class="text-gray-200 ">
                        <li>Branch Contact Details</li>
                        <li>Loan Enquiry</li>
                        <li>Close Account</li>
                    </ul>
                 </div>
            </div>
            <p class="text-white text-right pr-3 mr-3">CopyRight @2023</p>
        </div>
    </div>
</template>