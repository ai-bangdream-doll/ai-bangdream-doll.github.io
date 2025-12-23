param(
    [int]$min = $(Read-Host "请输入最小编号(min)"),
    [int]$max = $(Read-Host "请输入最大编号(max)")
)

# 获取当前目录中的所有图片文件
$imageExtensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.bmp", "*.webp")
$images = @()

foreach ($ext in $imageExtensions) {
    $images += Get-ChildItem -Path . -Filter $ext
}

# 检查图片数量是否与编号范围匹配
$totalImages = $images.Count
$range = $max - $min + 1

if ($totalImages -ne $range) {
    Write-Host "警告: 图片数量 ($totalImages) 与编号范围 ($range) 不匹配！" -ForegroundColor Yellow
    Write-Host "将处理 $totalImages 张图片，编号从 $min 到 $($min + $totalImages - 1)" -ForegroundColor Yellow
    $max = $min + $totalImages - 1
}

# 按名称排序图片
$sortedImages = $images | Sort-Object Name

# 遍历图片并重命名、移动
for ($i = 0; $i -lt $sortedImages.Count; $i++) {
    $currentImage = $sortedImages[$i]
    $newNumber = $min + $i
    $newName = "gv$newNumber"
    $newFileName = "$newName$($currentImage.Extension)"
    $newFolderPath = ".\$newName"
    
    # 创建目标文件夹
    if (!(Test-Path $newFolderPath)) {
        New-Item -ItemType Directory -Path $newFolderPath | Out-Null
        Write-Host "创建文件夹: $newFolderPath"
    }
    
    # 重命名图片
    $tempNewPath = Join-Path $currentImage.DirectoryName $newFileName
    Rename-Item -Path $currentImage.FullName -NewName $newFileName
    Write-Host "重命名: $($currentImage.Name) -> $newFileName"
    
    # 移动重命名后的图片到对应文件夹
    $destinationPath = Join-Path $newFolderPath $newFileName
    Move-Item -Path $tempNewPath -Destination $destinationPath
    Write-Host "移动: $newFileName -> $newFolderPath"
}

Write-Host "操作完成！" -ForegroundColor Green