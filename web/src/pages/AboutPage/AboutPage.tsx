import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <header>
        <h2 className="text-xl text-blue-700 font-semibold">Hello!</h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        Nơi lưu lại các bài viết về công việc, sở thích, văn hoá... từ góc nhìn
        của cá nhân. Trang blog này được xây dựng dựa trên hướng dẫn (tutorial)
        từ website https://redwoodjs.com/
      </div>
    </>
  )
}

export default AboutPage
