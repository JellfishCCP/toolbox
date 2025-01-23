window.addEventListener('DOMContentLoaded', function(){
    let headerEles, bodyEles, footerEles;
    headerEles = document.querySelectorAll('#header button');
    bodyEles = document.querySelectorAll('#main button');
    footerEles = document.querySelectorAll('#footer button');
    let set = { headerEles, bodyEles, footerEles };
    let corr = {
        headerEles: document.querySelector("#header_corr"),
        bodyEles: document.querySelector("#main_corr"),
        footerEles: document.querySelector("#footer_corr")
    };
    let add = document.querySelector(".add");
    for (const eles in set) {
        for (let i = 0;i < set[eles].length;i++) {
            let ele = set[eles][i];
            ele.addEventListener('click', function(){
                console.log(set[eles], eles);
                set[eles].forEach((e)=>{e.classList.remove('focus')});
                this.classList.add('focus');
                if (i !== 0) {
                    corr[eles].classList.remove('hide');
                }else{
                    corr[eles].classList.add('hide');
                }
            })
        }
    }
})
function add(){
    let d = document.createElement("div");
    d.setAttribute("class", "item");
    d.innerHTML =   `<div class="name">段落</div>
                    <div class="selecter">
                        <input type="text" placeholder="标题" class="main_p_t"><br/>
                        <input type="text" placeholder="内容(建议随便填写随后在论坛中修改)" class="main_p_c">
                    </div>`
    document.querySelector("#main_corr").appendChild(d);
}

function renderHeader(mode = 0, color = "#FF6600", title = "", subtitle = "") {
    if (mode == 0) {
        return "";
    }
    if (mode == 1) {
        return `[align=center][table=98%]
    [tr=${color}][td][align=center][table=98%,White]
    [tr][td][align=center][font=Times New Roman][size=5][color=${color}][b]${title}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=3]${subtitle}[/size][/font][/align][/td][/tr]
    [/table][/align][/td][/tr]
    [/table]`
    }
    if (mode == 2) {
        return `[align=center] [size=5][color=${color}]${title}[/color][/size]<br/>[size=4]${subtitle}[/size] [table=98%,${color}] [tr][td][/td][/tr] [/table][/align]`;
    }
    if (mode == 3) {
        return `[align=center] [table=98%,${color}] [tr][td][/td][/tr] [/table][size=5][color=${color}]${title}[/color][/size]<br/>[size=4]${subtitle}[/size][/align]`
    }
    if (mode == 4) {
        return `[align=center] [table=98%,${color}] [tr][td][/td][/tr] [/table][size=5][color=${color}]${title}[/color][/size]<br/>[size=4]${subtitle}[/size][table=98%,${color}] [tr][td][/td][/tr] [/table][/align]`
    }
}
function renderBody(mode = 0, color = "#FF6600", body = "") {
    if (mode == 0) {
        return "";
    }
    if (mode == 1) {
        return `[align=center][table=98%]
    [tr=${color}][td][align=center][table=98%,White]
    [tr][td][align=left]${body}[/align][/td][/tr]
    [/table][/align][/td][/tr]
    [/table]`;
    }
    if (mode == 2) {
        return `[align=left]${body}[table=98%,${color}] [tr][td][/td][/tr][/table][/align]`;
    }
    if (mode == 3) {
        return `[align=left][table=98%,${color}][tr][td][/td][/tr][/table]${body}[/align]`;
    }
    if (mode == 4) {
        return `[align=left][table=98%,${color}][tr][td][/td][/tr][/table]${body}[table=98%,${color}][tr][td][/td][/tr][/table][/align]`;
    }
}
function renderFooter(mode = 0, color = "#FF6600", inner = "") {
    if (mode == 0) {
        return "";
    }
    if (mode == 1) {
        return `[align=center][table=98%]
    [tr=${color}][td][align=right][font=Times New Roman][size=3][color=White]${inner}[/color][/size][/font][/align][/td][/tr]
    [/table]`
    }
    if (mode == 2) {
        return `[align=right][size=3]${inner}[/size] [table=98%,${color}] [tr][td][/td][/tr] [/table][/align]`;
    }
    if (mode == 3) {
        return `[table=98%,${color}] [tr][td][/td][/tr] [/table][align=right][size=3][color=${color}]${inner}[/color][/size][/align]`;
    }
    if (mode == 4) {
        return `[table=98%,${color}] [tr][td][/td][/tr] [/table][size=3][align=right]${inner}[/align][/size][table=98%,${color}] [tr][td][/td][/tr] [/table]`
    }
}

let lastRender = '';
setInterval(function(){
    let headerEles, bodyEles, footerEles;
    headerEles = document.querySelectorAll('#header button');
    bodyEles = document.querySelectorAll('#main button');
    footerEles = document.querySelectorAll('#footer button');
    let set = { headerEles, bodyEles, footerEles }
    let corr = {};
    for (let index in set){
        for (let i = 0; i < set[index].length; i++) {
            if (set[index][i].classList[0] == 'focus') {
                corr[index] = i;
            }
        }
    }
    let headerColor = document.querySelector("#header_color");
    let headerTitle = document.querySelector("#header_title");
    let headerSubtitle = document.querySelector("#header_subtitle");
    let bodyColor = document.querySelector("#main_color");
    let bodyTitles = document.querySelectorAll(".main_p_t");
    let bodyContents = document.querySelectorAll(".main_p_c");
    let bodyContent = "";
    for (let i = 0; i < bodyTitles.length; i++) {
        bodyContent += `[size=5][color=${bodyColor.value}][b]|[/b][/color][/size][size=4] [b]${bodyTitles[i].value}[/b][/size]<br/>`;
        bodyContent += `[size=3]${bodyContents[i].value}[/size]<br/>`;
    }
    let footerColor = document.querySelector("#footer_color");
    let footerContent = document.querySelector("#footer_content");
    
    let result = "";
    result += renderHeader(corr.headerEles, headerColor.value, headerTitle.value, headerSubtitle.value);
    result += renderBody(corr.bodyEles, bodyColor.value, bodyContent);
    result += renderFooter(corr.footerEles, footerColor.value, footerContent.value);

    if (result !== lastRender) {
        lastRender = result;
    }
    if (result !== "") {
        document.querySelector(".defaultToDisplay").setAttribute("style", "display: none");
    }else{
        document.querySelector(".defaultToDisplay").setAttribute("style", "");
    }
    // if (result !== lastRender){
        document.querySelector("#result").innerHTML = result;
    
}, 1000);