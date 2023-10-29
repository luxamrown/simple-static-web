
const contentList = [{
    category: "General",
    titleList: ["Emo is Not Dead", "Naik Motor Keliling Kota Sampai Binaria" , "Ditemukan arca kerajaan Sriwijaya", "Inilah Cara Airbus Membuat Percobaan ...", "Boeing Memastikan Mesin Varian 777 Sela..", "The World Will Never Take My Heart"]
},{
    category: "Travel",
    titleList: ["My Chemical Romance", "Blok M Mall Dari Tahun Ke Tahun" , "Pempek Itu Enak", "Mengenal Musium Naskah Proklamasi", "Alat Baru Ditemukan Untuk Mempermudah ..", "Percobaan Pembunuhan Hitler"]
}]

const hotNewsTitle = ["Ditemukan Arca Kerajaan Sriwijaya", "Plankton Serbu Pantai", "Harga Bakmi naik 4 Kali Lipat"]

const navigationList = [{
        name: "Home",
        href: "./index.html"
    },{
        name: "News",
        href: "#"
    },{
        name: "Politics",
        href: "#"
    },{
        name: "Sports",
        href: "#"
    },{
        name: "Travel",
        href: "#"
    },{
        name: "Future",
        href: "#"
    },{
        name: "Culture",
        href: "#"
    },{
        name: "Reel",
        href: "#"
    }]

function articleListMapping(category, relatedArticle) {
    let titleList

    if(relatedArticle) {
        titleList = contentList[0].titleList.slice(0, 3)
        category = "General"
    } else {
        titleList = contentList.filter((value, idx) => (value.category === category))[0].titleList
    }

    console.log(titleList)

    return titleList.map((title, idx) => {
        return(`<a key=${idx} class="card-second" href="article.html?idxContent=${idx}&category=${category}">
            <img src="https://picsum.photos/id/${idx + 10}/640/360" alt="picture" class="big-card-img">
            
            <h1 class="font-color-black font-medium">${title}</h1>
        
            <p class="font-color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            <div style="display: flex; margin-top: 20px;">
                <div style="width: 5px; background-color: #F99417;">

                </div>

                <p class="font-color-black">History</p>
            </div>
        </a>`)
    }).join("")
}

function hotNewsMapping() {
    let contentDom = document.getElementById("hotnews");

    const mappedHotnews = hotNewsTitle.map((title, idx) => {
        return `<a key=${idx} class="card" href="./article.html?hotnews=true&idxContent=${idx}">
                    <h1 class="font-color-black font-medium">${title}</h1>
    
                    <img src="https://picsum.photos/id/${idx + 100}/640/360" alt="picture" class="big-card-img">
    
                    <p class="font-color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
                    <button class="read-more-button-main-card font-color-white font-medium">Read More</button>
                </a>`;
      }).join("");
    
    contentDom.innerHTML = mappedHotnews
}

function relatedArticleMapping() {
    let contentDOM = document.getElementById("related-article-card");

    const mappedRelatedArticle = articleListMapping(null, true)

    contentDOM.innerHTML = mappedRelatedArticle
}

function categoryMapping() {
    let contentDOM = document.getElementById("content-list");

    const mappedCategory = contentList.map((content) =>{
        return (
            `<div id="home-category">
                    <div style="border-bottom: 2px solid #363062;">
                        <h1 class="font-color-black font-bold">
                            ${content.category}
                        </h1>
                    </div>
                    <div id="home-category-content" class="container">
                    ${
                        articleListMapping(content.category)
                    }
                    <div style="width: 100%; display: flex; justify-content: center; padding: 50px 0px;">
                        <button class="big-button font-2xl font-medium font-color-white">
                            Visit ${content.category}
                        </button>
                    </div>
                    </div>
                </div>`
        )
    }).join("")

    contentDOM.innerHTML = mappedCategory
}

function mappingDetailContent(){
    let contentDOM = document.getElementById("detail-article-content");

    const urlParams = new URLSearchParams(window.location.search);
    const isHotNews = urlParams.get('hotnews');
    const idxContent = urlParams.get('idxContent');
    const category = urlParams.get('category');

    let title

    if(isHotNews){
        title = hotNewsTitle[idxContent]
    } else {
        title = contentList.filter((value, idx) => (value.category === category))[0].titleList[parseInt(idxContent)]
    }

    const mappingContent = `
            <div class="breadcrumb">
                <a href="./index.html">Home</a>
                >
                <a>News</a>
                >
                <a>${title}</a>
            </div>
                <div class="title-detail-article">
                <h1>${title}</h1>

                <p>9 hours ago</p>

                <button class="share-button font-color-white">
                    Share
                </button>
            </div>
            <div class="article-desctiption">
                <p class="font-color-black font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sit amet venenatis urna cursus. Nibh venenatis cras sed felis eget velit aliquet sagittis. Turpis egestas sed tempus urna et pharetra pharetra. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Quisque non tellus orci ac auctor augue mauris augue. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Viverra nam libero justo laoreet sit amet cursus. Nulla pellentesque dignissim enim sit amet venenatis. Ornare quam viverra orci sagittis eu volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Justo laoreet sit amet cursus sit amet dictum. Elementum sagittis vitae et leo duis ut. 
                </p>
                <p class="font-color-black font-light">
                    Proin sagittis nisl rhoncus mattis. Augue lacus viverra vitae congue eu consequat ac felis. Vulputate odio ut enim blandit. Elementum sagittis vitae et leo duis ut diam quam nulla. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Libero enim sed faucibus turpis. Nibh ipsum consequat nisl vel pretium lectus quam id. Varius duis at consectetur lorem donec massa. Quis auctor elit sed vulputate mi sit amet mauris. Turpis egestas sed tempus urna et. Sed egestas egestas fringilla phasellus. Consectetur purus ut faucibus pulvinar elementum integer. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Suscipit adipiscing bibendum est ultricies.
                </p>
                <p class="font-color-black font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sit amet venenatis urna cursus. Nibh venenatis cras sed felis eget velit aliquet sagittis. Turpis egestas sed tempus urna et pharetra pharetra. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Quisque non tellus orci ac auctor augue mauris augue. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Viverra nam libero justo laoreet sit amet cursus. Nulla pellentesque dignissim enim sit amet venenatis. Ornare quam viverra orci sagittis eu volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Justo laoreet sit amet cursus sit amet dictum. Elementum sagittis vitae et leo duis ut. 
                </p>
                <p class="font-color-black font-light">
                    Proin sagittis nisl rhoncus mattis. Augue lacus viverra vitae congue eu consequat ac felis. Vulputate odio ut enim blandit. Elementum sagittis vitae et leo duis ut diam quam nulla. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Libero enim sed faucibus turpis. Nibh ipsum consequat nisl vel pretium lectus quam id. Varius duis at consectetur lorem donec massa. Quis auctor elit sed vulputate mi sit amet mauris. Turpis egestas sed tempus urna et. Sed egestas egestas fringilla phasellus. Consectetur purus ut faucibus pulvinar elementum integer. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Suscipit adipiscing bibendum est ultricies.
                </p>
                <p class="font-color-black font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sit amet venenatis urna cursus. Nibh venenatis cras sed felis eget velit aliquet sagittis. Turpis egestas sed tempus urna et pharetra pharetra. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Quisque non tellus orci ac auctor augue mauris augue. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Viverra nam libero justo laoreet sit amet cursus. Nulla pellentesque dignissim enim sit amet venenatis. Ornare quam viverra orci sagittis eu volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Justo laoreet sit amet cursus sit amet dictum. Elementum sagittis vitae et leo duis ut. 
                </p>
                <p class="font-color-black font-light">
                    Proin sagittis nisl rhoncus mattis. Augue lacus viverra vitae congue eu consequat ac felis. Vulputate odio ut enim blandit. Elementum sagittis vitae et leo duis ut diam quam nulla. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Libero enim sed faucibus turpis. Nibh ipsum consequat nisl vel pretium lectus quam id. Varius duis at consectetur lorem donec massa. Quis auctor elit sed vulputate mi sit amet mauris. Turpis egestas sed tempus urna et. Sed egestas egestas fringilla phasellus. Consectetur purus ut faucibus pulvinar elementum integer. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Suscipit adipiscing bibendum est ultricies.
                </p>
            </div>
        `

    contentDOM.innerHTML = mappingContent
}

function mappingNavbar() {
    let contentDom = document.getElementById("nav-group");

    const mappedNavlink = navigationList.map((nav) => {
        return `
            <a href="${nav.href}">
                <button class="button-nav font-color-white">
                    ${nav.name}
                </button>
            </a>
        `
    }).join("")
    
    contentDom.innerHTML = mappedNavlink
}

function mappingFooterCategory() {
    let contentDom = document.getElementById("footer-category");

    let category = `
        <p class="font-color-white font-medium font-xl">
            Categories
        </p>
        ${
            navigationList.slice(1).map((cat) => {
                return `
                <p class="font-color-white">
                    ${cat.name}
                </p>
                `
            }).join("")
        }
    `

    contentDom.innerHTML = category
}

function mappingContentFirstPage(){
    hotNewsMapping()
    categoryMapping()
}

function mappingContentSecondPage() {
    mappingDetailContent()
    relatedArticleMapping()
}

function main(){
    const pathList = window.location.pathname.split("/")
    let pathname = pathList[pathList.length - 1]

    console.log(pathname)

    if(pathname === "article.html"){
        mappingContentSecondPage()
    } else {
        mappingContentFirstPage()
    }

    mappingNavbar()
    mappingFooterCategory()
}


main()


