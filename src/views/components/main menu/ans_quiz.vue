<template>
 <div class="dashboard">
        <img width="1830" src="../../assets/img/poster-1.jpg" class="responsive mb-3" />
<div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>ตอบคำถาม-แบบทดสอบชุดที่ 1</span>
                            </div>
                        </div>

                        <form action="/learning_page">
                         <div class="px-4 py-3 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                   <div class="flex mb-3  px-3 py-5 mb-3 text-sm font-semibold bg-purple-500 text-white rounded-lg shadow-sm ">
                                      <div class="flex items-center mr-auto">
                                          <span>1.Laravel มีกี่ประเภท</span>
                                      </div>
                                  </div>

                                   <div class="flex items-center mx-5 mb-3">
                                      <input checked type="radio" value="1" name="picked" v-model="picked" />
                                        <div class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>1</span>
                                          </div>
                                        </div>
                                  </div>

                                  <div class="flex items-center mx-5 mb-3">
                                      <input type="radio" value="2" name="picked" v-model="picked" />
                                       <div class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>2</span>
                                          </div>
                                        </div>
                                  </div>

                                   <div class="flex items-center mx-5 mb-3">
                                      <input type="radio" value="3" name="picked" v-model="picked" />
                                       <div class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>3</span>
                                          </div>
                                        </div>
                                  </div>

                                  <div class="flex items-center mx-5 mb-3">
                                      <input type="radio" value="4" name="picked" v-model="picked" />
                                       <div class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>4</span>
                                          </div>
                                        </div>
                                  </div>
                        </div>

                            <div class="px-4 py-3 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                   <div class="flex mb-3  px-3 py-5 mb-3 text-sm font-semibold bg-purple-500 text-white rounded-lg shadow-sm ">
                                      <div class="flex items-center mr-auto">
                                          <span>2.Laravel มีกี่ส่วน</span>
                                      </div>
                                  </div>
                                   <div class="flex items-center mx-5 mb-3">
                                      <input checked type="radio"  value="1" name="picked1" v-model="picked1" />
                                        <div  class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>1</span>
                                          </div>
                                        </div>
                                  </div>
                                  <div class="flex items-center mx-5 mb-3">
                                      <input type="radio"  value="2" name="picked1" v-model="picked1" />
                                       <div  class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>2</span>
                                          </div>
                                        </div>
                                  </div>
                                   <div class="flex items-center mx-5 mb-3">
                                      <input type="radio"  value="3" name="picked1" v-model="picked1" />
                                       <div  class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>3</span>
                                          </div>
                                        </div>
                                  </div>
                                  <div class="flex items-center mx-5 mb-3">
                                      <input type="radio"  value="4" name="picked1" v-model="picked1" />
                                       <div  class="flex w-full ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                                          <div class="flex items-center mr-auto">
                                              <span>4</span>
                                          </div>
                                        </div>
                                  </div>
                           </div>
                           <button class="bg-green-500 p-3 shadow-lg rounded-lg font-bold text-white content-center">ส่งคำตอบ</button>
                           </form>
 </div>

</template>


<script>
import 'boxicons';

export default {
    name: "Ans_quiz",
        data() {
            return {
            }
        },
    methods: {
    }
}
</script>
<style scoped>
    /*  */
    nav {
        /* background-color: rgb(255, 251, 28); */
        max-width: 100%;
        font-size: 24px;
    }

    .tab-content {
        /* background-color: rgb(229, 229, 229); */
        max-width: 100%;
        font-size: 22px;
    }

    img {
        max-width: 100%;
    }

    .table th {
        font-size: 26px;
    }

    .table td {
        font-size: 22px;
    }

    .table button {
        font-size: 22px;
    }

    .dashboard {
        margin-block: 1%;
        margin-inline: 1%;
    }

    table th {
        font-size: 26px;
    }

    table td {
        font-size: 22px;
    }

    table button {
        font-size: 22px;
    }

    .flex button {
        font-size: 22px;
    }

    ::placeholder {
        font-size: 22px;
    }
</style>