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
<section class="h-full gradient-form bg-gray-200 md:h-screen">
<div class="dashboard">
  <div class="container py-12 px-6 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-6/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-full px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                    <span><img src="../../assets/img/pluk-ori1.png" class="mx-auto w-48"></span>
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Let's be a pluk familly</h4>
                </div>
                <form action="/login">
                  <p class="mb-4">โปรดทำการสมัครบัญชีผู้ใช้</p>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control text-xl block w-full px-3 py-1.5  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="ชื่อผู้ใช้งาน"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control text-xl block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="อีเมล"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control text-xl block w-full px-3 py-1.5  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="รหัสผ่าน"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control text-xl block w-full px-3 py-1.5  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="ยืนยันรหัสผ่าน"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="inline-block text-xl px-6 py-2.5 text-white font-medium   uppercase rounded shadow-md hover:bg-blue-700 bg-blue-500  w-full mb-3"
                      type="submit"
                      data-mdb-ripple="true"
                    >
                      สมัคร
                    </button>
                    <!-- <a class="text-gray-500" href="#!">Forgot password?</a> -->
                  </div>
                  <div class="flex items-center justify-between pb-6">
                    <a class="text-gray-500 hover:text-blue-500 mr-2" href="/login">มีบัญชีผู้ใช้เรียบร้อยเเล้ว</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
    name:'ReGisTer',
}
</script>

<style>
.dashboard{
  margin-inline: 10%;
  padding-block: 1%;
}
</style>