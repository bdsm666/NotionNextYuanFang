import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
// import PoweredBy from '@/components/PoweredBy' // 我们不需要引用这个组件了，所以我把它注释掉了
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

/**
 * 页脚
 * @returns
 */
const Footer = () => {
  const BEI_AN = siteConfig('BEI_AN')
  const BEI_AN_LINK = siteConfig('BEI_AN_LINK')
  const BIO = siteConfig('BIO')
  return (
    <footer className='relative bg-white text-gray-500 text-sm p-6 text-center flex flex-col items-center justify-center w-full'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息（去掉了强制两端对齐，全部改为中心对齐） */}
      <div
        id='footer-bottom'
        className='w-full flex flex-col p-4 justify-center items-center gap-2 bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
        
        {/* 左侧信息块（去掉了电脑端强制靠左，改为全局居中） */}
        <div id='footer-bottom-left' className='text-center flex flex-col items-center'>
          {/* <PoweredBy /> 已经把这个原作者的标志删掉了！ */}
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

        {/* 右侧信息块（加上了居中对齐） */}
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
