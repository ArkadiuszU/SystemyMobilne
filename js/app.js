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

const rwd_update = (breakpoint) =>
{
    console.log(`update ${breakpoint}`)
    const columns = document.querySelectorAll(".futures .column")
    const rows = document.querySelectorAll(".futures .row")

    let toAdd;
    let toRemove;
    let justifyContent= "";

    switch (breakpoint) {
        case 'xl':
            toAdd=3;
            toRemove=5;
            justifyContent_value="space-between"
            break;
        case "lg":
            toAdd=5;
            toRemove=3;
            justifyContent_value="center"
            break;
        case "md":
            toAdd=8;
            toRemove=5;
            justifyContent_value="center"

      }
      
        for(col of columns)
        {
            col.classList.add(`col-${toAdd}`);
            col.classList.remove(`col-${toRemove}`);
        }
        for(row of rows)
        {
            row.style.justifyContent = justifyContent_value
        }
}

document.addEventListener("DOMContentLoaded", function (){

    chnge_breakpoint();

    window.addEventListener('resize', chnge_breakpoint);
})