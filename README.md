## LittleGitShortKeyCommandLine
- 应用node脚本简化git操作指令，减去繁琐的git指令输入，点滴中提升开发效率
 ## 安装步骤
 - 前提：暂时只适用于windows命令行，
 - 1, 将目录导入本地，cd进入当前目录
 - 2，安装前需要验证指令是否被占用，要不然遇到坑就很难受了哦
 - 3, 进入下载目录` cd LittleGitShortKeyCommandLine`
 - 4, 执行`npm install -g`
 ## 用法说明
 - 安装好之后就可以在全局使用快捷键了，在进行Git开发时只需要执行下列指令便会自动运行Git命令
 - 在需要下载github或者gitlab等需要git下载的地方执行 `ct your-git-address` ,便会自动下载然后自动进入下载目录
  相当于 ` git clone your-git-address  -> cd your-git-directory`
 - 执行 `ac your-commit` 相当于 `git init -> git add . -> git commit -m "your-commit"`
 - 执行 `pp your-branch` 相当于 `git pull origin your-branch -> git push your-branch` 
 - 最后一个可选指令 `acpp your-commit your-branch` ,和我一样聪明的都知道就是 `git add . -> git commit -m "your-commit" -> git pull origin your-branch -> git push your-branch`

## Tips
- git操作需要提前配置好.gitignore文件，避免将node_modules模块传上去
- 如果想定制自己的命令，每次保存后都需要重新npm install -g，以免指令失效
- ac 不加commit默认是[+]just add
- pp 不加分支默认是master分支