import dayjs, { Dayjs } from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isBetween from 'dayjs/plugin/isBetween'
import 'dayjs/locale/zh-cn'

// 使用插件
dayjs.extend(isLeapYear)
dayjs.extend(isBetween)

// 使用本地化语言
dayjs.locale('zh-cn')

export { dayjs, Dayjs }
