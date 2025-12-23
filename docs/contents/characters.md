---
title: 角色图鉴
layout: default
hide:
  - navigation
  - toc
---

<style>
/* 角色卡片样式 */
.character-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.character-card {
    height: 100%; /* 占满容器高度 */
    display: flex;
    flex-direction: column; /* 垂直排列 */
}

.character-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.character-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid var(--md-default-fg-color--lightest);
}

.character-info {
    padding: 15px;
}

.character-name {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0 0 5px 0;
    color: var(--md-primary-fg-color);
}

.character-description {
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
    margin: 0;
    line-height: 1.4;
}

.character-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.character-tags {
    margin-top: auto; /* 推到容器底部 */
    flex-shrink: 0; /* 防止被压缩 */
}

.tag {
    display: inline-block;
    background: var(--md-accent-fg-color--transparent);
    color: var(--md-accent-fg-color);
    font-size: 0.7em;
    padding: 2px 8px;
    border-radius: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
}

/* 筛选器样式 */
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

/* 空状态 */
.no-results {
    text-align: center;
    padding: 40px;
    color: var(--md-default-fg-color--light);
    grid-column: 1 / -1;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .character-container {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 15px;
    }
    
    .character-image {
        height: 180px;
    }
}

@media (max-width: 480px) {
    .character-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    
    .character-image {
        height: 150px;
    }
}
</style>

<!-- 筛选器 -->
<div class="filter-container">
    <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">全部</button>
        <button class="filter-btn" data-filter="Anon">Anon</button>
        <button class="filter-btn" data-filter="Soyo">Soyo</button>
        <button class="filter-btn" data-filter="Tomori">Tomori</button>
        <button class="filter-btn" data-filter="Taki">Taki</button>
        <button class="filter-btn" data-filter="Rana">Rana</button>
        <button class="filter-btn" data-filter="Saki">Saki</button>
        <button class="filter-btn" data-filter="Mutsumi">Mutsumi</button>
        <button class="filter-btn" data-filter="Uika">Uika</button>
        <button class="filter-btn" data-filter="Umiri">Umiri</button>
        <button class="filter-btn" data-filter="...">...</button>
    </div>
    <input type="text" class="search-box" placeholder="搜索角色名称..." id="characterSearch">
</div>

<!-- 角色卡片容器 -->
<div class="character-container" id="characterContainer">

    <!-- 角色1 -->
    <a href="../characters/anon_dog" class="character-link">
        <div class="character-card" data-tags="Anon">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/anon_dog.png" alt="Anon犬" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Anon犬</h3>
                <p class="character-description">
                粉色棉花小狗，喜好水果三明治，会唐笑唐哭，性格(通常)调皮活泼。
                </p>
                <div class="character-tags">
                    <span class="tag">Anon</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色2 -->
    <a href="../characters/soyo_fox" class="character-link">
        <div class="character-card" data-tags="Soyo">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/soyo_fox.png" alt="Soyo狸" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Soyo狸</h3>
                <p class="character-description">
                亚麻棕棉花小狐狸，喜好红茶蛋糕，会唐哭，性格(通常)温顺，较机灵。
                </p>
                <div class="character-tags">
                    <span class="tag">Soyo</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色3 -->
    <a href="../characters/tomori_penguin" class="character-link">
        <div class="character-card" data-tags="Tomori">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin.png" alt="Tomori企鹅" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Tomori企鹅</h3>
                <p class="character-description">
                呆萌呆萌的棉花小企鹅?(存疑)，喜欢收集，会咕咕嘎嘎。
                </p>
                <div class="character-tags">
                    <span class="tag">Tomori</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色4 -->
    <a href="../characters/taki_wolf" class="character-link">
        <div class="character-card" data-tags="Taki">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/taki_wolf.png" alt="Taki狼" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Taki狼</h3>
                <p class="character-description">
                黑棕棉花小狼，喜欢熊猫和Tomori企鹅(?)，喂食Rana猫？哈？
                </p>
                <div class="character-tags">
                    <span class="tag">Taki</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色5 -->
    <a href="../characters/rana_cat" class="character-link">
        <div class="character-card" data-tags="Rana">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/rana_cat.png" alt="Rana猫" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Rana猫</h3>
                <p class="character-description">
                银白色棉花异瞳小猫，喜欢吃抹茶味的食物，调皮灵动，喜欢恶作剧。
                </p>
                <div class="character-tags">
                    <span class="tag">Rana</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色6 -->
    <a href="../characters/umiri_wolf" class="character-link">
        <div class="character-card" data-tags="Umiri">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/umiri_wolf.png" alt="Umiri狼" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Umiri狼</h3>
                <p class="character-description">
                黑色率直棉花小狼，表面上比较高冷难以接近，战斗力较强，靠谱利索。
                </p>
                <div class="character-tags">
                    <span class="tag">Umiri</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色7 -->
    <a href="../characters/uika_dog" class="character-link">
        <div class="character-card" data-tags="Uika">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/uika_dog.png" alt="Uika犬" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Uika犬</h3>
                <p class="character-description">
                温柔的浅金黄色棉花小狗，<del>忠于</del>喜欢Saki猫，通常乖巧阳光，待人温暖，但...
                </p>
                <div class="character-tags">
                    <span class="tag">Uika犬</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色8 -->
    <a href="../characters/mutsumi_rabbit" class="character-link">
        <div class="character-card" data-tags="Mutsumi">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/mutsumi_rabbit.png" alt="Mutsumi兔" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Mutsumi兔</h3>
                <p class="character-description">
                浅绿色三无棉花小兔子，喜欢黄瓜，表情变化少十分人机，通常温顺，偶尔<del>变脸</del><del>精分</del>████。
                </p>
                <div class="character-tags">
                    <span class="tag">Mutsumi</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色9 -->
    <a href="../characters/nyamu_cat" class="character-link">
        <div class="character-card" data-tags="Nyamu">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/nyamu_cat.png" alt="Nyamu猫" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Nyamu猫</h3>
                <p class="character-description">
                紫色调皮棉花小猫，曾经高人气<del>但过气了</del>的网红猫，成天想办法整活。
                </p>
                <div class="character-tags">
                    <span class="tag">Nyamu</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色10 -->
    <a href="../characters/saki_cat" class="character-link">
        <div class="character-card" data-tags="Saki">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/saki_cat.png" alt="Saki猫" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">Saki猫</h3>
                <p class="character-description">
                浅蓝色软糯棉花小猫，喜欢音乐，勤奋，工作地点随机出现，但也会哈气。
                </p>
                <div class="character-tags">
                    <span class="tag">Saki</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色11 -->
    <a href="../characters/soyo_temsora" class="character-link">
        <div class="character-card" data-tags="Soyo">
            <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/soyo_temsora.png" alt="天素罗" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">天素罗</h3>
                <p class="character-description">
                天妇罗炸虾状的棉花小生物，像小精灵一样散布于各种群系，不过水中最为常见，喜好虾米和薯片，会“欧耶！欧耶！”的叫。
                </p>
                <div class="character-tags">
                    <span class="tag">Soyo</span>
                </div>
            </div>
        </div>
    </a>

</div>

<!-- 无结果提示（隐藏） -->
<div class="no-results" id="noResults" style="display: none;">
    <p>没有找到符合条件的角色</p>
</div>

<script>
// 筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchBox = document.getElementById('characterSearch');
    const characterCards = document.querySelectorAll('.character-card');
    const characterContainer = document.getElementById('characterContainer');
    const noResults = document.getElementById('noResults');
    
    let currentFilter = 'all';
    let currentSearch = '';
    
    // 筛选按钮点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新激活状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 更新筛选器
            currentFilter = this.dataset.filter;
            console.log('当前筛选:', currentFilter); // 调试用
            filterCharacters();
        });
    });
    
    // 搜索框输入事件
    searchBox.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        filterCharacters();
    });
    
    // 修复后的筛选函数
    function filterCharacters() {
        let visibleCount = 0;
        
        characterCards.forEach(card => {
            const tags = card.dataset.tags.toLowerCase();
            const name = card.querySelector('.character-name').textContent.toLowerCase();
            
            // 修复这里：将 currentFilter 也转为小写
            const filterLower = currentFilter.toLowerCase();
            const matchesFilter = currentFilter === 'all' || 
                tags.includes(filterLower);
            
            const matchesSearch = currentSearch === '' || 
                name.includes(currentSearch) || 
                tags.includes(currentSearch);
            
            // 调试信息（可选）
            // console.log('卡片:', name, '标签:', tags, '匹配筛选:', matchesFilter);
            
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
    filterCharacters();
});
</script>