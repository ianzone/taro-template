---
name: 'wechatide cli'
description: '微信开发者工具 Skills'
applyTo: "**"
---
# 微信开发者工具 Skills

Skills 目录："C:\Program Files (x86)\Tencent\微信 web 开发者工具\resources\app.asar.unpacked\wechatide-skill"

skill-cli 用法:
  wechatide -c <clientName> <toolName> [flags...] [--token <token>]
  wechatide -c <clientName> <toolName> -h

可用工具：

[ide] 开发者工具
  check_wechatide_status
    读取微信开发者工具状态 — 只读获取登录态（loginExpired）、当前用户（loginUser）、skill 版本关系（versionRelation）、CLI 可选…
  close_project_window
    关闭项目窗口 — 关闭包含模拟器的项目窗口，不等于完全退出微信开发者工具
  login
    触发扫码登录 — 触发扫码登录并返回 taskId；可打开独立置顶窗口，或直接向 agent 返回二维码图片
  open_project_window
    打开项目窗口 — 打开包含模拟器的项目窗口
  polling_task_result
    查询异步任务结果 — 通用异步结果查询：任何需要用户授权、扫码或操作确认的 toolCall 都会返回 taskId
  quit
    退出工具 — 关闭 WechatIDE

[project-manager] 项目管理
  import_minicode
    导入代码片段 — 通过代码片段链接导入项目并加入项目列表，不打开项目窗口；导入后须先检查代码安全性
  project_import
    导入项目到列表 — 将本地项目目录导入到微信开发者工具项目列表，不打开项目窗口；路径已在列表中时返回 alreadyImported
  project_list
    列出已导入项目 — 只读列出微信开发者工具已导入的项目列表；默认返回主列表（小程序/小游戏等），可通过 scope 查看其他项目
  project_remove
    从列表删除项目 — 从项目列表移除项目，不删除磁盘文件，不等于关闭整个微信开发者工具
  share_minicode
    分享代码片段 — 将本地项目分享为代码片段并返回链接，不打开项目窗口

[project-action] 项目操作
  auto_preview
    推送手机预览 — 把预览直接推送到开发者微信，无需生成二维码文件
  build_npm
    构建 npm — 构建 npm
  create_preview_qrcode
    获取小程序预览二维码 — 生成可扫码的小程序预览二维码
  simulator_open_page
    编译并打开指定页面 — 触发项目窗口模拟器编译并打开指定页面
  simulator_refresh
    刷新模拟器 — 触发项目窗口模拟器重新编译/刷新当前页面；不返回编译结果
  upload
    发布体验版 — 上传代码包 (发布体验版)

[runtime] 运行时
  get_simulator_console
    读取 console — 对小程序 console 缓冲区执行 grep 过滤并返回命中行
  get_simulator_network
    读取 network — 对小程序 network 缓冲区执行 grep 过滤并返回命中行
  get_user_appids
    获取用户可管理的全部 AppID — 获取当前登录用户可管理的全部 AppID 列表
  simulator_screenshot
    截取模拟器画面 — 截图；返回 path + imageWidth/imageHeight；默认优化尺寸（长边 1280 JPEG）

[compile] 编译
  compile_wxml
    编译 WXML 模板 — 只读获取 WXML 模板的编译结果摘要，用于诊断模板编译产物；不是整页编译或预览
  compile_wxss
    编译 WXSS 样式 — 只读获取 WXSS 样式的编译结果摘要，用于诊断样式编译产物；不是整页编译或预览

[automation] 自动化
  automation_element_action
    元素级操作 — 读取或操作 selector 命中的元素；交互 action 会真实触发点击、输入、滚动或触摸事件，支持操作前等待
  automation_evaluate
    运行时执行 — 在当前小程序或小游戏运行时执行一段 JS 函数字符串并返回结果
  automation_game_action
    小游戏画布触摸 — 小游戏画布触摸：tap / swipe / touch*；坐标默认画布空间，可用 coordinateSpace=image + imageWi…
  automation_generate_script
    生成 automator 脚本 — 把已记录调用生成可用 node 运行的 automator 脚本；不传项目路径时使用录制时的路径
  automation_navigate
    页面导航 — 在当前小程序运行时执行页面导航，不负责页面断言；支持 waitForSelector / wait 在导航前等待
  automation_page_action
    页面级操作 — 针对当前页面实例执行页面级读写
  automation_runtime_info
    运行时信息 — 读取当前小程序运行时信息
  automation_testaccount
    测试号与 ticket — 管理小程序测试号与登录 ticket：列出测试号、获取/设置/刷新 ticket
  automation_viewport_action
    页面操作 — 执行滚动、真机调试或关闭工具；支持操作前等待
  automation_wx_api
    小程序 API 调试 — 调用、mock 或恢复 wx API

[debug] 调试
  debug_clear_cache
    清理缓存 — 清理当前项目的本地调试缓存，会影响当前调试上下文；清除的缓存类型由 action 指定

[cloud] 云开发
  cloud_db_read_doc
    读取云数据库内容 — 只读查询云数据库集合文档，支持条件、投影、排序和分页
  cloud_db_read_struct
    读取云数据库结构 — 只读查询云数据库集合与索引结构
  cloud_db_write_doc
    修改云数据库内容 — 修改云数据库集合文档（插入/更新/删除），属于写操作
  cloud_db_write_struct
    修改云数据库结构 — 修改云数据库集合结构（创建/删除集合、管理索引），属于写操作
  cloud_env_list
    列出云环境 — 只读列出当前项目或 AppID 可用的云环境
  cloud_fn_deploy
    部署云函数 — 按云函数目录路径完整部署单个云函数到指定云环境，属于写操作；一次只允许部署一个云函数目录，目录名即函数名称
  cloud_fn_inc_deploy
    增量部署云函数 — 按云函数目录路径增量部署变更文件或目录到指定云环境，属于写操作；函数目录名即函数名称
  cloud_fn_info
    查询云函数信息 — 只读查询指定云函数的详情和状态
  cloud_fn_list
    列出云函数 — 只读列出指定云环境中的云函数
  cloud_manage_msg_push
    管理消息推送 — 管理小程序云开发消息推送配置（订阅/退订/启停/确保云函数模式），属于写操作
  cloud_manage_storage
    修改云存储 — 管理云存储文件（上传/下载/删除）；upload/delete 属于写操作
  cloud_query_msg_push
    查询消息推送 — 只读查询小程序云开发消息推送配置或合法事件约束
  cloud_query_storage
    读取云存储 — 只读查询云存储文件列表、文件信息、临时下载链接或文本内容

查看某个工具完整参数：wechatide <toolName> --help