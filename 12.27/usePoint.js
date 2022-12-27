import {reactive,onMounted,onBeforeMount} from "vue";
export default function usePointer(){
    let point = reactive({
        x:0,
        t:0,
    });
    const savePoint = (event)=>{
        console.log(event);
        point.x=event.pageX;
        point.y=event.pageY;
    };
    onMounted(()=>{
        window.addEventListener("click",savePoint)
    });
    onBeforeMount(()=>{
        window.removeEventListener("click",savePoint)
    });
    return point
}

// import {reactive,onMounted,onBeforeMount} from "vue";
// export default function usePointer(){
//     let point = reactive({
//         x:0,
//         t:0,
//     });
//     const savePoint = (event)=>{
//         console.log(event);
//         point.x=event.pageX;
//         point.y=event.pageY;
//     };
//     onMounted(()=>{
//         window.addEventListener("click",savePoint)
//     });
//     onBeforeMount(()=>{
//         window.removeEventListener("click",savePoint)
//     });
//     return point
// }

// import {reactive,onMounted,onBeforeMount} from "vue";
// export default function usePointer(){
//     let point = reactive({
//         x:0,
//         t:0,
//     });
//     const savePoint = (event)=>{
//         console.log(event);
//         point.x=event.pageX;
//         point.y=event.pageY;
//     };
//     onMounted(()=>{
//         window.addEventListener("click",savePoint)
//     });
//     onBeforeMount(()=>{
//         window.removeEventListener("click",savePoint)
//     });
//     return point
// }