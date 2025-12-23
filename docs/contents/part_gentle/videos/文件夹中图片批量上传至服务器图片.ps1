# 获取用户输入的开始和结束编号
$startNum = Read-Host "请输入起始编号 (例如 6)"
$endNum = Read-Host "请输入结束编号 (例如 25)"

# 转换为整数
$startNum = [int]$startNum
$endNum = [int]$endNum

Write-Host "正在处理从 gv$startNum 到 gv$endNum 的文件..."

foreach ($i in $startNum..$endNum) {
    $folder = "gv$i"
    $targetFileName = "gv$i.png"
    $localFilePath = "$folder\$targetFileName"
    
    # 检查文件是否存在
    if (Test-Path $localFilePath) {
        $remoteFilePath = "/images/cover/$targetFileName"
        Write-Host "正在上传: $localFilePath -> $remoteFilePath"
        coscmd upload "$localFilePath" "$remoteFilePath"
    } else {
        Write-Warning "文件不存在，跳过: $localFilePath"
    }
}

Write-Host "批量上传完成！"