<template>
<div class="dashboard">
              <div class="flex mb-3 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <span>คำเชิญเข้าร่วมองค์กร</span>
              </div>
            </div>
<div class="w-full  overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                    >
                      <th class="px-4 py-3">ชื่อองค์กร</th>
                      <th class="px-4 py-3">ผู้เชิญ</th>
                      <th class="px-4 py-3">เชิญเมื่อ</th>
                      <th class="px-4 py-3">ผู้ตอบกลับ</th>
                      <th class="px-4 py-3" colspan="3"  width="5%"></th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                    <tr class="text-gray-700 dark:text-gray-400" v-for="rows in org_invite"  v-bind:key="rows.id" >
                      <td class="px-4 py-3 text-sm">
                        {{rows.org_name}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{rows.name}} {{rows.surname}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                         {{dateTime(rows.created_at)}} 
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{member}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ตอบรับ</button>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ปฏิเสธ</button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
</div>
</div>
</template>

<script>
import 'moment/locale/th';
import moment from "moment";
import axios from "axios";
export default {
    name:"org_invite",
    data() {
      return {
        org_invite:[],
        member:this.member
      }
    },
      mounted(){
               this.getOrgInvite()
               ;
      },
    methods: {
      getOrgInvite(){
            axios.get('http://elearning-its.test/api/respond_org_invite').then((response)=>{
                this.org_invite=response.data.org_invite,
                this.member=response.data.member
            });
        },
    dateTime(date) {
      var strdate = moment(date).add(543, "years");
      //return moment(strdate).format("Do MMMM YYYY")+'   '+"|"+'   '+ moment(strdate).format("hh:mm:ss")+' '+'น.'
      return moment(strdate).format("Do MMMM YYYY")
      ;
      }
    },
    }

</script>

<style scoped>
.dashboard{
  margin-block: 3%;
  margin-inline: 3%;
}
table th {
        font-size: 26px;
    }
table td {
        font-size: 22px;
    }
table button{font-size: 22px;}
</style>