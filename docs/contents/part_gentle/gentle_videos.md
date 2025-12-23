---
title: 视频中心
layout: default
description: 角色视频集合
hide:
  - navigation  # 隐藏左侧导航
  - toc         # 隐藏右侧目录（可选）
---

<style>
/* 视频画廊样式 */
.video-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.video-card {
    background: var(--md-default-bg-color);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid var(--md-default-fg-color--lightest);
    height: 100%;
}

.video-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.video-thumbnail {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
}

.video-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.video-card:hover .video-thumbnail img {
    transform: scale(1.05);
}

.video-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.7);
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.video-play-btn:hover {
    background: rgba(0,0,0,0.9);
    transform: translate(-50%, -50%) scale(1.1);
}

.video-duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8em;
}

.video-info {
    padding: 15px;
}

.video-title {
    font-size: 1.1em;
    font-weight: bold;
    margin: 0 0 8px 0;
    color: var(--md-primary-fg-color);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.video-description {
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
    margin: 0 0 10px 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.video-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    color: var(--md-default-fg-color--light);
    border-top: 1px dashed var(--md-default-fg-color--lightest);
    padding-top: 10px;
}

.video-date {
    opacity: 0.8;
}

.video-views {
    display: flex;
    align-items: center;
    gap: 4px;
}

.video-views::before {
    content: "👁️";
}

.video-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
}

.video-tag {
    background: var(--md-accent-fg-color--transparent);
    color: var(--md-accent-fg-color);
    font-size: 0.7em;
    padding: 2px 8px;
    border-radius: 10px;
}

/* 筛选器 */
.filter-container {
    margin-bottom: 30px;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}

.filter-btn {
    padding: 8px 16px;
    border: 1px solid var(--md-primary-fg-color);
    background: transparent;
    color: var(--md-primary-fg-color);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
    background: var(--md-primary-fg-color);
    color: white;
}

.search-box {
    width: 100%;
    max-width: 300px;
    padding: 10px 15px;
    border: 1px solid var(--md-default-fg-color--lightest);
    border-radius: 25px;
    background: var(--md-default-bg-color);
    color: var(--md-default-fg-color);
}

/* 无结果提示 */
.no-results {
    text-align: center;
    padding: 40px;
    color: var(--md-default-fg-color--light);
    grid-column: 1 / -1;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .video-gallery {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
    }
    
    .video-thumbnail {
        height: 150px;
    }
}

@media (max-width: 480px) {
    .video-gallery {
        grid-template-columns: 1fr;
        gap: 15px;
    }
}
</style>

<div class="filter-container">
    <input type="text" class="search-box" placeholder="搜索视频标题或作者名..." id="videoSearch">
</div>

<div class="video-gallery" id="videoGallery">
<a href="../videos/gv0/gv0" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv0.png" alt="测试视频" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">[测试]雨后小故事</h3>
                <p class="video-description">水芯笔没盖帽</p>
            </div>
        </div>
    </a>
<a href="../videos/gv1/gv1" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv1.png" alt="带着anon犬去上班" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">带着anon犬去上班</h3>
                <p class="video-description">太阳神大菠萝a</p>
            </div>
        </div>
    </a>
<a href="../videos/gv2/gv2" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv2.png" alt="外出游玩的粉毛大狗跟主人走散了..." loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">外出游玩的粉毛大狗跟主人走散了...</h3>
                <p class="video-description">千草王爱音</p>
            </div>
        </div>
    </a>
<a href="../videos/gv3/gv3" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv3.png" alt="贤惠soyo狸妈妈和聪明anon犬女儿" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">贤惠soyo狸妈妈和聪明anon犬女儿</h3>
                <p class="video-description">柔情锂砂镍</p>
            </div>
        </div>
    </a>
<a href="../videos/gv4/gv4" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv4.png" alt="天素罗被抓走的下场是什么呢" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">天素罗被抓走的下场是什么呢</h3>
                <p class="video-description">Mihrticy</p>
            </div>
        </div>
    </a>
<a href="../videos/gv5/gv5" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv5.png" alt="天素罗悠闲的一天" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">天素罗悠闲的一天</h3>
                <p class="video-description">卢浮宫保安</p>
            </div>
        </div>
    </a>
<a href="../videos/gv6/gv6" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv6.png" alt="小anon想要ccb！?" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">小anon想要ccb！?</h3>
                <p class="video-description">千早soyo狸</p>
            </div>
        </div>
    </a>
<a href="../videos/gv7/gv7" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv7.png" alt="【长剧情】anon母子随遇而安的生活:意外悄然而至" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">【长剧情】anon母子随遇而安的生活:意外悄然而至</h3>
                <p class="video-description">三月MOONMOONMOON_</p>
            </div>
        </div>
    </a>
<a href="../videos/gv8/gv8" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv8.png" alt="神社巫女素樱狸和申必小柴犬小anon" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">神社巫女素樱狸和申必小柴犬小anon</h3>
                <p class="video-description">某只滑稽</p>
            </div>
        </div>
    </a>
<a href="../videos/gv9/gv9" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv9.png" alt="soyo狸你不许偷喝洗澡水！那是我的红茶！" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">soyo狸你不许偷喝洗澡水！那是我的红茶！</h3>
                <p class="video-description">让我想想我还能说什么</p>
            </div>
        </div>
    </a>
<a href="../videos/gv10/gv10" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv10.png" alt="天素罗不是扫玩意" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">天素罗不是扫玩意</h3>
                <p class="video-description">阿贝木子米</p>
            </div>
        </div>
    </a>
<a href="../videos/gv11/gv11" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv11.png" alt="【番外】anon母子的日常（温馨无略）" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">【番外】anon母子的日常（温馨无略）</h3>
                <p class="video-description">愚煤人</p>
            </div>
        </div>
    </a>
<a href="../videos/gv12/gv12" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv12.png" alt="晚安，小祥" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">晚安，小祥</h3>
                <p class="video-description">百里天雷_Animus</p>
            </div>
        </div>
    </a>
<a href="../videos/gv13/gv13" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv13.png" alt="soyorin和小天素罗亲密互动" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">soyorin和小天素罗亲密互动</h3>
                <p class="video-description">野生昆虫菌</p>
            </div>
        </div>
    </a>
<a href="../videos/gv14/gv14" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv14.png" alt="【剧情向】要怎么处理淘气的anon犬！" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">【剧情向】要怎么处理淘气的anon犬！</h3>
                <p class="video-description">5000ml</p>
            </div>
        </div>
    </a>
<a href="../videos/gv15/gv15" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv15.png" alt="soyo教你如何饲养anon犬（附妙妙工具使用方法）" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">soyo教你如何饲养anon犬（附妙妙工具使用方法）</h3>
                <p class="video-description">火球术重度依赖</p>
            </div>
        </div>
    </a>
<a href="../videos/gv16/gv16" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv16.png" alt="【Fu MyGo】在公园露营的可爱猫灯" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">【Fu MyGo】在公园露营的可爱猫灯</h3>
                <p class="video-description">_黄油牛角包_</p>
            </div>
        </div>
    </a>
<a href="../videos/gv17/gv17" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv17.png" alt="（爱向）垃圾袋里哭唧唧，洗干净后笑眯眯" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">（爱向）垃圾袋里哭唧唧，洗干净后笑眯眯</h3>
                <p class="video-description">气槽-official</p>
            </div>
        </div>
    </a>
<a href="../videos/gv18/gv18" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv18.png" alt="(纯爱、无略)大小anon犬和soyo狸一家的温馨日常！" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">(纯爱、无略)大小anon犬和soyo狸一家的温馨日常！</h3>
                <p class="video-description">折纸厨</p>
            </div>
        </div>
    </a>
<a href="../videos/gv19/gv19" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv19.png" alt="【治愈】mygo经典老歌之《同桌的灯》" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">【治愈】mygo经典老歌之《同桌的灯》</h3>
                <p class="video-description">XYZ的世界</p>
            </div>
        </div>
    </a>
<a href="../videos/gv20/gv20" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv20.png" alt="立希狼，为企鹅灯的生日准备最独一无二的礼物" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">立希狼，为企鹅灯的生日准备最独一无二的礼物</h3>
                <p class="video-description">louisssssssss</p>
            </div>
        </div>
    </a>
<a href="../videos/gv21/gv21" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv21.png" alt="睦儿这个受宠丨间章：灰斑睦无忧无虑的童年" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">睦儿这个受宠丨间章：灰斑睦无忧无虑的童年</h3>
                <p class="video-description">爽食要乐奈</p>
            </div>
        </div>
    </a>
<a href="../videos/gv22/gv22" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv22.png" alt="Anon犬的宝宝学走路日记！" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">Anon犬的宝宝学走路日记！</h3>
                <p class="video-description">但还是喜欢嘉然小姐</p>
            </div>
        </div>
    </a>
<a href="../videos/gv23/gv23" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv23.png" alt="胖天素罗的来历（配音版）" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">胖天素罗的来历（配音版）</h3>
                <p class="video-description">常年在各处游荡的钻头</p>
            </div>
        </div>
    </a>
<a href="../videos/gv24/gv24" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv24.png" alt="在垃圾桶边上捡到的野生soyo狸" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">在垃圾桶边上捡到的野生soyo狸</h3>
                <p class="video-description">扶桑雪莲</p>
            </div>
        </div>
    </a>
<a href="../videos/gv25/gv25" class="video-link">
        <div class="video-card" data-tags="">
            <div class="video-thumbnail">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/cover/gv25.png" alt="Soyo狸：圣诞快乐，欧耶～" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">Soyo狸：圣诞快乐，欧耶～</h3>
                <p class="video-description">若叶睦叶村</p>
            </div>
        </div>
    </a>

</div>

<div class="no-results" id="noResults" style="display: none;">
    <p>没有找到符合条件的视频</p>
</div>

<script>
// 视频画廊筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchBox = document.getElementById('videoSearch');
    const videoCards = document.querySelectorAll('.video-card');
    const noResults = document.getElementById('noResults');
    
    let currentFilter = 'all';
    let currentSearch = '';
    
    // 筛选按钮点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            filterVideos();
        });
    });
    
    // 搜索框输入事件
    searchBox.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        filterVideos();
    });
    
    // 筛选函数
    function filterVideos() {
        let visibleCount = 0;
        
        videoCards.forEach(card => {
            const tags = card.dataset.tags.toLowerCase();
            const title = card.querySelector('.video-title').textContent.toLowerCase();
            const description = card.querySelector('.video-description').textContent.toLowerCase();
            
            // 检查筛选条件
            const filterLower = currentFilter.toLowerCase();
            const matchesFilter = currentFilter === 'all' || 
                tags.includes(filterLower);
            
            // 检查搜索条件
            const matchesSearch = currentSearch === '' || 
                title.includes(currentSearch) || 
                description.includes(currentSearch) ||
                tags.includes(currentSearch);
            
            // 显示/隐藏卡片
            if (matchesFilter && matchesSearch) {
                card.parentElement.style.display = 'block';
                visibleCount++;
            } else {
                card.parentElement.style.display = 'none';
            }
        });
        
        // 显示/隐藏无结果提示
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
    
    // 初始化
    filterVideos();
});
</script>

