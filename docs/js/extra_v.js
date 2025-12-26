document.addEventListener('DOMContentLoaded', function() {
    // ==================== 全局变量 ====================
    let popupInitialized = false;
    let popupDragged = false;
    let popupHasSlidIn = false;
    let currentTheme = 'christmas';
    let shakeInterval;

    // 将原来的 imageUrls 替换为 videoUrls
    const videoUrls = {
        initial: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/videos/videos_1.webm',
        close: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/videos/videos_2.webm',
        received: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/videos/videos_3.webm'
    };

    // ==================== 1. 创建右上角控制开关 ====================
    function createControlToggle() {
        const toggle = document.createElement('div');
        toggle.id = 'festivalToggle';
        toggle.innerHTML = `
            <span>🎄 节日特效</span>
            <input type="checkbox" id="festivalSwitch" checked style="vertical-align: middle;">
        `;
        document.body.appendChild(toggle);

        const switchBtn = document.getElementById('festivalSwitch');
        const isEnabled = localStorage.getItem('festivalEnabled') !== 'false';
        switchBtn.checked = isEnabled;

        switchBtn.addEventListener('change', function() {
            const enabled = this.checked;
            localStorage.setItem('festivalEnabled', enabled);
            if (enabled) {
                enableFestivalEffects();
            } else {
                disableFestivalEffects();
            }
        });
        
        if (isEnabled) setTimeout(enableFestivalEffects, 800);
    }

    // ==================== 2. 创建弹窗（使用webm） ====================
function createPopup() {
    const container = document.createElement('div');
    container.id = 'festivalPopupContainer';

    container.innerHTML = `
    <div id="festivalPopup">
        <div class="popup-header-bar">
            <span>🎁 圣诞惊喜</span>
            <div class="close-hit-area"><button class="popup-close-btn" id="popupCloseBtn">×</button></div>
        </div>
        <div class="popup-content">
            <div class="art-text" id="popupText">您的圣诞礼物汪</div>
            <div class="popup-image-container">
                <!-- 将img标签替换为video标签 -->
                <video id="popupMedia" autoplay loop muted playsinline 
                       style="width:100%; height:100%; object-fit:cover;">
                    你的浏览器不支持 video 标签。
                </video>
            </div>
            <button class="receive-btn" id="receiveBtn">接收礼物</button>
        </div>
    </div>`;
    document.body.appendChild(container);
    
    // 创建后立即设置初始视频源
    setTimeout(() => {
        const videoEl = document.getElementById('popupMedia');
        if(videoEl) videoEl.src = videoUrls.initial;
    }, 50);
    
    return container;
}

    // GIF加载失败处理函数
    function handleGifError(imgElement) {
        const container = imgElement.parentElement;
        container.innerHTML = `
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#888;flex-direction:column;gap:10px;">
                <span style="font-size:24px;">🎁</span>
                <span>GIF加载失败，使用静态图片</span>
            </div>`;
        
        // 尝试加载静态图片后备
        const imgSrc = imgElement.src;
        const staticSrc = imgSrc.replace('.gif', '.webp');
        setTimeout(() => {
            const fallbackImg = new Image();
            fallbackImg.onload = function() {
                container.innerHTML = `<img src="${staticSrc}" style="width:100%;height:100%;object-fit:cover;">`;
            };
            fallbackImg.onerror = function() {
                container.innerHTML = `
                    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#888;">
                        <span>图片无法加载</span>
                    </div>`;
            };
            fallbackImg.src = staticSrc;
        }, 1000);
    }

    // ==================== 3. 弹窗滑入效果 ====================
    function slideInPopup(container) {
        if (!popupDragged && !popupHasSlidIn) {
            container.classList.add('slide-in');
            popupHasSlidIn = true;
            
            setTimeout(() => {
                container.classList.remove('slide-in');
                container.style.left = '10px';
            }, 1500);
        }
    }

    // ==================== 4. 弹窗拖拽功能 ====================
    function setupPopupWithDrag(container, popup) {
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        const startDrag = function(e) {
            popupDragged = true;
            container.classList.remove('slide-in');
            container.style.transition = 'none';
            
            isDragging = true;
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            const rect = container.getBoundingClientRect();
            startX = clientX - rect.left;
            startY = clientY - rect.top;
            initialLeft = rect.left;
            initialTop = rect.top;

            e.preventDefault();
        };
        
        const doDrag = function(e) {
            if (!isDragging) return;
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            const newX = clientX - startX;
            const newY = clientY - startY;
            const maxX = window.innerWidth - container.offsetWidth;
            const maxY = window.innerHeight - container.offsetHeight;
            container.style.left = Math.max(0, Math.min(newX, maxX)) + 'px';
            container.style.top = Math.max(0, Math.min(newY, maxY)) + 'px';
        };
        
        const stopDrag = function() {
            isDragging = false;
        };

        const headerBar = popup.querySelector('.popup-header-bar');
        headerBar.style.cursor = 'move';
        headerBar.addEventListener('mousedown', startDrag);
        headerBar.addEventListener('touchstart', startDrag);
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('touchmove', doDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);

        const hitArea = popup.querySelector('.close-hit-area');
            if (hitArea) {
            ['mousedown', 'touchstart'].forEach(evt => {
                hitArea.addEventListener(evt, (e) => e.stopPropagation());
            });
        }
    }

// ==================== 5. 弹窗交互逻辑 ====================
function setupPopupInteraction(container, popup) {
    const closeBtn = document.getElementById('popupCloseBtn');
    const receiveBtn = document.getElementById('receiveBtn');
    const popupMedia = document.getElementById('popupMedia'); // 变量名修正：popupImage -> popupMedia
    const popupText = document.getElementById('popupText');

    let received = false;

    // 1. 关闭按钮事件
    closeBtn.addEventListener('click', function() {
        // 【修复点1】任何关闭操作都立即停止抖动
        stopShaking();
        if (!received) {
            popupText.textContent = '把这盒东西扔出去！';
            popupMedia.src = videoUrls.close;
            setTimeout(() => {
                container.classList.add('fade-out-slow');
                setTimeout(() => container.remove(), 12000);
            }, 300);
        } else {
            container.remove();
        }
    });

    // 2. 接收按钮事件
    receiveBtn.addEventListener('click', function() {
        // 【修复点2】接收后也立即停止抖动
        stopShaking();
        received = true;
        popupMedia.src = videoUrls.received; // 【修复点3】变量名修正
        popupText.textContent = 'Anon犬想抱抱你';
        receiveBtn.textContent = '已收到 ❤️';
        receiveBtn.disabled = true;
        receiveBtn.style.background = '#ccc';
        // 此处无需再调用 stopShaking()，已在开头调用
    });
}
    // ==================== 6. 弹窗周期性抖动 ====================
    function startShaking(popup) {
        stopShaking();
        
        function triggerShake() {
            popup.classList.add('shaking');
            setTimeout(() => popup.classList.remove('shaking'), 800);
            
            const nextInterval = 300 + Math.random() * 400;
            shakeInterval = setTimeout(triggerShake, nextInterval);
        }
        
        setTimeout(triggerShake, 2000);
    }
    
    function stopShaking() {
        if (shakeInterval) {
            clearTimeout(shakeInterval);
            shakeInterval = null;
        }
    }

    // ==================== 7. 节日装饰效果 ====================
    function createFestivalDecorations(theme) {
        document.querySelectorAll('.festival-decoration').forEach(el => el.remove());

        if (theme === 'christmas') {
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const snowflake = document.createElement('div');
                    snowflake.className = 'snowflake festival-decoration';
                    const size = Math.random() * 5 + 5;
                    const startLeft = Math.random() * 100;
                    snowflake.style.width = size + 'px';
                    snowflake.style.height = size + 'px';
                    snowflake.style.left = startLeft + 'vw';
                    snowflake.style.opacity = Math.random() * 0.5 + 0.4;
                    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
                    document.body.appendChild(snowflake);
                    setTimeout(() => snowflake.remove(), 10000);
                }, i * 200);
            }
        }
    }

    // ==================== 8. 启用/禁用特效 ====================
    function enableFestivalEffects() {
        if (!popupInitialized) {
            const container = createPopup();
            const popup = document.getElementById('festivalPopup');
            
            setupPopupWithDrag(container, popup);
            setupPopupInteraction(container, popup);
            
            setTimeout(() => {
                slideInPopup(container);
            }, 100);
            
            startShaking(popup);
            popupInitialized = true;
        } else {
            const existingContainer = document.getElementById('festivalPopupContainer');
            if (!existingContainer) {
                const container = createPopup();
                const popup = document.getElementById('festivalPopup');
                setupPopupWithDrag(container, popup);
                setupPopupInteraction(container, popup);
                
                setTimeout(() => {
                    slideInPopup(container);
                }, 100);
                
                startShaking(popup);
            }
        }
        createFestivalDecorations(currentTheme);
    }

    function disableFestivalEffects() {
        const container = document.getElementById('festivalPopupContainer');
        if (container) {
            popupHasSlidIn = false;
            container.remove();
        }
        document.querySelectorAll('.festival-decoration').forEach(el => el.remove());
        stopShaking();
    }

    // ==================== 初始化执行 ====================
    createControlToggle();
    
    window.addEventListener('resize', function() {
        const container = document.getElementById('festivalPopupContainer');
        if (container && !popupDragged) {
            if (popupHasSlidIn) {
                container.style.left = '10px';
            }
        }
    });
});