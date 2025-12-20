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
    background: var(--md-default-bg-color);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid var(--md-default-fg-color--lightest);
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
    margin-top: 8px;
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
        <button class="filter-btn" data-filter="主角">主角</button>
        <button class="filter-btn" data-filter="配角">配角</button>
        <button class="filter-btn" data-filter="反派">反派</button>
        <button class="filter-btn" data-filter="npc">NPC</button>
    </div>
    <input type="text" class="search-box" placeholder="搜索角色名称..." id="characterSearch">
</div>

<!-- 角色卡片容器 -->
<div class="character-container" id="characterContainer">

    <!-- 角色1 -->
    <a href="characters/zhangsan" class="character-link">
        <div class="character-card" data-tags="主角 剑士">
            <img src="../images/characters/zhangsan.jpg" alt="张三" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">张三</h3>
                <p class="character-description">来自东方的剑术大师，性格沉稳，剑法凌厉。</p>
                <div class="character-tags">
                    <span class="tag">主角</span>
                    <span class="tag">剑士</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色2 -->
    <a href="characters/lisi" class="character-link">
        <div class="character-card" data-tags="配角 法师">
            <img src="../images/characters/lisi.jpg" alt="李四" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">李四</h3>
                <p class="character-description">神秘的魔法师，掌握着古老的咒语。</p>
                <div class="character-tags">
                    <span class="tag">配角</span>
                    <span class="tag">法师</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色3 -->
    <a href="characters/wangwu" class="character-link">
        <div class="character-card" data-tags="反派 刺客">
            <img src="../images/characters/wangwu.jpg" alt="王五" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">王五</h3>
                <p class="character-description">影子中的刺客，行动诡秘，出手狠辣。</p>
                <div class="character-tags">
                    <span class="tag">反派</span>
                    <span class="tag">刺客</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色4 -->
    <a href="characters/zhaoliu" class="character-link">
        <div class="character-card" data-tags="npc 商人">
            <img src="../images/characters/zhaoliu.jpg" alt="赵六" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">赵六</h3>
                <p class="character-description">旅行商人，售卖各种稀有物品。</p>
                <div class="character-tags">
                    <span class="tag">NPC</span>
                    <span class="tag">商人</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色5 -->
    <a href="characters/qianqi" class="character-link">
        <div class="character-card" data-tags="主角 射手">
            <img src="../images/characters/qianqi.jpg" alt="钱七" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">钱七</h3>
                <p class="character-description">神射手，百发百中，眼神锐利如鹰。</p>
                <div class="character-tags">
                    <span class="tag">主角</span>
                    <span class="tag">射手</span>
                </div>
            </div>
        </div>
    </a>

    <!-- 角色6 -->
    <a href="characters/sunba" class="character-link">
        <div class="character-card" data-tags="配角 治疗">
            <img src="../images/characters/sunba.jpg" alt="孙八" class="character-image" loading="lazy">
            <div class="character-info">
                <h3 class="character-name">孙八</h3>
                <p class="character-description">善良的治疗师，精通草药学。</p>
                <div class="character-tags">
                    <span class="tag">配角</span>
                    <span class="tag">治疗</span>
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
            filterCharacters();
        });
    });
    
    // 搜索框输入事件
    searchBox.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        filterCharacters();
    });
    
    // 筛选函数
    function filterCharacters() {
        let visibleCount = 0;
        
        characterCards.forEach(card => {
            const tags = card.dataset.tags.toLowerCase();
            const name = card.querySelector('.character-name').textContent.toLowerCase();
            
            // 检查筛选条件
            const matchesFilter = currentFilter === 'all' || tags.includes(currentFilter);
            const matchesSearch = currentSearch === '' || 
                name.includes(currentSearch) || 
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
    filterCharacters();
});
</script>