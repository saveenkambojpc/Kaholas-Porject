import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
export default function Home() {
  return (
    <div className=" p-10">
      <h2 className="text-5xl font-bold text-slate-800">
        Summer Art Camp! 5 Days of Artist and Paint Monet, Va Gogh, Mattisse, &
        More
      </h2>
      <div className="flex space-x-2 text-slate-500 my-2 text-xl">
        <p className=" font-semibold">Multi-Day Course</p>
        <span className="flex items-center">
          <AiOutlineQuestionCircle />
        </span>
      </div>

      <div className="my-10 flex">
        <div className="description w-1/2">
          <p className="text-xl ">
            In this 5 dat ckass we will explore artists Monet, Matisse, Van
            Gogh, among other and then recreate paintings using crayon and
            watercolor. Students will have fun learning about the artist &
            creating their own art inspired by their work.
          </p>

          <div className="flex space-x-2 my-4">
            <img
              src="https://dominic-russel.netlify.app/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg"
              className="rounded-full h-9"
              alt=""
            />
            <span className="text-purple-600 font-semibold text-xl">
              Kimberly R Moseler
            </span>
          </div>

          <div className="star  ">
            <div className="flex space-x-2">
              <div className="flex text-2xl text-[#f9c847]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <span>467 total review for this teacher</span>
            </div>
            <div className="flex space-x-2">
              <div className="flex text-2xl text-[#f9c847]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <span>5 review for this class</span>
            </div>
          </div>

          <div className="flex space-x-2 my-4">
            <span className=" text-xl">Completed by 21 learners</span>
          </div>

          <div className="actions flex space-x-10">
            <button className="bg-purple-600 px-8 py-2 rounded-full text-xl text-white flex items-center">
              <span>See Class Schedule</span>
              <AiOutlineRight />
            </button>

            <button className=" text-xl text-purple-600 flex items-center">
              <AiOutlineHeart />
              <span className="ml-1">Save</span>
            </button>
            <button className=" text-xl text-purple-600 flex items-center">
              <RiShareForwardLine />
              <span className="ml-1">Share </span>
            </button>
          </div>
        </div>

        <div className="gallary w-1/2 h-80 flex  ">
          <div className="w-1/2 bg-slate-300 mr-2 overflow-hidden">
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sky-night-blue-painting-green-palace.jpg" className='object-contain' alt="" />
          </div>
          <div className="w-1/2  overflow-y-hidden ">
            <div className="w-full h-1/2 ">
              <img src="https://c4.wallpaperflare.com/wallpaper/981/269/135/space-planet-landscape-science-fiction-wallpaper-preview.jpg" alt="" className='object-contain h-full w-full' />
            </div>
            <div className="w-full h-1/2 ">
              <img src="https://c4.wallpaperflare.com/wallpaper/422/823/814/fantasy-world-sci-fi-landscape-field-wallpaper-preview.jpg" alt="" className='object-contain h-full w-full mt-2' />
            </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}
