<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>ตอบคำถาม-{{set_name}}</span>
            </div>
        </div>

        <form :action="'/learning_page/'+lesson_id" >
        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="text-2xl text-gray-600 dark:text-gray-400" v-for="rows in h_quiz" v-bind:key="rows.id">
                <div
                    class="flex mb-3  px-3 py-5 mb-3 text-sm font-semibold bg-purple-500 text-white rounded-lg shadow-sm ">
                    <div class="flex items-center mr-auto">
                        <span>{{rows.header_name}}</span>
                    </div>
                </div>
                <div class="w-full  overflow-hidden rounded-lg shadow-xs">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full whitespace-no-wrap">
                            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                <tr class="text-gray-700 dark:text-gray-400" v-for="rowses in quiz"
                                    v-bind:key="rowses.id">
                                    <ul v-if="rows.qh_id == rowses.qh_id ">
                                        <td class="px-4 py-3 text-sm">
                                            <input type="radio" value="4" :name="rowses.qh_id" />
                                            <!-- v-model="rowses.qh_id" -->
                                        </td>
                                        <td class="px-4 py-3 text-sm" width="90%">
                                            <span>{{rowses.quiz}}</span>
                                        </td>
                                    </ul>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        
                <button type="submit" class="bg-green-500 rounded-lg shadow-lg text-xl text-white p-3 font-semibold ">ส่งคำตอบ</button>
            </form>
    </div>

</template>


<script>
    import axios from "axios";
    import 'boxicons';

    export default {
        name: "Ans_Quiz",
        data() {
            return {
                lesson_id: '',
                set_name: '',
                h_quiz: '',
                quiz: '',
            }
        },
        mounted() {
            this.getQuiz()
        },
        methods: {
            getQuiz() {
                axios.get('http://elearning-its.test/api/ans/quiz/' + this.$route.params.id).then((response) => {
                    this.set_name = response.data.set_quiz_data.set_name;
                    this.lesson_id = response.data.lesson.lesson_id;
                    this.h_quiz = response.data.h_quiz;
                    this.quiz = response.data.quiz;
                });
            },
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