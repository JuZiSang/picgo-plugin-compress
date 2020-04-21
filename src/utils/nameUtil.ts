import { NameType } from './enums'
import * as path from 'path'

export function reName(nameType: string, url: string): string {
  const fileName = path.basename(url)
  const extname = path.extname(url)
  switch (nameType) {
    case NameType.timestamp:
      return `${Date.now()}${extname}`
    case NameType.none:
    default:
      return `${fileName}${extname}`
  }
}