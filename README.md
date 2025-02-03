<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://unpkg.com/scrollreveal@4"></script>
  </head>
  <body class="bg-[#e5e4e2]">
    <header>
        <nav class=" flex h-[65px] items-center justify-between w-[100%] mx-auto fixed  bg-white text-green-900">
            <div>
                <img class="h-[80px] w-[160px]" src="https://growixx.com/assets/img/pg1.png" alt="">
            </div>
            <div class="items-center hidden md:flex w-[60%] ">
                <ul class="flex gap-13  ">
                    <li><a class="hover:text-blue-900 font-bold" href="#">Home</a></li>
                    <li><a class="hover:text-green-900 font-bold"href="#">About</a></li>
                    <li><a class="hover:text-green-900 font-bold" href="#">Services</a></li>
                    <li><a class="hover:text-green-900 font-bold" href="#">Clients</a></li>
                    <li><a class="hover:text-green-900 font-bold" href="#">portfolio</a></li>
                    <li><a class="hover:text-green-900 font-bold"href="#">Contact us</a></li>
                    
                </ul>
            </div>
            <button class="p-3 md:hidden" onclick="handleMenu()">
                <i class="fa-solid fa-bars"></i>
            </button>
           <div id="nav-dialog" class="fixed bg-white inset-0 p-3  md:hidden  ">
                <div id="nav-bar"class="flex justify-between">
                    <img class="h-[80px] w-[160px]" src="https://growixx.com/assets/img/pg1.png" alt="">
                    <button class="p-3 md:hidden" onclick="handleMenu()">
                        <i class="fa-solid fa-x"></i>   
                    </button>
                </div>
                <div class="mt-6">
                    <a href="#" class="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Home</a><hr>
                    <a href="#" class="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">About</a><hr>
                    <a href="#" class="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Services</a><hr>
                    <a href="#" class="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Clients</a><hr>
                    <a href="#" class="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">portfolio</a><hr>
                    <a href="#" class="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Contact</a>
                </div>
            </div>        
        </nav>
    </header><hr>

    <main class="">
        <div class="bg-[url(img3.jpg)] h-[600px]  bg-cover items-center justify-center  ">
                <h1 class="text-[48px] h-[350px] text-white font-bold p-30">Improve Your Business Growth with <br>Expert Digital Marketing Solutions in <br> Rajasthan</h1>
            <h6 class=" text2 text-[16px] pl-[123px]  text-white font-bold ">Transforming Content into Customers with Proven Digital Marketing Strategies
            </h6>
            <button class=" bg-[#34A853] rounded-md ml-[123px] mt-[25px] text-white font-bold h-[60px] w-[218px]">Get Started</button>
        </div>

       

        </div>

<!--Pragraph part 1-->
<div class="text-transfer flex  ">
        <div class="paragraph1 mx-16 h-[645px] w-[520px] mt-[80px] ">
            <div>
                <h1 class="h-[40px] text-[34px] font-bold">Who We Are ?</h1>
                <p class="font-bold pt-[50px] text-black"> At Growix, we specialize in building brands that resonate and convert. From digital marketing to video production, we deliver impactful solutions that drive results. Our goal is simple – driving quality leads and boosting sales for every business. Let’s turn your vision into success, one lead at a time!</p>
            </div>
           <div class="mt-[50px]">
            <h1 class="h-[40px] text-[34px] font-bold">Our Core Values</h1>
            <p class="font-bold pt-[50px] text-black">Growix Technologies comprises of a collective team of dedicated team of creatives who are ready to implement your idea into reality We use the latest set of market-available technologies into making your dreams come true in the digital space</p>
           </div>
           </div>
           <!--Pragraph part 2-->

           <div class="grid grid-cols-2 w-[770px] h-[705px] gap-4 mx-6 mt-[100px]">
            <div>
                <i class="fa-regular fa-images text-[#34a853] "></i>
                <h1 class=" h-[24px] text-[20px] font-bold">Experienced & Friendly Team </h1>
                <p class="font-bold pt-[25px] text-[#848484]">Our team has the experience to drive results, but we also value building strong relationships with our clients. We're approachable, easy to work with, and dedicated to helping your business succeed.
                </p>
            </div>
            <div>
                <i class="fa-solid fa-receipt text-[#34a853]"></i>
                <h1 class=" h-[24px] text-[20px] font-bold">Focused on Your Success
                </h1>
                <p class="font-bold pt-[25px] text-[#848484]">We focus on what matters most to you: more leads and higher sales. Our strategies are designed to help you grow and achieve real, measurable results.
                </p>
            </div>
            <div>
                <i class="fa-solid fa-cube text-[#34a853]"></i>
                <h1 class=" h-[24px] text-[20px] font-bold">Tailored Solutions
                </h1>
                <p class="font-bold pt-[25px] text-[#848484]">Every business is different. That’s why we create custom marketing plans that are made to fit your unique needs and goals.
                </p>
            </div>
            <div>
                <i class="fa-solid fa-shield text-[#34a853]"></i>
                <h1 class=" h-[24px] text-[20px] font-bold">Transparent & Supportive
                </h1>
                <p class="font-bold pt-[25px] text-[#848484]">We believe in open communication. You’ll always know what we’re doing and how it’s benefiting your business. We’re here to support you every step of the way.
                </p>
            </div>
            <div>
                <i class="fa-solid fa-shield text-[#34a853]"></i>
                <h1 class=" h-[24px] text-[20px] font-bold">Local Expertise in Chennai
                </h1>
                <p class="font-bold pt-[25px] text-[#848484]">As a Chennai-based agency, we understand the local market and know how to help businesses here succeed. Whether you’re targeting the local market or beyond, we have the expertise to help you grow. We’re grateful to work with incredible clients</p>
            </div>
           </div>
        </div>

        <!--Services-->

        <div class="services h-[700px] bg-black text-white mt-[120px] pt-7 justify-items-center">
            <h2 class="h-[40px] text-[20px] font-bold pt-[8px] border-b-4 border-[#34a853]">SERVICES</h2>
            <p class="h-[30px] text-[15px] font-bold pt-[20px]">Explore Growix’s digital marketing services: social media, performance marketing, SEO, graphic design, and more in Chennai.
            </p>

            <!--8box-->
            <div class="pt-10 flex grid grid-cols-4 gap-10 px-10 ">
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl " >
                    <img  class="h-[94px] w-[94px] bg-cover" src="https://growixx.com/assets/img/icons/Digital Marketing.png" alt="">
                    <p class="pt-3 border-b-4 border-[#34a853]">Digital marketing</p>
                </div>
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl" >
                    <img  class="h-[94px] w-[94px] bg-cover" src="https://growixx.com/assets/img/icons/Social.png" alt="">
                    <p class="pt-6 border-b-4 border-[#34a853]">Social Media Marketing</p>
                </div>
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl" >
                    <img  class="h-[94px] w-[94px] bg-cover" src="https://growixx.com/assets/img/icons/Website.png" alt="">
                    <p class="pt-6 border-b-4 border-[#34a853]">Website Design</p>
                </div>
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl" >
                    <img  class="h-[94px] w-[94px] bg-cover" src="https://growixx.com/assets/img/icons/Email.png" alt="">
                    <p class="pt-6 border-b-4 border-[#34a853]">Email Marketing</p>
                </div>
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl" >
                    <img  class="h-[94px] w-[94px] bg-cover" src="https://growixx.com/assets/img/icons/Performance.png" alt="">
                    <p class="pt-6 border-b-4 border-[#34a853]">performance Marketing</p>
                </div>
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl" >
                    <img  class="h-[94px] w-[94px] bg-cover" src="https://growixx.com/assets/img/icons/Content.png" alt="">
                    <p class="pt-6 border-b-4 border-[#34a853]">Content Creation / <br>Personal Branding</p>
                </div>
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl" >
                    <img  class="h-[94px] w-[94px] bg-cover" src="	https://growixx.com/assets/img/icons/Graphic%20Design.png" alt="">
                    <p class="pt-6 border-b-4 border-[#34a853]">Graphics Designing </p>
                </div>
                <div class="text-white h-[220px] w-[200px] bg-[#444444] pt-10 justify-items-center items-center rounded-xl" >
                    <img  class="h-[94px] w-[94px] bg-cover" src="https://growixx.com/assets/img/icons/Video%20Editing.png" alt="">
                    <p class="pt-6 border-b-4 border-[#34a853]">Viedo production</p>
                </div>
            </div>

        </div>

    <!--count Section-->

    <div class="mt-[100px] mb-[50px]  ">
        <div class="h-[200px] flex justify-between mx-[40px] lg:col-span-2" >
            
            <div class="w-[216px] h-[180px] rounded-[8px] bg-[] shadow-2xl ">
                <div class="h-[54px] w-[54px] flex justify-center items-center bg-white items-center rounded-full mx-20 -translate-y-7"><i class="fa-regular fa-face-smile text-[#34a853] "></i></div>
                <span class="flex justify-center text-[36px] font-bold">10400</span>
                <p class="flex justify-center">Qualified Leads <br> Genrated</p>
            </div>

            <div class="w-[216px] h-[180px] rounded-[8px] bg-[] shadow-2xl ">
                <div class="h-[54px] w-[54px] flex justify-center items-center bg-white items-center rounded-full mx-20 -translate-y-7"><i class="fa-regular fa-address-card text-[#34a853]"></i></div>
                <span class="flex justify-center text-[36px] font-bold">6756</span>
                <p class="flex justify-center">Qualified Sales  <br> Genrated</p>
            </div>

            <div class="w-[216px] h-[180px] rounded-[8px] bg-[] shadow-2xl ">
                <div class="h-[54px] w-[54px] flex justify-center items-center bg-white items-center rounded-full mx-20 -translate-y-7"><i class="fa-regular fa-wallet text-[#34a853]"></i></div>
                <span class="flex justify-center text-[36px] font-bold">3</span>
                <p class="flex justify-center">Years Of Experience </p>
            </div>

            <div class="w-[216px] h-[180px] rounded-[8px] bg-[] shadow-2xl ">
                <div class="h-[54px] w-[54px] flex justify-center items-center bg-white items-center rounded-full mx-20 -translate-y-7"><i class="fa-regular fa-user text-[#34a853]"></i></div>
                <span class="flex justify-center text-[36px] font-bold">1040</span>
                <p class="flex justify-center">Happy Clients</p>
            </div>

        </div>
    </div>

    <!--clients-->
    <div class="h-[430px] w-full mt-[100px] bg-black text-white mb-28">
        <div class="font-bold text-[32px] flex justify-center pt-15  ">
             <h1 class="border-b-3 border-[#34a853]">Our Clients </h1>
            </div>

        <div class="h-[160px] w-[700px] flex justify-center items-center mx-56 pt-20 gap-30 col-lg-4  col-sm-1">

            <img class="h-[114px] w-[114px]" src="https://growixx.com/assets/img/techicons/12.jpg" alt="">
            <img class="h-[114px] w-[114px]" src="https://growixx.com/assets/img/techicons/9.jpg" alt="">
            <img class="h-[114px] w-[114px]" src="	https://growixx.com/assets/img/techicons/3.jpg" alt="">
            <img class="h-[114px] w-[114px]" src="https://growixx.com/assets/img/techicons/6.jpg"alt="">


        </div>
    </div>

    <!--portfolio section-->

   <div class="w-full h-[px] flex justify-center">
    <div class="title w-[696px] h-[180px]">
        <h2 class="flex justify-center text-[32px] font-bold pb-5">PORTFOLIO</h2>
        <P>We have a deep understanding of user habits and behaviors. We are committed to using fact-based knowledge and our unique brand of innovation to help you dominate the competition. Every project is customized for optimum visibility and audience response.</P>
    </div>
   </div>

   <div class="slide w-[696px] h-[324px] ">
    <div class="slide 1 h-[150px] w-[696px] flex justify-center">
        <li class="h-[123px] w-[200px] flex gap-6 ">
            
                
                <img src="https://growixx.com/assets/img/portfolio/portfolio6.png" alt="">
                <img src="https://growixx.com/assets/img/portfolio/portfolio7.png" alt="">
                <img src="https://growixx.com/assets/img/portfolio/portfolio8.png" alt="">
          
        </li>
    </div>
   </div>

   <!--Ready To Grow Your Bussniess -->
   <div class="h-[360px] w-full bg-black text-white flex justify-center">
    <div class="title h-[132px] w-[696px]  ">
        <h2 class="text-[32px] flex justify-center pt-10 border-b-4  border-[#34a853] font-bold">Ready To Grow Your Bussniess ?</h2>
        <p class="flex justify-center pt-12">Lets Make Your Success Story Next !</p>
    </div>

    <div class=" h-[53px] w-[300px]">
        <button class="">Schedule a free Consulation </button>
    </div>

   </div>

    </main>

</body>
<script src="index.js"></script>
</html>
