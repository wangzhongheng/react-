import LoadableComponent from '@/Utils/LoadableComponent';
const Index = LoadableComponent(()=>import("@/Views/Index/Index"));
const Login = LoadableComponent(()=>import("@/Views/Login/Login"));

 const HomeRouter = [
     {
         name: "登陆",
         path: "/login",
         componentName: Login
     },

     {
         name: "首页",
         path: "/",
         componentName: Index,
     },
]

const ContentRouter = [];
 export {
     HomeRouter,
     ContentRouter,
 }
