<template>
   <div
      class="flex  items-center justify-between p-4 text-sm font-semibold text-black  bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div class="flex items-center">
        <span><img src="../../assets/img/pluk-ori1.png" width="100"></span>
      </div>
      <span class="px-1">
        <a href="/" class="pr-7">หน้าแรก</a>
        <a href="/login" class="pr-7">เข้าสู่ระบบ</a>
        <a href="/register" class="pr-7">สร้างบัญชีผู้ใช้ใหม่</a>
        </span>
   </div>
  
    <img width="1900" src="../../assets/img/poster-1.jpg" class="responsive mb-3 mx-1" />
    
              <div class="flex mb-3  mx-1 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <span>รายวิชาที่น่าสนใจ</span>
              </div>
            </div>
<div class="dashboard">

   <div class="grid gap-6 mb-3 md:grid-cols-2 xl:grid-cols-4">
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg" v-for="rows in course "  v-bind:key="rows.id">
  <img class="w-full" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGVudHxlbnwwfHwwfHw%3D&w=1000&q=80" >
  <div class="px-6 py-4">
    <div class="font-bold text-2xl mb-2">{{rows.course_name}}</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
      <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
        outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  ลงทะเบียน
                </button>
                
     <!--  <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
        outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="enrollModal()">
                  ลงทะเบียน
                </button>
                <div v-if="EnrollModal"
                  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                  <div class="relative w-auto my-6 mx-auto max-w-6xl"> -->
                    <!--content
                    <div
                      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">-->
                      <!--header
                      <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 class="text-3xl text-black">
                          แนะนำรายวิชา อบรม IONIC
                        </h3>
                        <button
                          class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          v-on:click="enrollModal()">
                          X
                        </button>
                      </div>-->
                      <!--body
                        <div class="w-screen-fit">
                          <div class="w-full p-5">
                               <div class="px-4 py-3 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
                              <div class="text-2xl text-gray-600 dark:text-gray-400">
                                <img src="https://www.techtalkthai.com/wp-content/uploads/2022/02/flutter-banner.png" width="300" />
                                            <b> รายละเอียด วิชา Flutter</b> <br>
                                              รหัสรายวิชา : APF4 <br>
                                              ชื่อรายวิชา : Flutter <br>
                                              คำอธิบายรายวิชา : เรียนรู้ Flutter เบื้องต้นถึงขั้นสูง <br>
                                              หมวดหมู่รายวิชา : Application Framework <br>
                                              ประเภทรายวิชา : สาธารณะ <br>
                                              สถานะรายวิชา : เผยแพร่ <br>
                                              ชื่อติวเตอร์ประจำรายวิชา : สุธาวี สะอะ <br>
                                            <b> ความรู้ที่คุณจะได้ในรายวิชา Flutter</b> <br>
                                              บทเรียนที่ 01 การเขียนภาษา php เบื้องต้น <br>
                                              บทเรียนที่ 02 การประยุกต์ใช้ภาษา php <br>
                              </div>
                            </div>
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ลงทะเบียน</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div v-if="EnrollModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>-->
  </div>
</div>
<!-- 
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://www.techtalkthai.com/wp-content/uploads/2022/02/flutter-banner.png" >
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Flutter</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">ลงทะเบียน</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://marock.tokyo/wp-content/uploads/2022/04/VueJS.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Vue.js</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">ลงทะเบียน</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://developerhoster.com/content/images/size/w960/2021/09/banner-2.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Laravel Framework</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">ลงทะเบียน</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full"  src="https://www.appbrain.com/stats/libraries/square-icon/ionic.png">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Ionic</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">ลงทะเบียน</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://1.bp.blogspot.com/-Ez_07BOEQdg/YUpIgc95XqI/AAAAAAABevQ/dHiUyADJBQ03yWF_mwW4ZkTXrSUWumozQCLcBGAsYHQ/s998/github.webp">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">GITHUB</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">ลงทะเบียน</button>
  </div>
</div> -->

  </div>
</div>
  
              <div class="flex mb-3 mx-1 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <span>หมวดหมู่</span>
              </div>
            </div>
            
<div class="dashboard">
   <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg " v-for="rows in cc "  v-bind:key="rows.id">
  <img class="w-full" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlcG9ydHxlbnwwfHwwfHw%3D&w=1000&q=80">
  <div class="px-6 py-4">
    <div class="font-bold text-2xl mb-2">{{rows.name}}</div>
    <p class="text-gray-700 text-base">
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div>
<!-- 
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full"  src="https://prod-discovery.edx-cdn.org/media/course/image/8b7520f3-f191-46f5-a1c9-0f0260bd3d02-af44133a8701.small.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Development</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://images2.content-hci.com/commimg/myhotcourses/blog/post/myhc_79664.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Marketing</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://intellicominc.com/Portals/0/EasyDNNnews/88/img-HardwareSoftware-Resale.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">IT and Software</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://miro.medium.com/max/800/1*1kitK_m3VWlmaxZivkkFQQ.jpeg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Development</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://www.popticles.com/wp-content/uploads/2020/11/Business-Planning.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Business</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full"  src="https://www.thoughtco.com/thmb/GAtp0KJWAXudEuz9ufGu2jKAdYQ=/3909x2199/smart/filters:no_upscale()/film-photography-592347645-59e4d0609abed500119e7b14.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Photography</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
  <img class="w-full" src="https://smkn3kotabekasi.sch.id/wp-content/uploads/2021/06/Music.jpg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Music</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      เข้าดู</button>
  </div>
</div> -->

  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "large-modal",
  data() {
    return {
      course:[],
      cc:[]
    }
  },
  mounted() {
    this.getDashboard()
    
  },
  methods: {
      getDashboard(){
            axios.get('http://elearning-its.test/api/dashboard').then((response)=>{
                this.course=response.data.course;
                this.cc=response.data.cc;
            });
      },
      enrollModal: function () {
        this.EnrollModal = !this.EnrollModal;
      },
  }
}
</script>

<style scoped>
img{
  max-width: 100%;
}
.dashboard{
  margin-block: 1%;
  margin-inline: 2%;
}
.row {
  max-width: 900px;
  margin: 50px auto 0;
}
.grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
