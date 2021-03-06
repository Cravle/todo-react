const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@type': path.resolve(__dirname, 'src/types/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@selectors': path.resolve(__dirname, 'src/store/selectors/'),
      '@actions': path.resolve(__dirname, 'src/store/actions/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
    },
  },
}
