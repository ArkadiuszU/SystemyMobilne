const breakpoints=
{
    sm :  576,
    md :  768,
    lg :  992,
    xl :  1200,
    hd :  1600
}

let breakpoint = ""

const chnge_breakpoint = ()=>
{
    let window_size = window.innerWidth;
    if(window_size <= breakpoints.md && breakpoint != "sm")
    {
        breakpoint = "sm";
        rwd_update(breakpoint);
    }
    else if (window_size <= breakpoints.lg && window_size > breakpoints.md && breakpoint != "md")
     {
        breakpoint = "md";
        rwd_update(breakpoint);
     }
     else if (window_size <= breakpoints.xl && window_size > breakpoints.lg && breakpoint != "lg")
     {
        breakpoint = "lg";
        rwd_update(breakpoint);
     }
     else if (window_size > breakpoints.xl && breakpoint != "xl")
     {
        breakpoint = "xl";
        rwd_update(breakpoint);
     }
     
};

//RWD ELEMENTS

const rwd_futures = (breakpoint) =>
{
    const columns = document.querySelectorAll(".futures .column");
    const section =   document.querySelector(".futures");
    const rows = document.querySelectorAll(".futures .row");
    switch (breakpoint) {
        case 'xl':
            toAdd=3;
            justifyContent_value="space-between"
            height =  "80vh";
            break;
        case "lg":
            toAdd=5;
            justifyContent_value="center"
            height =  "120vh";
            break;
        case "sm":
        case "md":
            toAdd=8;
            height =  "150vh";
            justifyContent_value="center"

      }
      
        for(col of columns)
        {
            col.classList.add(`col-${toAdd}`);
            col.classList.remove(`col-${3}`);
            col.classList.remove(`col-${5}`);
            col.classList.remove(`col-${8}`);
            col.classList.add(`col-${toAdd}`);
        }
        for(row of rows)
        {
            row.style.justifyContent = justifyContent_value
        }
        section.style.height = height;

}

const rwd_open = (breakpoint) =>
{
    const columns = document.querySelectorAll(".open .box");
    const row = document.querySelector(".open .open-container");
   

    switch (breakpoint) {
        case 'xl':
            toAdd=5;
            height =  "80vh";
            justifyContent_value="space-between"
            break;
        case "lg":
            height =  "100vh";
            toAdd = 5;
            justifyContent_value="space-between"
            break;
        case "sm":
        case "md":
            toAdd=8;
            height =  "140vh";
            columns[0].style.minHeight  = "300px";
            justifyContent_value="center"

      }
      
        for(col of columns)
        {
            col.classList.remove(`col-${5}`);
            col.classList.remove(`col-${8}`);
            col.classList.add(`col-${toAdd}`);
        }
            row.style.justifyContent = justifyContent_value;
            row.style.height = height;
        
    

}

const rwd_architecture = (breakpoint) =>
{

    const des = document.querySelectorAll(".architecture .description");
    const row = document.querySelector(".description-map");
    const circle = document.querySelector(".app .back-element");
    let flex_dir;
    
    switch (breakpoint) {
        case 'xl':
            flex_dir = "row";
            circle.style.height = "120px";
            circle.style.width = "120px";
            circle.style.left= "10vw";
            break;
        case "lg":
            flex_dir = "column";
            circle.style.height = "120px";
            circle.style.width = "120px";
            circle.style.left= "10vw";
            break;
        case "md":
            circle.style.height = "115px";
            circle.style.width = "115px";
            circle.style.left= "8vw";
            flex_dir = "column";
            break;
        case "sm":
            circle.style.height = "100px";
            circle.style.width = "100px";
            circle.style.left= "5vw";
            flex_dir = "column";
            break;
      }
      for (let d of des)
          {
            d.style.flexDirection = flex_dir;
          }
    
      for(let e of row.children)
      {
          if(flex_dir == "column")
          {
            e.classList.remove("col-5");
            e.classList.add("col-12");
          }
          else
          {
            e.classList.remove("col-12");
            e.classList.add("col-5");
          }
      }

}

const rwd_advantages = (breakpoint) =>
{

    const boxes = document.querySelectorAll(".advantages .content .box");
    const row = document.querySelector(".advantages .content");

    switch (breakpoint) {
        case 'xl':
            flex_dir = "row";
           
            break;
        case "lg":
            flex_dir = "row";
           
            break;
        case "md":
            
            flex_dir = "column";
            break;
        case "sm":
            
            flex_dir = "column";
            break;
      }

      row.style.flexDirection = flex_dir;
      for (let b of boxes){
          if(flex_dir == "column")
          {
            b.classList.remove("col-4");
            b.classList.add("col-6");

          }
          else
          {
            b.classList.remove("col-6");
            b.classList.add("col-4");
          }
      }

}
//_____________

const rwd_update = (breakpoint) =>
{
    console.log(`update ${breakpoint}`);
    rwd_futures(breakpoint);
    rwd_open(breakpoint);
    rwd_architecture(breakpoint);
    rwd_advantages(breakpoint)

}

document.addEventListener("DOMContentLoaded", function (){

    chnge_breakpoint();

    window.addEventListener('resize', chnge_breakpoint);
})