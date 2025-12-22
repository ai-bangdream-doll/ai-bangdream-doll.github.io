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
    <input type="text" class="search-box" placeholder="搜索视频标题..." id="videoSearch">
</div>

<div class="video-gallery" id="videoGallery">
<a href="../videos/bv0/bv0" class="video-link">
        <div class="video-card" data-tags="测试">
            <div class="video-thumbnail">
                <img src="https://cdn.jsdelivr.net/gh/Shuixin-xdu/Shuixin-xdu.github.io@main/docs/contents/part_bizarre/videos/bv0/bv0.png" alt="测试视频" loading="lazy">
                <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">[测试]【阿脓犬】垃圾场大冒险（坏结局）</h3>
                <p class="video-description">这是一个测试视频</p>
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

