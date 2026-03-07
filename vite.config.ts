import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import fs from 'fs'
import path from 'path'

const copyAssets = () => {
  return {
    name: 'copy-assets',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true })

      const filesToCopy = ['config.js', 'detect-devtools.js']
      for (const file of filesToCopy) {
        if (fs.existsSync(file)) fs.copyFileSync(file, path.join(distDir, file))
      }

      const copyDir = (src: string, dest: string) => {
        if (!fs.existsSync(src)) return
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
        for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)
          entry.isDirectory() ? copyDir(srcPath, destPath) : fs.copyFileSync(srcPath, destPath)
        }
      }

      copyDir(path.resolve(__dirname, 'assets'), path.join(distDir, 'assets'))
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl(), copyAssets()],
  server: {
    host: true,   // Expose ra LAN (0.0.0.0)
  },
})
