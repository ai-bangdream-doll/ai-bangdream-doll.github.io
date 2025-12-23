---
title: '[测试]AI娃娃两则'
description: '[测试]AI娃娃两则'
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
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    /* 视频容器 - 核心修改：创建固定比例的占位框 */
    .video-container {
        position: relative;
        width: 100%;
        margin: 0 auto 20px;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        background-color: #000; /* 黑边的颜色 */
    }

    /* 16:9 容器的占位比例 (9 / 16 * 100% = 56.25%) */
    .video-container.aspect-16-9 {
        padding-top: 56.25%; /* 关键：创建16:9的占位高度 */
        max-width: 800px; /* 固定最大宽度 */
    }

    /* 9:16 容器的占位比例 (16 / 9 * 100% ≈ 177.78%) */
    .video-container.aspect-9-16 {
        max-width: 450px; /* 固定竖屏模式的宽度 */
        padding-top: 809.52px; /* 计算得出：450 * 177.78% = 800px，保持一致的高度 */
        margin-left: auto;
        margin-right: auto;
    }

    /* 响应式调整：在移动端减小容器宽度 */
    @media (max-width: 768px) {
        .video-container.aspect-16-9 {
            max-width: 600px;
        }
        .video-container.aspect-9-16 {
            max-width: 300px;
            padding-top: 533.33px; /* 300 * 177.78% */
        }
    }

    @media (max-width: 480px) {
        .video-container.aspect-16-9 {
            max-width: 350px;
        }
        .video-container.aspect-9-16 {
            max-width: 200px;
            padding-top: 355.56px; /* 200 * 177.78% */
        }
    }

    /* 视频元素 - 关键修改：在占位容器内绝对居中并完整显示 */
    .video-container video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain; /* 关键：视频完整显示，不足处留黑边 */
        background-color: #000; /* 确保背景为黑色 */
    }

    /* 宽高比选择器样式 */
    .aspect-selector {
        text-align: center;
        margin-bottom: 15px;
    }

    .aspect-options {
        display: inline-flex;
        gap: 10px;
        background: #f0f0f0;
        padding: 8px;
        border-radius: 8px;
    }

    .aspect-btn {
        padding: 6px 12px;
        border: 1px solid #333;
        background: transparent;
        color: #333;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
        transition: all 0.3s;
    }

    .aspect-btn.active {
        background: #333;
        color: white;
    }

    .aspect-btn:hover:not(.active) {
        background: #e0e0e0;
    }

    /* 视频信息样式 */
    .video-info {
        margin-top: 20px;
    }

    .video-title {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #333;
    }

    .video-description {
        color: #666;
        line-height: 1.6;
    }
</style>

<div class="video-detail">
    <!-- 宽高比选择器 -->
    <div class="aspect-selector">
        <div class="aspect-options">
            <button class="aspect-btn active" data-aspect="16-9">16:9</button>
            <button class="aspect-btn" data-aspect="9-16">9:16</button>
        </div>
    </div>

    <!-- 视频容器 -->
    <div id="videoContainer" class="video-container aspect-16-9">
        <video controls>
            <source src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/videos/vv/vv0.mp4" type="video/mp4">
            您的浏览器不支持视频播放。
        </video>
    </div>

    <!-- 视频信息 -->
    <div class="video-info">
        <h2 class="video-title">[测试]AI娃娃两则</h2>
        作者：<a href="https://space.bilibili.com/146030169?spm_id_from=333.1007.0.0" target="_blank">水芯笔没盖帽</a>
        <p class="video-description">测试视频</p>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const videoContainer = document.getElementById('videoContainer');
        const aspectBtns = document.querySelectorAll('.aspect-btn');
        
        // 宽高比切换 - 逻辑简化，仅切换控制占位比例的CSS类
        aspectBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const aspect = this.dataset.aspect;
                
                // 更新按钮状态
                aspectBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // 更新容器类：移除所有比例类，添加新的
                videoContainer.classList.remove('aspect-16-9', 'aspect-9-16');
                videoContainer.classList.add(`aspect-${aspect}`);
            });
        });
    });
</script>