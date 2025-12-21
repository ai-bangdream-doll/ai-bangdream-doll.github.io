import os
import glob

def create_markdown_files():
    # 设置路径
    source_dir = r'D:\AI-Web\Shuixin-xdu.github.io\docs\contents\pictorial_guide'
    target_dir = r'D:\AI-Web\Shuixin-xdu.github.io\docs\contents\characters'
    
    # 确保目标目录存在
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        print(f"创建目录: {target_dir}")
    
    # 获取所有png文件
    png_files = glob.glob(os.path.join(source_dir, '*.png'))
    
    created_count = 0
    skipped_count = 0
    
    for png_file in png_files:
        # 获取不带扩展名的文件名
        base_name = os.path.splitext(os.path.basename(png_file))[0]
        
        # 构建对应的markdown文件路径
        md_file = os.path.join(target_dir, f'{base_name}.md')
        
        # 检查markdown文件是否已存在
        if not os.path.exists(md_file):
            try:
                # 创建空的markdown文件
                with open(md_file, 'w', encoding='utf-8') as f:
                    # 可以添加一些默认内容，如果需要的话
                    f.write(f'# {base_name}\n\n')
                    f.write(f'![{base_name}](../../contents/pictorial_guide/{base_name}.png)\n\n')
                    f.write('在这里添加描述...\n')
                
                created_count += 1
                print(f"创建: {base_name}.md")
            except Exception as e:
                print(f"创建 {base_name}.md 时出错: {e}")
        else:
            skipped_count += 1
            print(f"跳过: {base_name}.md (已存在)")
    
    print(f"\n完成!")
    print(f"创建了 {created_count} 个新文件")
    print(f"跳过了 {skipped_count} 个已存在的文件")

if __name__ == '__main__':
    create_markdown_files()