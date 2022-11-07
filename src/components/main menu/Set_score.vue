<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>คะแนน</span>
            </div>
        </div>

        <div class="w-full  overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 rounded-lg dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-6">ชื่อชุดทดสอบ</th>
                            <th class="px-4 py-6" width="15%"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in set_score" v-bind:key="rows.id">
                            <td class="px-4 py-3 text-sm">
                                {{rows.set_name}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                <a :href="'/score/'+rows.set_id"><button
                                        class="p-3 bg-green-500 shadow-lg rounded-lg font-bold text-sm text-white">ดูคะแนน</button></a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from "axios";
    // import Layout from '@/Layout.vue'
    export default {
        name: "SCore",
        data() {
            return {
                set_score: '',
            }
        },
        mounted() {
            this.getCourseDetail()
        },
        methods: {
            getCourseDetail() {
                axios.get('http://elearning-its.test/api/set_score').then((response) => {
                    this.set_score = response.data.set_score;
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