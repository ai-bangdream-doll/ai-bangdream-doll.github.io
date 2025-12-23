---
title: '胖胖天素罗的恶作剧方法(喵梦TIME)'
description: '制作soyo球球永动机的方法！'
layout: video
hide:
  - navigation  
  - toc
---

<style>
/* 视频详情页样式 */
.video-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

/* 视频容器 - 支持16:9和9:16自适应 */
.video-container {
    position: relative;
    width: 100%;
    margin: 0 auto 20px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    background-color: #000;
}

/* 默认16:9宽高比 */
.video-container.aspect-16-9 {
    max-width: 800px; /* 最大宽度限制 */
    aspect-ratio: 16/9;
}

/* 9:16竖屏宽高比 */
.video-container.aspect-9-16 {
    max-width: 450px; /* 竖屏视频的最大宽度 */
    aspect-ratio: 9/16;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .video-container.aspect-9-16 {
        max-width: 350px;
    }
}

@media (max-width: 480px) {
    .video-container.aspect-9-16 {
        max-width: 280px;
    }
}

/* 确保iframe充满容器 */
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

/* 视频控制面板 */
.video-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    padding: 15px 10px 5px;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 10;
}

.video-container:hover .video-controls {
    opacity: 1;
}

.play-btn {
    background: var(--md-primary-fg-color, #3f51b5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-bar {
    flex: 1;
    height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: 2px;
    margin: 0 10px;
    position: relative;
    cursor: pointer;
}

.progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--md-primary-fg-color, #3f51b5);
    width: 0%;
}

.time-display {
    color: white;
    font-size: 12px;
    min-width: 90px;
}

.volume-control {
    display: flex;
    align-items: center;
    margin-left: 8px;
}

.volume-slider {
    width: 50px;
    margin-left: 5px;
}

.fullscreen-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-left: 8px;
}

/* 宽高比选择器 */
.aspect-selector {
    text-align: center;
    margin-bottom: 15px;
}

.aspect-options {
    display: inline-flex;
    gap: 10px;
    background: #f5f5f5;
    padding: 8px;
    border-radius: 8px;
}

.aspect-btn {
    padding: 6px 12px;
    border: 1px solid #3f51b5;
    background: transparent;
    color: #3f51b5;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: all 0.3s;
}

.aspect-btn.active {
    background: #3f51b5;
    color: white;
}

.aspect-btn:hover:not(.active) {
    background: rgba(63, 81, 181, 0.1);
}
</style>

<div class="video-detail">
    <!-- 宽高比选择器 -->
    <div class="aspect-selector">
        <div class="aspect-options">
            <button class="aspect-btn active" data-aspect="16-9">16:9 横屏</button>
            <button class="aspect-btn" data-aspect="9-16">9:16 竖屏</button>
        </div>
    </div>
    
    <!-- 视频播放器容器 -->
    <div class="video-container aspect-16-9" id="videoContainer">
        <!-- 使用外部视频播放器 -->
        <iframe 
            src="https://www.youtube.com/embed/Y_N9gvqT-AQ?si=H_Qb_PQpIPLJ6s_M" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('videoContainer');
    const aspectBtns = document.querySelectorAll('.aspect-btn');
    
    // 宽高比切换
    aspectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const aspect = this.dataset.aspect;
            
            // 更新按钮状态
            aspectBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 更新容器类
            videoContainer.className = 'video-container';
            videoContainer.classList.add(`aspect-${aspect}`);
        });
    });
    
    // 全屏功能
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                videoContainer.requestFullscreen().catch(err => {
                    console.log(`全屏请求失败: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
});
</script>
