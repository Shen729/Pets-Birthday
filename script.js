import cloudbase from "https://esm.sh/@cloudbase/js-sdk@3";

const app = cloudbase.init({
    env: "pets-birthday-d3gclbpb19516b395",
    accessKey: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlkMWRjMzFlLWI0ZDAtNDQ4Yi1hNzZmLWIwY2M2M2Q4MTQ5OCJ9.eyJpc3MiOiJodHRwczovL3BldHMtYmlydGhkYXktZDNnY2xicGIxOTUxNmIzOTUuYXAtc2hhbmdoYWkudGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tIiwic3ViIjoiYW5vbiIsImF1ZCI6InBldHMtYmlydGhkYXktZDNnY2xicGIxOTUxNmIzOTUiLCJleHAiOjQwOTU4NTIyMTgsImlhdCI6MTc5MjE2OTAxOCwibm9uY2UiOiJteUgyRlloTVNfNmtWLTZXZTZCa1dnIiwiYXRfaGFzaCI6Im15SDJGWWhNU182a1YtNldlNkJrV2ciLCJuYW1lIjoiQW5vbnltb3VzIiwic2NvcGUiOiJhbm9ueW1vdXMiLCJwcm9qZWN0X2lkIjoicGV0cy1iaXJ0aGRheS1kM2djbGJwYjE5NTE2YjM5NSIsIm1ldGEiOnsicGxhdGZvcm0iOiJQdWJsaXNoYWJsZUtleSJ9LCJ1c2VyX3R5cGUiOiIiLCJjbGllbnRfdHlwZSI6ImNsaWVudF91c2VyIiwiaXNfc3lzdGVtX2FkbWluIjpmYWxzZX0.Bxc6ruNmS8HyN-D7vyw893dsLWtvf_YGCqnNJi7Yh3NTLqw-yzi8oR3Sq543AHKS8z3DmKr7jnIWANM4hIoJURItS6fys694XPoFh5MaP7kOF6BWIisBgGwxeEc8p2MBXqgQeTj6mlmBWWMnA7ph8XeXn4hBiyt8FGKVcRISQVTaBfAjoRIutqVOjBIe8Iv_Cvod0wT1fTLMsgkWpN1n61emqk_FsXUgqnDkfiFwLdYqrBwJhWf8smnKG8J6YEynusOhsT4JFCs3QfqSJnEYJdDYQqOQXofCtFqBysmzV44_aYwWX01y5z_82lk70wtflxD7RrEPluqRhBf3Ksuv5w"
});

const auth = app.auth;
const db = app.database();

const wishesRef = db.collection("wishes");
/* =========================================
   PETS BIRTHDAY WEBSITE
   JAVASCRIPT
========================================= */


/* =========================================
   BASIC LINK FUNCTIONS
========================================= */

function qqMusicSearch(song) {

    return "https://y.qq.com/n/ryqq/search?w="
        + encodeURIComponent(song);

}


function bilibiliSearch(keyword) {

    return "https://search.bilibili.com/all?keyword="
        + encodeURIComponent(keyword);

}


/* =========================================
   ALBUMS
========================================= */


const albums = [
    {
        number: "01",
        year: "2014",
        title: "我是曾沛慈 I'm Pets",
        image: "assets/album-01.jpg",
        songs: [
            { name: "黑框眼鏡", url: "https://y.qq.com/n/ryqq_v2/mv/s00294y7ucj" },
            { name: "多年後", url: "https://y.qq.com/n/ryqq_v2/mv/z0029sw7pdo" },
            { name: "不過失去了一點點", url: "https://y.qq.com/n/ryqq_v2/mv/c0029n1scah" },
            { name: "小人物的大願望", url: "https://y.qq.com/n/ryqq_v2/mv/n00255vcfrs" },
            { name: "三分鐘熱度", url: "https://www.bilibili.com/video/BV1Ce4y1x7iB/" },
            { name: "不渴", url: "https://www.bilibili.com/video/BV1WPao6UEBi/" },
            { name: "跳出來", url: "https://y.qq.com/n/ryqq_v2/mv/e00256y6t25" },
            { name: "溫柔撞擊", url: "https://www.bilibili.com/video/BV1VdMp6kEJH/" },
            { name: "堅強過頭", url: "https://www.bilibili.com/video/BV1YoSyYjE8J/" },
            { name: "這裡還有我", url: "https://www.bilibili.com/video/BV1BY9zBrEXA/" },
            { name: "說好的永遠", url: "https://y.qq.com/n/ryqq_v2/mv/n0025i58pjq" },
            { name: "小路亂撞", url: "https://www.bilibili.com/video/BV18uNC69Evw/" },
            { name: "一個人還是想著一個人", url: "https://y.qq.com/n/ryqq_v2/mv/x00299y90hs" },
            { name: "雨季", url: "https://y.qq.com/n/ryqq_v2/mv/s0017ss7e6e" }
        ]
    },
    {
        number: "02",
        year: "2017",
        title: "我愛你 以上",
        image: "assets/album-02.jpg",
        songs: [
            { name: "我才沒有那樣呢", url: "https://y.qq.com/n/ryqq_v2/mv/b00199g9mj5" },
            { name: "我的淚", url: "https://y.qq.com/n/ryqq_v2/mv/b0022i657fu" },
            { name: "偏愛", url: "https://y.qq.com/n/ryqq_v2/mv/k0023r4y182" },
            { name: "不認輸的等", url: "https://www.bilibili.com/video/BV1Kk4y157Se/" },
            { name: "又不是非要你的愛", url: "https://www.bilibili.com/video/BV1pygr6SEpE/" },
            { name: "我不是你該愛的那個人", url: "https://y.qq.com/n/ryqq_v2/mv/h0021vgfuf2" },
            { name: "說過", url: "https://www.bilibili.com/video/BV1Jb411q7om/" },
            { name: "粉筆和塗鴉", url: "https://y.qq.com/n/ryqq_v2/mv/p0016b9y1xj" },
            { name: "你離開他了嗎", url: "https://y.qq.com/n/ryqq_v2/mv/j0024ish1xn" },
            { name: "和自己相遇", url: "https://www.bilibili.com/video/BV1qcT26CEiD/" },
            { name: "坦然", url: "https://y.qq.com/n/ryqq_v2/mv/h0019ytyv2r" },
            { name: "不再怕寂寞", url: "https://y.qq.com/n/ryqq_v2/mv/b0024dxamin" },
            { name: "我愛你", url: "https://y.qq.com/n/ryqq_v2/mv/k0024k19xzc" }
        ]
    },
    {
        number: "03",
        year: "2019",
        title: "謎之音",
        image: "assets/album-03.jpg",
        songs: [
            { name: "謎之音", url: "https://y.qq.com/n/ryqq_v2/mv/t00319r48gg" },
            { name: "水深火熱", url: "https://www.bilibili.com/video/BV1xj326MEyi/" },
            { name: "怎麼能這樣", url: "https://y.qq.com/n/ryqq_v2/mv/d0031snui8m" },
            { name: "我在你家樓下等你", url: "https://y.qq.com/n/ryqq_v2/mv/p0032yx33gq" },
            { name: "尋找", url: "https://www.bilibili.com/video/BV1cw411q7KA/" },
            { name: "沒什麼不能愛", url: "https://y.qq.com/n/ryqq_v2/mv/z0032zsci3d" },
            { name: "識趣", url: "https://www.douyin.com/jingxuan/search/%E8%AF%86%E8%B6%A3%E6%9B%BE%E6%B2%9B%E6%85%88" },
            { name: "沒有了", url: "https://www.xiaohongshu.com/explore/6ad081ce000000001b01c17d" },
            { name: "大風吹", url: "https://y.qq.com/n/ryqq_v2/mv/z0032ck483b" },
            { name: "Daddy Is…", url: "https://www.bilibili.com/video/BV1h6L56KE2t/" }
        ]
    },
    {
        number: "04",
        year: "2022",
        title: "今天陽光就是特別耀眼特別和諧",
        image: "assets/album-04.jpg",
        songs: [
            { name: "下凡", url: "https://www.bilibili.com/video/BV1vijF6iED1/" },
            { name: "只在意你的一切", url: "https://y.qq.com/n/ryqq_v2/mv/003RcrEo1u9RFW" },
            { name: "慷慨", url: "https://y.qq.com/n/ryqq_v2/mv/000ZIh1T36dUyV" },
            { name: "是不是", url: "https://www.bilibili.com/video/BV1tgN861E4f/" },
            { name: "I Will Find You", url: "https://y.qq.com/n/ryqq_v2/mv/002ZErx52zw0Ew" },
            { name: "今天陽光就是特別耀眼特別和諧", url: "https://y.qq.com/n/ryqq_v2/mv/002yI3Tr31Vn9G" },
            { name: "Long Long Way", url: "https://www.bilibili.com/video/BV1394y1s77f/" },
            { name: "我想對你好", url: "https://www.bilibili.com/video/BV1nK411Z7Na/" },
            { name: "我需要一些孤獨", url: "https://www.bilibili.com/video/BV1Ua411o7fV/" },
            { name: "心的碎片", url: "https://www.douyin.com/jingxuan/search/%E5%BF%83%E7%9A%84%E7%A2%8E%E7%89%87%E6%9B%BE%E6%B2%9B%E6%85%88" }
        ]
    },
    {
        number: "05",
        year: "2025",
        title: "下週同樣時間",
        image: "assets/album-05.jpg",
        songs: [
            { name: "搶先看", url: "https://www.bilibili.com/video/BV1ZBLezEEJY/" },
            { name: "下週同樣時間", url: "https://www.bilibili.com/video/BV1Kgj1zwEYe/" },
            { name: "連鎖反應", url: "https://www.bilibili.com/video/BV1XMax6yESa/" },
            { name: "數到十", url: "https://y.qq.com/n/ryqq_v2/mv/002lSm2q1mnPyN" },
            { name: "一抹黃色的天", url: "https://www.douyin.com/jingxuan/search/%E4%B8%80%E6%8A%B9%E9%BB%84%E8%89%B2%E7%9A%84%E5%A4%A9%E6%9B%BE%E6%B2%9B%E6%85%88" },
            { name: "未命名的悲傷", url: "https://www.bilibili.com/video/BV1Z3UEBqEyX/" },
            { name: "不想忘的是…", url: "https://y.qq.com/n/ryqq_v2/mv/001wiG3F3hrQy6" },
            { name: "聽者有心", url: "https://www.bilibili.com/video/BV1D8drBuEEP/" },
            { name: "失眠的人", url: "https://www.bilibili.com/video/BV1iqgkzWEWw/" },
            { name: "最後一次哭", url: "https://www.bilibili.com/video/BV1ZhMEzpESH/" },
            { name: "關於愛這件事", url: "https://y.qq.com/n/ryqq_v2/mv/001FxqfK1VyFK2" },
            { name: "孫尚香", url: "https://www.bilibili.com/video/BV1EdNg6VEgS/" }
        ]
    }
];



/* =========================================
   CREATE RECORD
========================================= */

function createRecord(album, isBeyond = false) {

    const record =
        document.createElement("div");

    record.className = "record";


    

let songsHTML = "";

album.songs.forEach((song, index) => {
    // 兼容两种格式：
    // 专辑歌曲：{ name: "歌曲名", url: "歌曲链接" }
    // 额外单曲："歌曲名"
    const songName =
        typeof song === "string" ? song : song.name;

    const songUrl =
        typeof song === "string" ? "" : (song.url || "");

    songsHTML += `
        <a
            class="song"
            href="${songUrl || "#"}"
            target="_blank"
            rel="noopener noreferrer"
            ${songUrl ? "" : 'onclick="return false;"'}
        >
            <span>
                <span class="song-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>
                ${songName}
            </span>

            <span class="song-arrow">
                ↗
            </span>
        </a>
    `;
});




    record.innerHTML = `

        <div class="record-header">

            <div class="record-cover">

                <img
                    src="${album.image}"
                    alt="${album.title}"
                >

                <div class="vinyl"></div>

            </div>


            <div class="record-info">

                <span class="record-number">
                    ${album.number}
                </span>

                <h3>
                    ${album.title}
                </h3>

                <p>
                    ${isBeyond
                        ? "Songs beyond the albums"
                        : album.year
                    }
                </p>

                <span class="open-text">
                    CLICK TO OPEN
                </span>

            </div>

        </div>


        <div class="song-list">

            <div class="song-list-inner">

                ${songsHTML}

            </div>

        </div>

    `;


    const header =
        record.querySelector(".record-header");


    header.addEventListener("click", () => {

        record.classList.toggle("open");

    });


    return record;

}


/* =========================================
   RENDER ALBUMS
========================================= */

const albumsContainer =
    document.getElementById("albums");


albums.forEach(album => {

    albumsContainer.appendChild(
        createRecord(album)
    );

});


/* =========================================
   SONGS OUTSIDE ALBUMS
========================================= */


/* =========================================
   SONGS OUTSIDE ALBUMS
========================================= */

const singles = {
    number: "EXTRA",
    year: "BEYOND ALBUMS",
    title: "Songs Beyond Albums",
    image: "assets/beyond.jpg",

    songs: [
        {
            name: "一个人想着一个人",
            url: "https://y.qq.com/n/ryqq_v2/mv/u00137gtfy9"
        },
        {
            name: "够爱",
            url: "https://y.qq.com/n/ryqq_v2/mv/c0011c9gne8"
        },
        {
            name: "下个时空再相爱",
            url: "https://www.bilibili.com/video/BV1KvSAYnEsr/"
        },
        {
            name: "眼泪KTV",
            url: "https://y.qq.com/n/ryqq_v2/songDetail/002NWjFL0MoOsP"
        },
        {
            name: "孤单心事",
            url: "https://y.qq.com/n/ryqq_v2/mv/004Urll32AEUAC"
        },
        {
            name: "After Everything",
            url: "https://www.bilibili.com/video/BV1beec6BEse/"
        },
        {
            name: "唱出希望",
            url: "https://y.qq.com/n/ryqq_v2/mv/f0017e1epkb"
        },
        {
            name: "橙色的梦",
            url: "https://y.qq.com/n/ryqq_v2/mv/o00364mnysn"
        },
        {
            name: "说分手的人也会难过",
            url: "https://www.bilibili.com/video/BV1E1YV6REAp/"
        },
        {
            name: "数不尽的星空",
            url: "https://www.bilibili.com/video/BV16MQjBkEjB/"
        },
        {
            name: "泪了",
            url: "https://www.bilibili.com/video/BV1Bs4y1M75V/"
        },
        {
            name: "爱情怎么喊停",
            url: "https://www.bilibili.com/video/BV1qTNm6rE3R/"
        },
        {
            name: "My Darling Child",
            url: "https://www.bilibili.com/video/BV1534y1c7JF/"
        },
        {
            name: "微小的声音",
            url: "https://www.bilibili.com/video/BV1LC2TBFEja/"
        },
        {
            name: "牵手",
            url: "https://www.bilibili.com/video/BV16Z4y1f7o3/"
        },
        {
            name: "终极三国",
            url: "https://www.bilibili.com/video/BV15GAbeuEi7/"
        }
    ]
};

document
    .getElementById("singles")
    .appendChild(createRecord(singles, true));

/* =========================================
   DRAMA
========================================= */

const dramas = [

    {
        year: "2009",
        title: "終極三國",
        role: "孫尚香",
        type: "tv"
    },

    {
        year: "2012",
        title: "終極一班系列",
        role: "雷婷",
        type: "tv"
    },

    {
        year: "2014",
        title: "終極惡女",
        role: "洁客",
        type: "tv"
    },
    {
        year: "2015",
        title: "明若曉溪",
        role: "明曉溪",
        type: "tv"
    },
    {
        year: "2019",
        title: "我們與惡的距離",
        role: "應思悅",
        type: "tv"
    },
    {
        year: "2022",
        title: "親愛的亞當",
        role: "宋品葳",
        type: "tv"
    },
    {
        year: "2023",
        title: "BIG",
        role: "張育淳",
        type: "movie"
    },
    {
        year: "2024",
        title: "太太太厲害",
        role: "鄭美惠",
        type: "tv"
    },
    {
        year: "2026",
        title: "人生列车",
        role: "曾沛慈",
        type: "tv"
    }
    
];


const dramaContainer = document.getElementById("dramas");

function renderDramas() {
    dramaContainer.innerHTML = "";

    dramas.forEach(item => {
        const card = document.createElement("div");
        card.className = "drama-card";

        const link = bilibiliSearch(
            `曾沛慈 ${item.title} 经典片段`
        );

        card.innerHTML = `
            <div class="drama-year">
                ${item.year}
            </div>

            <a
                class="drama-title"
                href="${link}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${item.title}
            </a>

            <div class="drama-role">
                ${item.role}
            </div>
        `;

        dramaContainer.appendChild(card);
    });
}

renderDramas();



/* =========================================
   DRAMA FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        renderDramas(
            button.dataset.filter
        );

    });

});


/* =========================================
   CHENGFENG STAGES
========================================= */


const stages = [
    { name: "初舞台|《一个人想着一个人》", cover: "assets/stage-01.jpg", url: "https://www.bilibili.com/video/BV1nuDgBREJE/" },
    { name: "一公团秀|《一半一半》", cover: "assets/stage-02.jpg", url: "https://www.bilibili.com/video/BV1rqQcBqEmk/" },
    { name: "二公团秀|《篇章》", cover: "assets/stage-03.jpg", url: "https://www.bilibili.com/video/BV1hio9B2EvU/" },
    { name: "二公能力者对决|《言不由衷》", cover: "assets/stage-04.jpg", url: "https://www.bilibili.com/video/BV1SgZFBfE95/" },

    { name: "三公团秀|《第一次爱的人》", cover: "assets/stage-05.jpg", url: "https://www.bilibili.com/video/BV1tZGe6yEnZ/" },
    { name: "三公师姐合作秀|《宝莲》", cover: "assets/stage-06.jpg", url: "https://www.bilibili.com/video/BV1z5GH6xExR/" },
    { name: "三公队长秀|《一样的月光》", cover: "assets/stage-07.jpg", url: "https://www.bilibili.com/video/BV1xaG76tEBt/" },
    { name: "四公团秀|《Susan说》", cover: "assets/stage-08.jpg", url: "https://www.bilibili.com/video/BV1Ub7D6TEjd/" },

    { name: "四公团内双人合作秀|《搁浅》", cover: "assets/stage-09.jpg", url: "https://www.bilibili.com/video/BV1owEu6qEqT/" },
    { name: "五公团秀|《心引力》", cover: "assets/stage-10.jpg", url: "https://www.bilibili.com/video/BV1Chj66wEmX/" },
    { name: "五公双人合作秀|《怎么说我不爱你》", cover: "assets/stage-11.jpg", url: "https://www.bilibili.com/video/BV1usjH6WEoz/" },
    { name: "总决赛团秀|《KNOCK OUT》", cover: "assets/stage-12.jpg", url: "https://www.bilibili.com/video/BV1Bn7s62ExZ/" },
    { name: "总决赛双人合作秀|《会开花的云》", cover: "assets/stage-13.jpg", url: "https://www.bilibili.com/video/BV12w7s6fEih/" },
    { name: "总决赛颁奖典礼|夺冠！！！！", cover: "assets/stage-14.jpg", url: "https://www.bilibili.com/video/BV1A87W6XEbu/" }
];






const stageContainer = document.getElementById("stages");

if (stageContainer) {
    stageContainer.innerHTML = "";

    stages.forEach((stage) => {
        const parts = stage.name.split("|");
        const roundName = parts[0] || "";
        const songName = parts[1] || "";

        const item = document.createElement("article");
        item.className = "stage-item";

        const link = document.createElement("a");
        link.className = "stage-card";
        link.href = stage.url || "#";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        if (!stage.url) {
            link.addEventListener("click", event => {
                event.preventDefault();
            });
        }

        const img = document.createElement("img");
        img.className = "stage-cover";
        img.src = stage.cover;
        img.alt = stage.name;
        img.loading = "lazy";

        const info = document.createElement("div");
        info.className = "stage-info";

        const title = document.createElement("h3");
        title.textContent = `${songName}`;

        const subtitle = document.createElement("p");
        subtitle.textContent = `${roundName}`;

        info.appendChild(title);
        info.appendChild(subtitle);

        link.appendChild(img);
        link.appendChild(info);
        item.appendChild(link);
        stageContainer.appendChild(item);
    });
}

/* =========================================
   WISH WALL - CLOUDBASE
========================================= */

const wishName = document.getElementById("wishName");
const wishText = document.getElementById("wishText");
const sendWish = document.getElementById("sendWish");
const wishTrack = document.getElementById("wishTrack");
const wishCount = document.getElementById("wishCount");

const wishesRef = db.collection("wishes");

let allWishes = [];

function safeText(text) {
    const div = document.createElement("div");
    div.textContent = String(text ?? "");
    return div.innerHTML;
}

function createWishGroup(wishes) {
    const group = document.createElement("div");
    group.className = "wish-group";

    wishes.forEach(wish => {
        const card = document.createElement("div");
        card.className = "wish-card";

        card.innerHTML = `
            <strong>${safeText(wish.name)}</strong>
            <p>${safeText(wish.text)}</p>
        `;

        group.appendChild(card);
    });

    return group;
}

function renderWishes() {
    if (!wishTrack || !wishCount) return;

    wishTrack.innerHTML = "";

    const displayWishes = allWishes.length
        ? allWishes
        : [
            {
                name: "Pets Lover",
                text: "祝 Pets 生日快乐！愿每个舞台都有掌声与热爱。"
            },
            {
                name: "A fan",
                text: "希望你一直做自己喜欢的事情。"
            },
            {
                name: "♥",
                text: "谢谢你的歌声，愿未来继续闪闪发光。"
            }
        ];

    const visibleWishes = displayWishes.slice(0, 15);

    wishTrack.appendChild(createWishGroup(visibleWishes));
    wishTrack.appendChild(createWishGroup(visibleWishes));

    wishCount.textContent = `${allWishes.length} wishes`;
}

// 从 CloudBase 读取最新的 100 条祝福
async function loadWishes() {
    try {
        const result = await wishesRef
            .orderBy("createdAt", "desc")
            .limit(100)
            .get();

        allWishes = result.data || [];
        renderWishes();

        console.log("CloudBase 读取成功，共", allWishes.length, "条祝福");
    } catch (error) {
        console.error("CloudBase 读取祝福失败：", error);
        renderWishes();

        alert(
            "暂时无法读取云端祝福。\n" +
            "请检查安全域名、登录状态和数据库权限。\n" +
            "错误信息：" + (error.message || error)
        );
    }
}

// 先匿名登录，再访问数据库
async function initWishWall() {
    try {
        const { error } = await app.auth.signInAnonymously();

        if (error) {
            throw error;
        }

        console.log("CloudBase 匿名登录成功");
        await loadWishes();
    } catch (error) {
        console.error("CloudBase 初始化或登录失败：", error);
        renderWishes();

        alert(
            "祝福墙连接失败。\n" +
            "请检查匿名登录是否已启用，以及安全域名是否已添加。\n" +
            "错误信息：" + (error.message || error)
        );
    }
}

if (sendWish) {
    sendWish.addEventListener("click", async () => {
        const name = wishName.value.trim() || "Anonymous Fan";
        const text = wishText.value.trim();

        if (!text) {
            alert("请先写下你的祝福 ♥");
            return;
        }

        if (name.length > 40 || text.length > 500) {
            alert("昵称最多 40 个字符，祝福最多 500 个字符。");
            return;
        }

        sendWish.disabled = true;

        try {
            // 确保已登录后才能提交
            const session = await app.auth.getSession();

            if (!session?.data?.session) {
                const { error } = await app.auth.signInAnonymously();

                if (error) {
                    throw error;
                }
            }

            await wishesRef.add({
                name,
                text,
                createdAt: Date.now()
            });

            wishName.value = "";
            wishText.value = "";

            await loadWishes();

            alert("祝福已保存到 CloudBase！♥");
        } catch (error) {
            console.error("CloudBase 写入祝福失败：", error);

            alert(
                "祝福保存失败！\n" +
                "错误信息：" + (error.message || error)
            );
        } finally {
            sendWish.disabled = false;
        }
    });
}

renderWishes();
initWishWall();
