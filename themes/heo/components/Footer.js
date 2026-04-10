import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * @returns
 */
const Footer = () => {
  const BEI_AN = siteConfig('BEI_AN')
  const BEI_AN_LINK = siteConfig('BEI_AN_LINK')
  const BIO = siteConfig('BIO')
  return (
    // mt-12: 保证页脚和上面的翻页按钮有一段舒适的距离
    <footer className='relative text-gray-500 text-sm text-center flex flex-col items-center justify-center w-full mt-12'>
      
      {/* 底部页面信息 */}
      {/* py-8: 撑开上下高度，达到 Astra 主题那种舒适的呼吸感 */}
      <div
        id='footer-bottom'
        className='w-full flex flex-col py-8 px-4 justify-center items-center gap-2 bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
        
        {/* 左侧信息块 */}
        <div id='footer-bottom-left' className='text-center flex flex-col items-center'>
          <div className='flex gap-x-1 justify-center mt-1'>
            <CopyRightDate />
            <a
              href={'/about'}
              className='underline font-semibold dark:text-gray-300 '>
              {siteConfig('AUTHOR')}
            </a>
            {BIO && <span className='mx-1'> | {BIO}</span>}
          </div>
        </div>

        {/* 右侧信息块 */}
        <div id='footer-bottom-right' className='text-center flex justify-center items-center flex-wrap gap-2 mt-2'>
          {BEI_AN && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href={BEI_AN_LINK} className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}
          <BeiAnGongAn />

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
